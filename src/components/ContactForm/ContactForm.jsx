import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label className={css.label}>
          <span className={css.span}>Name:</span>
          <Field name="name" type="text" placeholder="Viktor Romaniukov" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="name" />
          </div>
        </label>

        <label className={css.label}>
          <span className={css.span}>Number:</span>
          <Field name="number" type="tel" placeholder="000-00-00" />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="number" />
          </div>
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
