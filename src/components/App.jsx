import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filteredContacts = () => {
    if (this.state.filter.trim() === '') {
      return this.state.contacts;
    }

    return this.state.contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          <PhonebookForm
            addContact={(contactName, contactNumber) => {
              this.setState(prevState => ({
                contacts: [
                  ...prevState.contacts,
                  { id: nanoid(), name: contactName, number: contactNumber },
                ],
              }));
            }}
          />
        </div>
        <h2>Contacts</h2>
        <ContactsFilter
          initialValue={this.state.filter}
          filterChanged={filterValue => this.setState({ filter: filterValue })}
        />

        <ContactsList contacts={this.filteredContacts()} />
      </div>
    );
  }
}
