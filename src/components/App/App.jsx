import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "../App/App.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsLoading, selectIsError } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.formWrapper}>
      <h1> Phone Book </h1>
      <ContactForm />

      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}

      <ContactList />
    </div>
  );
};

export default App;
