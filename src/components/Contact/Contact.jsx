import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import style from "../Contact/Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={style.contactItem}>
        <span>
          <FaUser /> {item.contactName}
        </span>
        <span>
          <FaPhone /> {item.number}
        </span>

        <button
          onClick={() => dispatch(deleteContactThunk(item.id))}
          className={style.delBtn}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
