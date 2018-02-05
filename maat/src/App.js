import React from 'react'
import Axios from 'axios'

import ShowCountries from './components/ShowCountries';
import FilterCountries from './components/FilterCountries';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        countries: [], 
        filter: ''
      }
    }

    componentDidMount() {
        //console.log("componentDidMount")
        Axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            //console.log("promisen then", response)
            this.setState({ countries: response.data })
          })
      }


      handleFilterChange = (event) => {
        console.log("handleFilterChange", event.target.value)
        this.setState({ filter: event.target.value })
      }

      setFilter = (name) => {
        console.log("setFilter", name)
        this.setState({ filter: name })
      }

    render() {
        return (

            <div>

                <h1>Maat</h1>

                <FilterCountries 
                    value={this.state.filter}
                    onChange={this.handleFilterChange}
                />

                <ShowCountries 
                    filter={this.state.filter}
                    countries={this.state.countries}
                    setFilter={this.setFilter}
                />

            </div>

        )
    }
}

export default App


