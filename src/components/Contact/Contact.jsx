import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import style from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <>
      <li className={style.contactItem}>
        <span>
          <FaUser /> {name}
        </span>
        <span>
          <FaPhone /> {number}
        </span>

        <button
          onClick={() => dispatch(deleteContactThunk(id))}
          className={style.delBtn}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
