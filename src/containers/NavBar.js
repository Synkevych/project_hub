import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import './NavBar.css';
import logotype from '../images/hub_logotype.png';

class NavBar extends Component {
	logout = e => {
		e.preventDefault();
		this.props.logout();
	};

	render() {
		return (
			<nav className='navbar navbar-expand'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						{/* <Link to='/' className='navbar-brand'>
							<img src={logotype} />
							<h2 className='navbar-brand logo-text'>US-Hub</h2>
						</Link> */}
						<ul className='nav navbar-nav'>
							<li>
								<a href='/'>Головна</a>
							</li>
							<li>
								<a href='/projects/'>Проекти</a>
							</li>
							<li>
								<a href='/news/'>Новини</a>
							</li>
							<li>
								<a href='/about'>Про нас</a>
							</li>
						</ul>
					</div>
					{this.props.currentUser.isAuthenticated ? (
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<Link
									to={`/users/${this.props.currentUser.user.id}/messages/new`}
								>
									Новий проект
								</Link>
							</li>
							<li>
								<a href='/' onClick={this.logout}>
									Вийти
								</a>
							</li>
						</ul>
					) : (
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<Link to='/signup'>Зареєструватися</Link>
							</li>
							<li>
								<Link to='/signin'>Увійти</Link>
							</li>
						</ul>
					)}
				</div>
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
