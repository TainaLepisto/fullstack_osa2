import React from 'react';
import Axios from 'axios'

import AddPersonForm from './AddPersonForm';
import ShowPeople from './ShowPeople';
import FilterPerson from './FilterPerson';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    Axios
      .get('http://localhost:3001/people')
      .then(response => {
        console.log("promisen then", response)
        this.setState({ people: response.data })
      })
  }

  handleFilterChange = (event) => {
    console.log("handleFilterChange", event.target.value)
    this.setState({ filter: event.target.value })
  }

  handleNameChange = (event) => {
    console.log("handleNameChange", event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log("handleNumberChange", event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log('nappia addPerson painettu')

    if(this.state.people.find((x) => this.state.newName === x.name )){
      alert("Nimi on jo tallessa")
    } else {

      const personObject = {
        name: this.state.newName,
        id: this.state.people.length + 1,
        number: this.state.newNumber
      }
    
      const people = this.state.people.concat(personObject)
    
      this.setState({
        people: people,
        newName: '',
        newNumber: ''
      })

    }
  }

  render() {
    console.log("render", this.state.people)

    return (
      <div>

        <h1>Puhelinluettelo</h1>

        <AddPersonForm 
          onSubmit={this.addPerson}
          valueName={this.state.newName}
          onChangeName={this.handleNameChange}
          valueNumber={this.state.newNumber}
          onChangeNumber={this.handleNumberChange}
        />

        <h2>Numerot</h2>

        <FilterPerson 
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />

        <ShowPeople 
          filter={this.state.filter}
          people={this.state.people}
        />

      </div>
    )
  }

}

export default App

