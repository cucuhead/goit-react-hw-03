//Tek kişiyi temsil ediyor
import css from "./Contact.module.css";

export const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={css.listItem}>
      <div className={css.listDiv}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
