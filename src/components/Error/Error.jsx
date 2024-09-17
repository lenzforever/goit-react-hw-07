import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default Error;
