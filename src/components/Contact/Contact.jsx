import { FaUserCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contactId, name, phone }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.profile}>
        <p className={styles.name}>
          <FaUserCircle className={styles.icon} />
          {name}
        </p>
        <a href={`tel:${phone}`} className={styles.phone}>
          <AiFillPhone className={styles.icon} />
          {phone}
        </a>
      </div>

      <button onClick={handleClick} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
