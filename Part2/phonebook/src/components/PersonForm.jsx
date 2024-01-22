const PersonForm = ({ nameValue, numberValue, handleInputsChange, onSubmitt }) => {
  return (
    <form onSubmit={onSubmitt}>
      <div>
        name: <input value={nameValue} onChange={handleInputsChange} name='name' />
      </div>
      <div>
        number: <input value={numberValue} onChange={handleInputsChange} name='number' />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm
