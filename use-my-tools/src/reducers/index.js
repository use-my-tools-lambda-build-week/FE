import {

    //login
	LOGIN_SUCCESS,
	LOGIN_FETCHING,
	LOGIN_FAILURE,
	LOGIN_OUT,
    TOKEN_EXIST,
    
    	//register
	REGISTER_SUCCESS,
	REGISTER_FETCHING,
	REGISTER_FAILURE,
} from '../actions'


const initialstate = {
	tools: [],
	tool: {},
	fetchingTools: false,
	loggingIn: false,
	isfetching: false,
	error: null
	
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {

//login reducers
case LOGIN_FETCHING:
return {
    ...state,
    loggingIn: false,
    isfetching: true,
    error: ''
};
case LOGIN_SUCCESS:
return {
    ...state,
    loggingIn: true,
    isfetching: false,
    error: ''
};
case LOGIN_FAILURE:
return {
    ...state,
    loggingIn: false,
    isfetching: false,
    err: action.payload
};
case LOGIN_OUT:
return {
    ...state,
    loggingIn: false
};
case TOKEN_EXIST:
return {
    ...state,
    loggingIn: true
};

// Register reducers
case REGISTER_FETCHING:
return {
    ...state,
    loggingIn: false,
    isfetching: true
};
case REGISTER_SUCCESS:
return {
    ...state,
    loggingIn: true,
    isfetching: false
};
case REGISTER_FAILURE:
return {
    ...state,
    loggingIn: false,
    isfetching: false,
    err: action.payload
};

default:
			return state;
    }
}

export default reducer;