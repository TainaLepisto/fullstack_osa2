import React from 'react'

const FilterCountries = ({ value, onChange }) => {
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

export default FilterCountries

