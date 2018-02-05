import React from 'react'

const Person = ({ person, removePerson }) => {
  return (
    <p>
      {person.name}, {person.number} 
      &nbsp; &nbsp;
      <button onClick={() => removePerson(person.id)}>
        Poista
      </button> 
    </p>
  )
}

export default Person