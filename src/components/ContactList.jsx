import React from 'react'

export default function ContactList({ items,removeBook }) {
    const elements = items.map(({name,number,id}) => {
        return <li key={id}>{name}: {number} <button onClick={() => {removeBook(id)}}>Delete</button> </li>
    })
  return (
      <ul>{elements}</ul>
  )
}
