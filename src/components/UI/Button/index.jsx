import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type, title, className, ...restProps }) => {
    const classList = [s.button, className].join(' ');
    return (
        <button
            className={classList}
            type={type}
            {...restProps}
        >
            {title}
        </button>
    );
};

Button.defaultProps = {
  type: 'button',
  title: 'button'
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Button;