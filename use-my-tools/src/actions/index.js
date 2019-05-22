import axios from 'axios';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_OUT = 'LOGIN_OUT';
export const TOKEN_EXIST = 'TOKEN_EXIST';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FETCHING = 'REGISTER_FETCHING';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const loginSuccess = (cred) => (dispatch) => {
	dispatch({ type: LOGIN_FETCHING });
	return axios
		.post('https://rent-mytools.herokuapp.com//api/auth/login', cred)
		.then((res) => {
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data.token
			});
		})
		.catch((err) => {
			dispatch({
				type: LOGIN_FAILURE,
				payload: err.message
			});
		});
};

export const tokenExist = () => (dispatch) => {
	dispatch({ type: TOKEN_EXIST });
};

export const logOut = () => (dispatch) => {
	dispatch({ type: LOGIN_OUT });
};

export const registerSuccess = (cred) => (dispatch) => {
	dispatch({ type: REGISTER_FETCHING });

	return axios
		.post('https://rent-mytools.herokuapp.com//api/auth/register', cred)
		.then((res) => {
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('userID', res.data.userID);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data.token
			});
		})
		.catch((err) => {
			dispatch({
				type: REGISTER_FAILURE,
				payload: err.message
			});
		});
};