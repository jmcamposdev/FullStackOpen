const CountriesList = ({ countries, setFilter }) => {
  const handleClick = (event) => {
    const countryParagraph = event.target.previousElementSibling
    const countryName = countryParagraph.textContent

    setFilter(countryName)
  }

  return (
    <>
      <ul>
        {
        countries.map(country => (
          <li key={country.name.common}>
            <span className='countryName'>{country.name.common}</span>

            <button onClick={handleClick}>Show</button>
          </li>
        ))
        }
      </ul>
    </>
  )
}

export default CountriesList
