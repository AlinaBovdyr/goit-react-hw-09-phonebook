import React from 'react';
import { connect } from 'react-redux';
import { getError } from '../../../redux/contacts';
import PropTypes from 'prop-types';
import s from './Error.module.css';

const Error = ({message}) => {
    return (
        <h2 className={s.error}>
          {message}  
        </h2>
    );
};

Error.propTypes = {
    message: PropTypes.string,
};

const mapStateToProps = (state) => ({
    message: getError(state),
})

export default connect(mapStateToProps)(Error);