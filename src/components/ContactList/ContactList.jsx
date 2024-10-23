import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import {selectSearchStr } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectSearchStr);
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.contactName.toLowerCase().includes(searchStr.toLowerCase().trim()) 
  );

  // export const selectVisibleContacts = createSelector(
  //   [selectContacts, selectNameFilter],
  //   (contacts, filter) => {
  //     return contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  // );
   console.log("Filtered contacts: ", filteredContacts);
   console.log("Search string: ", searchStr);

  return (
    <>
      <ul>
        {filteredContacts && filteredContacts.length > 0 ? (
          filteredContacts.map((item) => (
            <Contact key={item.id} item={item} />
          ))
        ) : (
          <p> No contacts available</p>
        )}
      </ul>
    </>
  );
};


// const ContactList = () => {
//  const contacts = useSelector(selectContacts)
//  const searchStr = useSelector(contactSearchStr);
//  const filteredData = contacts.filter(contact=>
//    contact.userName.toLowerCase().includes(searchStr.toLowerCase().trim())
//  );

//   return (
//     <>
//       <ul>
//         {filteredData && filteredData.length > 0 ? (
//           filteredData.map((item) => (
//             <Contact
//               key={item.id}
//               item={item} />
//           ))
//         ) : (
//           <p> No contacts available</p>
//         )}
//       </ul>
//     </>
//   );
// };

export default ContactList;
