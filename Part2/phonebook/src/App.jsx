import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    // Update newName
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    // Prevent default form submission
    event.preventDefault()

    // Prevent insert Names that already exist
    const nameExists = persons.find(person => person.name === newName)
    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    // Prevent insert empty Names
    if (newName === '') {
      window.alert('Name cannot be empty')
      return
    }

    // Create newPerson object
    const newPerson = {
      name: newName
    }

    // Add newPerson to persons
    setPersons([...persons, newPerson])
    // Reset newName
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => (
          <p key={person.name}>{person.name}</p>
        ))
      }
    </div>
  )
}

export default App
