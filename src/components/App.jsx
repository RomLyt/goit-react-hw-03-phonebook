import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [
        ...contacts,
        { id: this.generetedId(), name: data.name, number: data.number },
      ],
    });
  };

  generetedId = () => {
    return nanoid(5);
  };

  handleChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = deleteId => {
    this.setState(PrevState => ({
      contacts: PrevState.contacts.filter(contact => contact.id !== deleteId),
    }));
    this.setState({ filter: '' });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          background: '#f5f3da',
        }}
      >
        <h1 style={{ marginBottom: 25 }}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 style={{ marginTop: 50, marginBottom: 0 }}>Contacts</h2>
        <p style={{ marginBottom: 15, fontWeight: 500 }}>
          Total contacts:
          <span style={{ fontWeight: 700 }}> {this.state.contacts.length}</span>
        </p>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
