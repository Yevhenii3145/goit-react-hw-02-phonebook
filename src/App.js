import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ContactList from './components/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (filter.length === 0) {
      return contacts;
    }
    const normalisedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      const result = normalizedName.includes(normalisedFilter);
      return result;
    });
    return filteredContacts;
  }

  render() {
    const filterId = nanoid();
    const constacts = this.getFilteredContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact} />
        <h3>Contacts</h3>
        <label htmlFor={filterId}>Find contacts by name</label>
        <input
          id={filterId}
          type="text"
          name="filter"
          value={this.filter}
          onChange={this.handleChange}
        />
        <ContactList items={constacts} />
      </>
    );
  }
}
