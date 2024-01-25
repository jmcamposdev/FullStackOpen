import React, { useEffect, useState } from 'react'
import CountriesList from './components/CountriesList'
import Country from './components/Country'

function App () {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    // Load all countries from the API and store them in the allCountries array
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(response => {
        setAllCountries(response)
      })
  }, [])

  useEffect(() => {
    // Filter the countries array and store the result in the filteredCountries array
    if (filter.trim() === '') {
      setFilteredCountries([])
      return
    }

    const filtered = allCountries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )

    setFilteredCountries(filtered)
  }, [filter, allCountries])

  const handleFilter = event => {
    setFilter(event.target.value)
  }

  const renderContent = () => {
    const count = filteredCountries.length

    if (count >= 10) {
      return <p>Start typing to search for a country</p>
    }

    if (count > 1) {
      return <CountriesList countries={filteredCountries} setFilter={setFilter} />
    }

    if (count === 1) {
      return <Country country={filteredCountries[0]} />
    }

    return <p>No countries found</p>
  }

  return (
    <>
      <h4>Search:</h4>
      <input type='text' value={filter} onChange={handleFilter} />
      <h2>Countries</h2>
      {renderContent()}
    </>
  )
}

export default App
