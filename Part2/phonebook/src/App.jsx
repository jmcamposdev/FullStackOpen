import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [inputs, setInputs] = useState({
    name: '',
    number: '',
    filter: ''
  })

  const personsToShow = inputs.filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(inputs.filter.toLowerCase()))

  const handleInputsChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const addPerson = (event) => {
    // Prevent default form submission
    event.preventDefault()

    // Prevent insert Names that already exist
    const nameExists = persons.find(person => person.name === inputs.name)
    if (nameExists) {
      window.alert(`${inputs.name} is already added to phonebook`)
      return
    }
    // Prevent insert empty Names
    if (inputs.name === '') {
      window.alert('Name cannot be empty')
      return
    }

    // Create newPerson object
    const newPerson = {
      name: inputs.name,
      number: inputs.number
    }

    // Add newPerson to persons
    setPersons([...persons, newPerson])
    // Reset newName
    setInputs({
      ...inputs, // Keep filter
      name: '',
      number: ''
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={inputs.filter} handleFilterChange={handleInputsChange} inputName='filter' />
      <br />
      <br />

      <h2>Add a new</h2>
      <PersonForm nameValue={inputs.name} numberValue={inputs.number} handleInputsChange={handleInputsChange} onSubmitt={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
