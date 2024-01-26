const Person = ({ person, handlePersonDelete }) => {
  return (
    <li>{person.name} {person.number} <button onClick={() => (handlePersonDelete(person.id))}>Delete</button></li>
  )
}

export default Person
