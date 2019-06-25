import React from 'react'
import './App.css'
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi Algorithm</h1>
      <p>This is a const arguments</p>
      <Person name="Stephan" age="30" />
      <Person name="Andi" age="21" />
      <Person name="Jeremy" age="26" />
    </div>
  )
}
export default App