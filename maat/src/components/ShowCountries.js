import React from 'react'

import Country from './Country';

const ShowCountries = ({ filter, countries, setFilter }) => {

    const countriesToShow = 
    filter === '' ?
    countries :
    countries.filter(
        country => country.name.toLowerCase()
            .includes(filter.toLowerCase()))
 

    if(countriesToShow.length > 10){
        return (
            <p>
                Liikaa mahdollisuuksia, rajaa lisää. 
            </p>
        )
    }
    if(countriesToShow.length > 1){
        return (
            <div>
                {countriesToShow.map(country => 
                    <div key={country.name} onClick={()=>setFilter(country.name)}>
                        {country.name}
                    </div>
                )}
            </div>
        )
    }

    if(countriesToShow.length === 1){
        return (
            <Country country={countriesToShow[0]} />  
        )
    }

    return (
        <p>
            Ei löytynyt mitään. 
        </p>
    )
}

export default ShowCountries


