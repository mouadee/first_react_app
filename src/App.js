import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'ped1', name: 'Max', age: 23 },
      { id: 'ed2', name: 'Manu', age: 27 },
      { id: 'spe3', name: 'Stephanie', age: 20 }
    ],
    SHOW_PERSON: false
  }
  NAME_CHANGE_HANDLER = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person;

    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Manu', age: 27 },
        { name: 'Stephanie', age: 24 }
      ]
    })
  }

  TOGGLE_PERSON_HANDLER = () => {
    const DOES_SHOW = this.state.SHOW_PERSON
    this.setState({
      SHOW_PERSON: !DOES_SHOW
    })
  }

  DELETE_PERSON = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: 'none',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
      borderRadius: '20px',
      fontSize: '14px',
      width: '100px',
      height: '35px'
    }

    let persons = null;

    if (this.state.SHOW_PERSON) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.DELETE_PERSON(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.NAME_CHANGE_HANDLER(event, person.id)}
              />
            })
          }
        </div>
      );
      buttonStyle.backgroundColor = 'red'
    }


    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App" >
        <h1>Hi I'm a ReactJs App</h1>
        <p className={classes.join(' ')}>This is a const arguments</p>
        <button
          style={buttonStyle}
          onClick={this.TOGGLE_PERSON_HANDLER}>
          HANDLER
        </button>
        {persons}
      </div>
    )
  }
}
export default Radium(App)