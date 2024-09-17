import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';
import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoader } from './redux/contactsSlice';
import { fetchContacts } from './redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectLoader);

  return (
    <div className="app-container">
      <h1 className="app-title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default App;
