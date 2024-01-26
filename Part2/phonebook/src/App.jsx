import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  // Set persons state from server
  useEffect(() => {
    // Get data from server
    axios.get('http://localhost:3001/persons')
      .then(response => { // Promise fulfilled
        // Set persons state
        setPersons(response.data)
      })
  }, [])

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

    // Add to the DDBB
    axios.post('http://localhost:3001/persons', newPerson)

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
