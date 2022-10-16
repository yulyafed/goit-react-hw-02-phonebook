export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(( contact ) => (
          <li key={contact.id}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
