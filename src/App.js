import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

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
    if (this.isDublicate(data)) {
      return alert(`${data.name} is already in contacts`);
    }
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

  isDublicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find(contact => contact.name === name);
    return result;
  }
  removeBook = id => {
    this.setState(prevState => {
      const newListContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return {
        contacts: newListContacts,
      };
    });
  };

  render() {
    const filterId = nanoid();
    const contacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filterId={filterId}
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
        <ContactList items={contacts} removeBook={this.removeBook} />
      </div>
    );
  }
}
