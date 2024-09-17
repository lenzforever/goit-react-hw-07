import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.filterField}>
      <h3 className={styles.filterFieldTitle}>Find contact by name</h3>
      <input
        className={styles.filterFieldInput}
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
};

export default SearchBox;
