import React from 'react'
import PropTypes from 'prop-types';
import {ContactElement,DeletButton} from './ContacItem.styled'

export default function ContactItem({name,number,id,removeBook,text}) {
  return (
    <ContactElement>{name}: {number}<DeletButton onClick={() => {removeBook(id)}}>{text}
    </DeletButton></ContactElement>
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}