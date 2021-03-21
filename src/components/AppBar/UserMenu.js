import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../img/default-avatar.png';
import s from './Navigation.module.css';

export default function UserMenu() {
    const avatar = defaultAvatar;
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    
    const onLogout = useCallback(() => {
        dispatch(authOperations.logout());
    },[dispatch]);

    return (
        <div className={s.userMenu}>
            <img className={s.avatar} src={avatar} alt={name} />
            <span className={s.link}>Welcome, {name}</span>
            <button className={s.headerBtn} type="button" onClick={onLogout}>Logout</button>
        </div>
    );
};