import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import styles from './ContactForm.module.css';

const initialValues = {
  username: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { username, number } = values;
    
    const userProfile = {
      name: username,
      number,
    };
    
    dispatch(addContact(userProfile));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={styles.contactForm}>
        <label className={styles.label}>
          <span className={styles.labelName}>Name</span>
          <Field
            name="username"
            type="text"
            placeholder="Enter name"
            className={styles.field}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={styles.error}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Phone</span>
          <Field
            name="number"
            type="tel"
            placeholder="Enter phone"
            className={styles.field}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
