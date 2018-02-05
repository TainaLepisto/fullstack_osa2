import React from 'react';

import peopleService from './services/people'

import AddPersonForm from './components/AddPersonForm';
import ShowPeople from './components/ShowPeople';
import FilterPerson from './components/FilterPerson';
import Info from './components/Info';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      newName: '',
      newNumber: '',
      filter: '',
      info: ''
    }
    console.log("constructor")
  }

  componentDidMount() {
    //console.log("componentDidMount")
    peopleService
      .getAll()
      .then(people => {
        //console.log("promisen then", people)
        this.setState({ people })
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
    console.log('nappia addPerson painettu', this.state.newName.toLowerCase())

    const person = this.state.people.find(x => this.state.newName.toLowerCase() === x.name.toLowerCase() )

    if(person){
      if (window.confirm(`${person.name} on jo luettelossa. Muutetaanko numero?`)) { 
        console.log("löydetty tyyppi ", person)
        const changedPerson = { ...person, number: this.state.newNumber }
        console.log("muutettava tyyppi ", changedPerson)
        
        peopleService
        .update(changedPerson)   
        .then(person => {
          console.log("päivitetty", person)
          this.setState({
            people: this.state.people
                      .filter(p => p.id !== person.id)
                      .concat(person),
            newName: '',
            newNumber: '',
            info: `Tiedot päivitetty, ${person.name}`
          })
        })
        .catch(error => {
          this.setState({
            info: `Tietoja (${person.name}) ei valitettavasti löytynytkään kannasta.`,
            people: this.state.people.filter(p => p.id !== person.id)
          })
        })

        setTimeout(() => {
          this.setState({info: ''})
        }, 3000)
      }      
    } else {

      const personObject = {
        name: this.state.newName,
        //id: this.state.people.length + 1,
        number: this.state.newNumber
      }

      //Axios.post('http://localhost:3001/people', personObject)
      peopleService
        .create(personObject)   
        .then(response => {
          console.log(response)
          this.setState({
            people: this.state.people.concat(response.data),
            newName: '',
            newNumber: '',
            info: `Tiedot lisätty, ${personObject.name}`
          })
        })
        .catch(error => {
          this.setState({
            info: `Hupsista, jotain meni pieleen. Yritä kohta uudestaan.`,
          })
        })
    
        setTimeout(() => {
          this.setState({info: ''})
        }, 3000)
      /*const people = this.state.people.concat(personObject)
    
      this.setState({
        people: people,
        newName: '',
        newNumber: ''
      })
*/
    }
  }

  removePerson = (id) => {
    console.log("clickedRemove")

    const person = this.state.people.find(x => x.id === id )

    if (window.confirm(`Haluatko varmasti poistaa ${person.name}?`)) { 
      peopleService
      .remove(id)
      .then(response => {
        console.log("removePerson promisen then", response)
        this.setState({ 
          people: this.state.people.filter(p => p.id !== id),
          info: `${person.name} tiedot poistettu`
        })
      })
      .catch(error => {
        this.setState({
          info: `Tietoja (${person.name}) ei valitettavasti löytynytkään kannasta.`,
          people: this.state.people.filter(p => p.id !== id)
        })
      })

      setTimeout(() => {
        this.setState({info: ''})
      }, 3000)
    }
    
  }


  render() {
    console.log("render", this.state.people)

    return (
      <div>

        <h1>Puhelinluettelo</h1>

        <Info message={this.state.info}/>

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
          removePerson={this.removePerson}
        />

      </div>
    )
  }

}

export default App

