import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import './NavBar.css';
import logotype from '../images/hub_logotype.png';

class NavBar extends Component {
	constructor() {
		super();

		this.state = {
			displayMenu: true,
			isOpen: false
		};

		this.showDropdownMenu = this.showDropdownMenu.bind(this);
		this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
	}

	showDropdownMenu(event) {
		this.setState({ isOpen: !this.state.isOpen });
		// event.preventDefault();
		// this.setState({ displayMenu: true }, () => {
		// 	document.addEventListener('click', this.hideDropdownMenu);
		// 	console.log('hide');
		// });
	}

	hideDropdownMenu() {
		this.setState({ isOpen: !this.state.isOpen });
		// this.setState({ displayMenu: false }, () => {
		// 	document.removeEventListener('click', this.hideDropdownMenu);
		// 	console.log("hide");
		// });
	}

	logout = e => {
		e.preventDefault();
		this.props.logout();
	};

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					{/* <Link to='/' className='navbar-brand'>
							<img src={logotype} />
							<h2 className='navbar-brand logo-text'>US-Hub</h2>
						</Link> */}
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<a href='/' className='nav-link'>
								Головна
							</a>
						</li>
						<li className='navbar-nav dropdown'>
							<a
								className='btn dropdown-toggle'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
								onClick={this.showDropdownMenu}
							>
								Проекти
							</a>
							{/* {this.state.displayMenu ? ( */}
							<div
								className={menuClass}
								aria-labelledby='navbarDropdown'
								id='dropdown'
							>
								<a className='dropdown-item' href='/projects/system_Air'>
									Система "Повітря"
								</a>
								<a className='dropdown-item' href='/project_2'>
									Проект 2
								</a>
								{this.props.currentUser.isAuthenticated ? (
									<div>
										<div className='dropdown-divider'></div>
										<a className='dropdown-item' href='/inedited_project_1'>
											Неопублікований Проект 3
										</a>
									</div>
								) : null}
							</div>
						</li>
						<li className='nav-item'>
							<a href='/news/' className='nav-link'>
								Новини
							</a>
						</li>
						<li className='nav-item'>
							<a href='/about' className='nav-link'>
								Про нас
							</a>
						</li>
					</ul>
				</div>
				{this.props.currentUser.isAuthenticated ? (
					<ul className='navbar-nav navbar-right'>
						<li className='nav-item'>
							<Link
								className='nav-link'
								to={`/users/${this.props.currentUser.user.id}/messages/new`}
							>
								Новий проект
							</Link>
						</li>
						<li className='nav-item'>
							<a href='/' className='nav-link' onClick={this.logout}>
								Вийти
							</a>
						</li>
					</ul>
				) : (
					<ul className='navbar-nav navbar-right'>
						<li className='nav-item'>
							<Link to='/signup' className='nav-link'>
								Зареєструватися
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/signin' className='nav-link'>
								Увійти
							</Link>
						</li>
					</ul>
				)}
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(
	mapStateToProps,
	{ logout }
)(NavBar);
