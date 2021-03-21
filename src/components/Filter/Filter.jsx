import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChangeFilter = useCallback((e) => {
    dispatch(changeFilter(e.target.value))
  }, [dispatch]);

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
};