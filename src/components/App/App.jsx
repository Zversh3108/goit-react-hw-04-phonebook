import React, { useState, useEffect } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import SearchContactByName from '../SearchContact/SearchContact';
import { Container } from './App.Styled';
import { useLocalStorage } from '../../hooks/useLocalStorageHook';
export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    if (normalizedFilter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <AddContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <SearchContactByName
        filter={filter}
        title="Find contact by name"
        onFilterChange={handleFilterChange}
      />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Notification message="No name found with this name." />
      )}
    </Container>
  );
}
App.propTypes = {
  contacts: PropTypes.array,
};
