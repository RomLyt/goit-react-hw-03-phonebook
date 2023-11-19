import PropTypes from 'prop-types';
import css from './index.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts:
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
