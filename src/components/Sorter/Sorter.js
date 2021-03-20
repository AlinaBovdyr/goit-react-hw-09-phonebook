import s from './Sorter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSorting, getSorter } from '../../redux/contacts';

const Sort = {
  ABC: 'abc',
  DATE: 'date',
};

function Sorter({ value, onRadioChange }) {
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

Sorter.propTypes = {
  value: PropTypes.string,
  onRadioChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: getSorter(state),
});

const mapDispatchToProps = dispatch => ({
  onRadioChange: e => dispatch(changeSorting(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
