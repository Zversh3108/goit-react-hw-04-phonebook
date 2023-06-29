import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Button,
} from 'components/ContactList/ContactList.Styled';
export default function ContactList(props) {
  const { contacts, onDeleteContact } = props;

  return (
    <div>
      <List>
        {contacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}
              <Button onClick={() => onDeleteContact(contact.id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
