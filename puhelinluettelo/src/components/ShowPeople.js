import React from 'react'
import Person from './Person';

const FilterPerson = ({ filter, people }) => {

    const peopleToShow = 
    filter === '' ?
    people :
    people.filter(
        person => person.name.toLowerCase()
            .includes(filter.toLowerCase()))

  return (
    <div>
        {peopleToShow.map(person => 
            <Person key={person.id} person={person} />
            )}
    </div>
    )
}

export default FilterPerson

