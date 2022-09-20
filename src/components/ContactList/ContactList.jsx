import React from 'react'
import PropTypes from 'prop-types';
import {ContactsList,ContactElement,DeletButton} from './ContactList.styled'

export default function ContactList({ items,removeBook }) {
    const elements = items.map(({name,number,id}) => {
        return <ContactElement key={id}>{name}: {number} <DeletButton onClick={() => {removeBook(id)}}>Delete</DeletButton> </ContactElement>
    })
  return (
      <ContactsList>{elements}</ContactsList>
  )
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()),
    removeBook: PropTypes.func.isRequired,
}