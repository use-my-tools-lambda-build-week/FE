import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Register from './components/loginRegister/register';
import PrivateRoute from './components/privateRoute';
import Login from './components/loginRegister/login';
import { tokenExist, logOut } from './actions';

class App extends Component{
  logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		localStorage.removeItem('userID');
		this.props.logOut();
		this.props.history.push('/login');
	};
	componentDidMount() {
		if (localStorage.getItem('token')) {
			this.props.tokenExist();
		}
	}
render(){
  return(
    
  )
}
}

const mapStateToProps = ({ loggingIn }) => ({
	loggingIn
});
export default withRouter(connect(mapStateToProps, { tokenExist, logOut })(App));


