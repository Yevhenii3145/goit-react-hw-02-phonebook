import React from 'react'

export default function ContactList({ items }) {
    const elements = items.map(({name,number,id}) => {
        return <li key={id}>{name}: {number}</li>
    })
  return (
      <ul>{elements}</ul>
  )
}
