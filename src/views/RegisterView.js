import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

import s from './Auth.module.css';
import '../styles/animations/NoticeAppear.css';

class RegisterView extends Component {
  state = {
    name: '',
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

    this.props.onRegister(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.formWrapper}>
        <h2 className={s.title}>Registration</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
            <Input
                label="Name"
                name="name"
                value={name}
                placeholder=" "
                autoComplete="name"
                onChange={this.handleChange}
            />
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
            <Button type="submit" title="SignUp" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
