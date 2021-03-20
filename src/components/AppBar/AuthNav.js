import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../Router/routes';
import s from './Navigation.module.css';

const AuthNav = () => {
    return (
        <div>
            <NavLink
                to={routes.register}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Registration
            </NavLink>
            <NavLink
                to={routes.login}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Login
            </NavLink>
        </div>
    );
};

export default AuthNav;