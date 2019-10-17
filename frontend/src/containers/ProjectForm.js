import React, { Component } from 'react';

import { connect } from 'react-redux';
import { postNewMessage, removeMessage } from '../store/actions/messages';

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			project_name: '',
			instruction: '',
			email: '',
			image: '',
			authors: '',
			functionality: '',
			project_goal: '',
			link: ''
		};
	}

	handleNewProject = event => {
		event.preventDefault();
		this.props.postNewMessage(this.state.message);
		this.setState({
			name: '',
			project_name: '',
			instruction: '',
			email: '',
			image: '',
			authors: '',
			functionality: '',
			project_goal: '',
			link: ''
		});
		this.props.history.push('/');
	};
	render() {
		const {
			project_name,
			instruction,
			email,
			image,
			authors,
			functionality,
			project_goal,
			link
		} = this.state;
		return (
			<div className='row justify-content-md-center text-center'>
				<div className='col-md-6'>
					<form onSubmit={this.handleNewProject}>
						<h2 className='card-title my-4'>Додавання нового проекту:</h2>
						{this.props.errors.message && (
							<div className='alert alert-danger'>
								{this.props.errors.message}
							</div>
						)}
						<label htmlFor='project_name'>Назва проекту:</label>
						<input
							className='form-control'
							id='project_name'
							name='project_name'
							value={project_name}
							type='text'
							onChange={e => this.setState({ project_name: e.target.value })}
						/>
						<label htmlFor='link'>Посилання на проект:</label>
						<input
							className='form-control'
							id='link'
							name='link'
							value={link}
							type='text'
							onChange={e => this.setState({ link: e.target.value })}
						/>
						<label htmlFor='instruction'>
							Посилання на керівництво користувача:
						</label>
						<input
							className='form-control'
							id='instruction'
							name='instruction'
							value={instruction}
							type='text'
							onChange={e => this.setState({ instruction: e.target.value })}
						/>
						<label htmlFor='email'>Електронна адреса:</label>
						<input
							className='form-control'
							id='email'
							name='email'
							autoComplete='on'
							value={email}
							type='email'
							onChange={e => this.setState({ email: e.target.value })}
						/>
						<label htmlFor='image'>Посилання на зображення:</label>
						<input
							className='form-control'
							id='image'
							name='image'
							value={image}
							type='text'
							onChange={e => this.setState({ image: e.target.value })}
						/>
						<label htmlFor='authors'>Автори:</label>
						<textarea
							className='form-control'
							id='authors'
							name='authors'
							value={authors}
							onChange={e => this.setState({ authors: e.target.value })}
						/>
						<label htmlFor='functionality'>Функціональні можливості:</label>
						<textarea
							className='form-control'
							id='functionality'
							name='functionality'
							value={functionality}
							onChange={e => this.setState({ functionality: e.target.value })}
						/>
						<label htmlFor='project_goal'>Ціль проекту:</label>
						<textarea
							className='form-control'
							id='project_goal'
							name='project_goal'
							value={project_goal}
							onChange={e => this.setState({ project_goal: e.target.value })}
						/>

						{/* <input
							type='text'
							className='form-control'
							value={this.state.message}
							onChange={e => this.setState({ message: e.target.value })}
						/> */}
						<button
							type='submit'
							className='btn btn-success'
							onClick={removeMessage}
						>
							{' '}
							Додати проект
						</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		errors: state.errors
	};
}
export default connect(
	mapStateToProps,
	{ postNewMessage }
)(MessageForm);
