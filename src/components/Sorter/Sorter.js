import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSorting, getSorter } from '../../redux/contacts';
import s from './Sorter.module.css';

const Sort = {
  ABC: 'abc',
  DATE: 'date',
};

export default function Sorter() {
  const dispatch = useDispatch();
  const value = useSelector(getSorter);

  const onRadioChange = useCallback(e => {
    dispatch(changeSorting(e.target.value))
  }, [dispatch]);

  return (
    <div className={s.container}>
      <p className={s.subtitle}>Sort by:</p>
      <div className={s.inputWrapper}>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="date"
            value={Sort.DATE}
            onChange={onRadioChange}
            checked={value === Sort.DATE}
          />
          <span>date</span>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="abc"
            value={Sort.ABC}
            onChange={onRadioChange}
            checked={value === Sort.ABC}
          />
          <span>name</span>
        </label>
      </div>
    </div>
  );
};