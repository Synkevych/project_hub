import React, { Component } from 'react';

import { connect } from 'react-redux';
import { postNewMessage, removeMessage } from '../store/actions/messages';

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			name: '',
			link:'',
		};
	}

	handleNewProject = event => {
		event.preventDefault();
		this.props.postNewMessage(this.state.message);
		this.setState({ message: '' });
		this.props.history.push('/');
	};
	render() {
		const {name, link } = this.state;
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
						<label htmlFor='name'>Назва проекту:</label>
						<input
							className='form-control'
							id='name'
							name='name'
							autoComplete='on'
							value={name}
							type='text'
						/>
						<label htmlFor='link'>Посилання на проект:</label>
						<input
							className='form-control'
							id='link'
							name='link'
							autoComplete='on'
							value={name}
							type='text'
						/>
						<label htmlFor='name'>Посилання на керівництво користувача:</label>
						<input
							className='form-control'
							id='name'
							name='name'
							autoComplete='on'
							value={name}
							type='text'
						/>
						<label htmlFor='name'>Електронна адреса:</label>
						<input
							className='form-control'
							id='name'
							name='name'
							autoComplete='on'
							value={name}
							type='text'
						/>
						<label htmlFor='name'>Зображення:</label>
						<input
							className='form-control'
							id='name'
							name='name'
							autoComplete='on'
							value={name}
							type='file'
						/>
						<label htmlFor='name'>Автори:</label>
						<textarea
							className='form-control'
							id='name'
							name='name'
							value={name}
						/>
						<label htmlFor='name'>Функціональні можливості:</label>
						<textarea
							className='form-control'
							id='name'
							name='name'
							value={name}
						/>
						<label htmlFor='name'>Ціль проекту:</label>
						<textarea
							className='form-control'
							id='name'
							name='name'
							value={name}
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
