import React from 'react'

export default function Filter({filterId,filter,handleChange}) {
  return (
      <div>
          <label htmlFor={filterId}>Find contacts by name</label>
        <input
          id={filterId}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
    </div>
  )
}
