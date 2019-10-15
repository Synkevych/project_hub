import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import Projects from '../components/Projects';
import News from '../components/News';
import About from '../components/About';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import ProjectForm from '../containers/ProjectForm';

const Main = props => {
	const { authUser, currentUser, errors, removeError } = props;
	return (
		<div className='container'>
			<Switch>
				<Route
					exact
					path='/'
					render={props => (
						<Homepage errors={errors} currentUser={currentUser} {...props} />
					)}
				/>
				<Route
					exact
					path='/projects/system_Air'
					render={props => {
						return <Projects />;
					}}
				/>
				<Route
					exact
					path='/news'
					render={props => {
						return <News />;
					}}
				/>
				<Route
					exact
					path='/about'
					render={props => {
						return <About />;
					}}
				/>
				<Route
					exact
					path='/signin'
					render={props => {
						return (
							<AuthForm
								removeError={removeError}
								errors={errors}
								onAuth={authUser}
								buttonText='Log in'
								heading='Welcome Back.'
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/signup'
					render={props => {
						return (
							<AuthForm
								removeError={removeError}
								errors={errors}
								onAuth={authUser}
								signUp
								buttonText='Зареєструватися'
								heading='Приєднайтеся до нас зараз'
								{...props}
							/>
						);
					}}
				/>
				<Route
					path='/users/:id/messages/new'
					component={withAuth(ProjectForm)}
				/>
			</Switch>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		errors: state.errors
	};
}

export default withRouter(
	connect(
		mapStateToProps,
		{ authUser, removeError }
	)(Main)
);
