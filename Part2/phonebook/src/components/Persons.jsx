import Person from './Person'

const Persons = ({ persons, handlePersonDelete }) => {
  return (
    <div>
      <ul>
        {persons.map(person => <Person key={person.name} person={person} handlePersonDelete={handlePersonDelete} />)}
      </ul>
    </div>
  )
}

export default Persons
