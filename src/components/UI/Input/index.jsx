import React from 'react';
import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ type, name, label, className, ...restProps }) => {

    return (
        <label className={s.inputField}>
          <input
            className={s.input}
            type={type}
            name={name}
            {...restProps}
          />
          <span className={s.inputLabel}>{label}</span>
        </label>
    );
};

Input.defaultProps = {
  type: 'text',
  name: null,
  label: '',
  className: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Input;