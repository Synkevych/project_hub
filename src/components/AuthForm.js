import React from 'react';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			position: '',
			country: '',
			area: '',
			institution: '',
			tel: '',
			email: '',
			username: '',
			password: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const authType = this.props.signUp ? 'signup' : 'signin';
		this.props
			.onAuth(authType, this.state)
			.then(() => {
				this.props.history.push('/');
			})
			.catch(() => {
				return;
			});
	};
	render() {
		const {
			fullname,
			position,
			country,
			area,
			tel,
			problem,
			email,
			username,
			password,
			institution
		} = this.state;
		const {
			heading,
			buttonText,
			signUp,
			errors,
			history,
			removeError
		} = this.props;
		history.listen(() => {
			removeError();
		});
		return (
			<div>
				<div className='row justify-content-md-center text-center'>
					<div className='col-md-6'>
						<form action='' onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && (
								<div className='alert alert-danger'>{errors.message}</div>
							)}
							<label htmlFor='email'>E-mail адреса:</label>
							<input
								className='form-control'
								id='email'
								name='email'
								autoComplete='on'
								onChange={this.handleChange}
								value={email}
								type='email'
							/>
							<label htmlFor='password'>Пароль:</label>
							<input
								className='form-control'
								id='password'
								name='password'
								autoComplete='on'
								onChange={this.handleChange}
								value={password}
								type='password'
							/>
							{signUp && (
								<div>
									<label htmlFor='username'>Логін:</label>
									<input
										className='form-control'
										id='username'
										name='username'
										autoComplete='on'
										onChange={this.handleChange}
										value={username}
										type='text'
									/>

									<label htmlFor='fullname'>Пізвище, Ім'я, По-батькові:</label>
									<input
										className='form-control'
										id='fullname'
										name='fullname'
										autoComplete='on'
										onChange={this.handleChange}
										value={fullname}
										type='text'
									/>
									<label htmlFor='position'>Посада:</label>
									<input
										className='form-control'
										id='position'
										name='position'
										autoComplete='on'
										onChange={this.handleChange}
										value={position}
										type='text'
									/>
									<label htmlFor='institution'>Установа:</label>
									<input
										className='form-control'
										id='institution'
										name='institution'
										autoComplete='on'
										onChange={this.handleChange}
										value={institution}
										type='text'
									/>
									<label htmlFor='country'>Країна:</label>
									<input
										className='form-control'
										id='country'
										name='country'
										autoComplete='on'
										onChange={this.handleChange}
										value={country}
										type='text'
									/>
									<label htmlFor='area'>Дослідницька область:</label>
									<input
										className='form-control'
										id='area'
										name='area'
										autoComplete='on'
										onChange={this.handleChange}
										value={area}
										type='text'
									/>

									<label htmlFor='tel'>Номер телефону:</label>
									<input
										className='form-control'
										id='tel'
										name='tel'
										autoComplete='on'
										onChange={this.handleChange}
										value={tel}
										type='tel'
									/>

									<label htmlFor='problem'>
										Опишіть коротко наукову проблему та обчислювальну
										методологію яку ви збираєтеся застосувати:
									</label>
									<textarea
										className='form-control'
										id='problem'
										name='problem'
										autoComplete='on'
										onChange={this.handleChange}
										value={problem}
									/>
								</div>
							)}
							<button
								type='submit'
								className='btn btn-primary btn-block btn-lg'
							>
								{buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AuthForm;
