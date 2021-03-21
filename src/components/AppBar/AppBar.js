import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './Navigation.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};