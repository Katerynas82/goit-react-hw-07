import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))
        ) : (
          <p> No contacts available</p>
        )}
      </ul>
    </>
  );
};

export default ContactList;
