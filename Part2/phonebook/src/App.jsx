import React, { useState } from 'react'

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
      name: '',
      number: ''
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter shown with:</p>
      <input type='text' value={inputs.filter} onChange={handleInputsChange} name='filter' />
      <br />
      <br />

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={inputs.name} onChange={handleInputsChange} name='name' />
        </div>
        <div>
          number: <input value={inputs.number} onChange={handleInputsChange} name='number' />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        personsToShow.map(person => (
          <p key={person.name}>{person.name} - {person.number}</p>
        ))
      }
    </div>
  )
}

export default App
