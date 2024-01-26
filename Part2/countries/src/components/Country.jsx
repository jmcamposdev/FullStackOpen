import CapitalWeather from './CapitalWeather'

const Country = ({ country }) => {
  const capital = country.capital[0]
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {
          Object.values(country.languages).map(language => <li key={language}>{language}</li>)
        }
      </ul>
      <img src={country.flags.png} alt={country.name.common} width='200' />

      <CapitalWeather capital={capital} />
    </>
  )
}

export default Country
