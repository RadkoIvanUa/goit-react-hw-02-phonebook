import { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const USERS_ARR = [];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const userName = form.elements.name.value;
    const number = form.elements.number.value;

    const user = {
      name: userName,
      id: nanoid(),
      number: number,
    };

    USERS_ARR.push(user);

    this.setState({ contacts: USERS_ARR });

    form.reset();
  };

  heandleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredArr() {
    const filter = this.state.filter.toLowerCase();

    const filteredArr = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return filteredArr;
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.heandleFilter} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          FilteredArr={this.getFilteredArr()}
        />
      </>
    );
  }
}
