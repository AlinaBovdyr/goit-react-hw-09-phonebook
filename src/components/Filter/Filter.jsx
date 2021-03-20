import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contacts';
import s from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.container}>
      <label className={s.field}>
        <span className={s.label}>Find contacts by name:</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
