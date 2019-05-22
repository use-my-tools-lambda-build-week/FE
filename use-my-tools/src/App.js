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
    <div className="app">

{!this.props.loggingIn && (
						<div className="nav-link">
							<NavLink className="NavLink" to="/login">
								Login
							</NavLink>
							<NavLink className="NavLink" to="/register">
								Register
							</NavLink>
							
						</div>
          )}
          <button className={this.props.loggingIn ? 'loginOutBtn' : 'displayNone'} onClick={this.logOut}>
						Log out
					</button>
<Route path="/register" component={Register} />
<Route path ="/login" component ={Login}/>
    </div>
  )
}
}

const mapStateToProps = ({ loggingIn }) => ({
	loggingIn
});
export default withRouter(connect(mapStateToProps, { tokenExist, logOut })(App));


