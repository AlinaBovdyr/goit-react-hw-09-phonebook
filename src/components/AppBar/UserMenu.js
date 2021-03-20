import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../img/default-avatar.png';
import s from './Navigation.module.css';

const UserMenu = ({avatar, name, onLogout}) => {
    return (
        <div className={s.userMenu}>
            <img className={s.avatar} src={avatar} alt={name} />
            <span className={s.link}>Welcome, {name}</span>
            <button className={s.headerBtn} type="button" onClick={onLogout}>Logout</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: authSelectors.getUserName(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);