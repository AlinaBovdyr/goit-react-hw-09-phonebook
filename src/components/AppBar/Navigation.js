import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../Router/routes';
import s from './Navigation.module.css';

const Navigation = ({isAuthenticated}) => {
    return (
        <nav>
            <NavLink to={routes.home} exact className={s.link} activeClassName={s.activeLink}>
                Homepage
            </NavLink>

            {isAuthenticated &&
                <NavLink
                    to={routes.contacts}
                    exact
                    className={s.link}
                    activeClassName={s.activeLink}
                >
                    Contacts
                </NavLink>
            }
        </nav>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
});

export default connect(mapStateToProps)(Navigation);