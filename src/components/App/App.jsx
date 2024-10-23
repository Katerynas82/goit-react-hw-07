import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "../App/App.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
// import { getError, getIsLoading } from "../../redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.formWrapper}>
      <h1> Phone Book </h1>
      <ContactForm />

      <SearchBox />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </div>
  );
};

export default App;
