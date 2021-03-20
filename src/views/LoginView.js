import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

import s from './Auth.module.css';
import '../styles/animations/NoticeAppear.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.formWrapper}>
        <h2 className={s.title}>Login</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
            <Input
                label="E-mail"
                name="email"
                value={email}
                placeholder=" "
                autoComplete="email"
                onChange={this.handleChange}
            />
            <Input
                label="Password"
                name="password"
                value={password}
                placeholder=" "
                autoComplete="new-password"
                type="password"
                onChange={this.handleChange}
            />
            <Button type="submit" title="LogIn" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
