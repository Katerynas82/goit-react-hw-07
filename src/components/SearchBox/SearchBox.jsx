import { useDispatch } from "react-redux";
import styles from "../ContactForm/ContactForm.module.css";
import { searchContact  } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

   const handleSearchChange = (e) => {
     const searchValue = e.target.value;
     console.log("Search value: ", searchValue);
     dispatch(searchContact(searchValue)); 
   };
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          className={styles.input}
          placeholder="Search contact"
          onChange={handleSearchChange}
        />
      </label>
    </div>
  );
};
export default SearchBox;
