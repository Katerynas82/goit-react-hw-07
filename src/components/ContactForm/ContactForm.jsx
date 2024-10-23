import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectContacts } from "../../redux/contactsSlice";
import { addContactThunk } from "../../redux/contactsOps";

const ContactFormSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short! Min 3 symbols.")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Invalid phone number. Must be digits only")
    .min(10, "Phone number is too short")
    .required("Phone number is required"),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { contactName, number } = values;

    if (contacts.some((contact) => contact.contactName === contactName)) {
      alert("This contact already exists!");
      return;
    }

    dispatch(addContactThunk({ id: nanoid(), contactName, number }));

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ contactName: "", number: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <Field
              name="contactName"
              className={styles.input}
              placeholder="Add contact name"
            />
            <ErrorMessage
              name="contactName"
              component="p"
              className={styles.error}
            />
          </label>

          <label className={styles.label}>
            <span>Phone number</span>
            <Field
              type="tel"
              name="number"
              className={styles.input}
              placeholder="Add contact phone"
            />
            <ErrorMessage
              name="number"
              component="p"
              className={styles.error}
            />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
