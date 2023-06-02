import { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const userName = this.state.name;
    const number = this.state.number;

    const user = {
      name: userName,
      id: nanoid(),
      number: number,
    };

    this.state.contacts.push(user);
    this.setState({ name: '', number: '' });

    console.log(this.state);
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
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
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form> */}

        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />

        <h2>Contacts</h2>

        <h3>Find contacts by name</h3>
        <input
          onChange={this.heandleFilter}
          type="text"
          value={this.state.filter}
        />

        {this.state.filter !== '' ? (
          <ul>
            {this.getFilteredArr().map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
