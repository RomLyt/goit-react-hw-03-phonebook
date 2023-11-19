import { ContactListItem } from 'components/ContactListItem';
import PropTypes from 'prop-types';
import css from './index.module.css';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
