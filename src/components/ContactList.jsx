import { Contact } from "./Contact";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map((i) => (
          <Contact
            key={i.id}
            id={i.id}
            name={i.name}
            number={i.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};
