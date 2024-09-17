import Contact from '../Contact/Contact';
import styles from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={styles.contact}>
            <Contact
              name={contact.name}
              phone={contact.number}
              contactId={contact.id}
            />
          </li>
        ))
      ) : (
        <li className={styles.noContacts}>No contacts found</li>
      )}
    </ul>
  );
};

export default ContactList;
