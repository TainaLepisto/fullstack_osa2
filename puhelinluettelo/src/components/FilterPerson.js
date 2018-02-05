import React from 'react'

const FilterPerson = ({ value, onChange }) => {
  return (
  
    <p>
        Rajaa näytettäviä (nimellä) :
    
        <input
        value={value}
        onChange={onChange}
        />
    
    </p>

    )
}

export default FilterPerson

