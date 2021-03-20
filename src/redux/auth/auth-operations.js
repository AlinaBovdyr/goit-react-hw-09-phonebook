import axios from 'axios';
import authActions from './auth-actions';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        dispatch(authActions.registerSuccess(data));
    } catch (error) {
        const { statusText, status, data } = error.response;
        const message = data.message ? data.message : 'User with this email is already registered'
        const errorMessage = `${status} ${statusText}: ${message}`;
        dispatch(authActions.registerError(error.message));
        return toast.error(errorMessage);
    };
};

const login = credentials => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        dispatch(authActions.loginSuccess(data));
    } catch (error) {
        const { statusText, status } = error.response;
        const errorMessage = `${status} ${statusText}`;
        dispatch(authActions.loginError(error.message));
        return toast.error(errorMessage);
    };
};

const logout = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        await axios.post('/users/logout');
        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    };
};

const getCurrentUser = () => async (dispatch, getState) => {
    const { auth: { token: persistedToken } } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    try {
        const { data } = await axios.get('/users/current');
        dispatch(authActions.getCurrentUserSuccess(data));
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
}

export default {
    register,
    login,
    logout,
    getCurrentUser,
}