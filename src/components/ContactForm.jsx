import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

// Yup ile doğrulama şemasını oluşturuyoruz
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

// Formun başlangıç değerlerini belirliyoruz
const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = ({ addContact }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    // Yeni kişi objesini oluşturuyoruz, tek bir ID ile
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    addContact(newContact);

    // Formu temizliyoruz
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputField}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.inputField}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
