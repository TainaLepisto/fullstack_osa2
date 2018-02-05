import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        { name: 'Arto Hellas', 
          id: 1,
          number: 12345
        },
        { id:2, name: 'Martti Tienari', number: '040-123456' },
        { id:3, name: 'Arto Järvinen', number: '040-123456' },
        { id:4, name: 'Lea Kutvonen', number: '040-123456' }
  
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log('nappia painettu')

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

    const peopleToShow = 
    this.state.filter === '' ?
    this.state.people :
    this.state.people.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>

        <h2>Puhelinluettelo</h2>

       

<h3>Lisää uusi</h3>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: 
            <input
            value={this.state.newName}
            onChange={this.handleNameChange}
          />
          </div>
          <div>
            numero: 
            <input
            value={this.state.newNumber}
            onChange={this.handleNumberChange}
          />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>

          <p>Rajaa näytettäviä (nimellä)
    
          <input
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
          </p>


        <div>
          {peopleToShow.map(person => <p key={person.id}> {person.name}, {person.number} </p>)}
        </div>

      </div>
    )
  }
}

export default App

