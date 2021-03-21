import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from '../redux/auth';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

import s from './Auth.module.css';
import '../styles/animations/NoticeAppear.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        toast.error(`The type of field name - ${name} is not processed`)
    };
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.login({email, password}))

    setEmail('');
    setPassword('');
  };

  return (
      <div className={s.formWrapper}>
        <h2 className={s.title}>Login</h2>
        <form className={s.form} onSubmit={handleSubmit}>
            <Input
                label="E-mail"
                name="email"
                value={email}
                placeholder=" "
                autoComplete="email"
                onChange={handleChange}
            />
            <Input
                label="Password"
                name="password"
                value={password}
                placeholder=" "
                autoComplete="new-password"
                type="password"
                onChange={handleChange}
            />
            <Button type="submit" title="LogIn" />
        </form>
      </div>
    );
};