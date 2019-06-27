import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 27 },
      { name: 'Stephanie', age: 20 }
    ]
  }
  switch_name = (new_name) => {
    this.setState({
      persons: [
        { name: new_name, age: 21 },
        { name: 'Manu', age: 27 },
        { name: 'Stephanie', age: 24 }
      ]
    })
  }

  name_change_handler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Manu', age: 27 },
        { name: 'Stephanie', age: 24 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi Algorithm</h1>
        <p>This is a const arguments</p>
        <button onClick={this.switch_name.bind(this, 'Maximillian')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switch_name.bind(this, 'Max!')}
          changed={this.name_change_handler}
        >
          My Hobbies is Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    )
  }
}
export default App