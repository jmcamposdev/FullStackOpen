const express = require('express');
const app = express();

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  const html = `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date}</p>
  `

  response.send(html)
})

app.get('/api/persons', (request, response) => {
  response.json(persons);
})

app.get('/api/persons/:id', (request, response) => {
  // Get id from request
  const id = Number(request.params.id);
  // Find person with id
  const person = persons.find(person => person.id === id)

  // If person exists, return it, else return 404
  if (person) {
    response.json(person);
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  // Get id from request
  const id = Number(request.params.id);
  // Filter persons array to remove person with id
  persons = persons.filter(person => person.id !== id);
  // Return 204 (no content) 
  response.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})