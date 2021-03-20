const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getError = state => state.auth.error;

const getToken = state => !!state.auth.token;

export default {
    getIsAuthenticated,
    getUserName,
    getError,
    getToken
}