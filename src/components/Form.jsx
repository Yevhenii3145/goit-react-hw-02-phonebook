import React, { Component } from 'react'
import { nanoid } from 'nanoid';

export default class Form extends Component {
    state = {
        name: '',
        number: '',
    }
    inputNameId = nanoid();
    inputPhoneId = nanoid();

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { name,number } = this.state;
        this.props.addContact({name,number})
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        
    return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.inputNameId}>Name</label>
            <input
            id={this.inputNameId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            
            <label htmlFor={this.inputPhoneId}>Phone</label>
            <input
            id={this.inputPhoneId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
            <button type='submit'>Add contact</button>
        </form>
    )
  }
}
