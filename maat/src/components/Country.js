import React from 'react'

const Country = ({ country }) => {

    return (
        <div>  
            <h3>{country.name} - {country.nativeName}</h3>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <img src={country.flag} alt={country.name} width="150" />
        </div>
    )

}

export default Country


