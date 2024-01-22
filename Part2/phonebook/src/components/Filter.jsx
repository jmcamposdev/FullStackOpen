const Filter = ({ filter, handleFilterChange, inputName }) => (
  <div>
    Filter shown with: <input value={filter} onChange={handleFilterChange} name={inputName} />
  </div>
)

export default Filter
