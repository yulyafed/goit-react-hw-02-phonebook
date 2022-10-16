import { nanoid } from 'nanoid'
import { Component } from "react";
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export class App extends Component {

  state = {
    contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
      name: ''
}
  
  render() {

           return (
      
             <div>
               <div>
                 <h2>Phonebook</h2>
                 <div><PhonebookForm contacts={this.state.contacts } /></div> 
               </div>
               <div>
                 <h2>Contacts</h2>
                 <div>{ <ul>
     {this.state.contacts.map((contact) => (
        <li key={contact.id}>
          <p > {contact.name} </p>
        </li>
      ))}
        </ul>}</div>
               </div>
             </div>
      
    );
  };
}