import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    hasToken,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props => 
            isAuthenticated || hasToken
                ? <Component {...props} />
                : <Redirect to={redirectTo} />
            
        }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
    hasToken: authSelectors.getToken(state),
});

export default connect(mapStateToProps)(PrivateRoute);
