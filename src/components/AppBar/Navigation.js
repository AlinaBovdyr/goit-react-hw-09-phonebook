import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../Router/routes';
import s from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
    return (
        <nav>
            <NavLink to={routes.home} exact className={s.link} activeClassName={s.activeLink}>
                Homepage
            </NavLink>

            {isLoggedIn &&
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