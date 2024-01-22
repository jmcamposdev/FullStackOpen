import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' }
  ])

  const [inputs, setInputs] = useState({
    name: '',
    phone: ''
  })

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
      phone: inputs.phone
    }

    // Add newPerson to persons
    setPersons([...persons, newPerson])
    // Reset newName
    setInputs({
      name: '',
      phone: ''
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={inputs.name} onChange={handleInputsChange} name='name' />
        </div>
        <div>
          number: <input value={inputs.phone} onChange={handleInputsChange} name='phone' />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => (
          <p key={person.name}>{person.name} - {person.phone}</p>
        ))
      }
    </div>
  )
}

export default App
