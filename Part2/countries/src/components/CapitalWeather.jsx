import { useEffect, useState } from 'react'

const CapitalWeather = ({ capital }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${capital}&aqi=no`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      // Puedes agregar otros encabezados según sea necesario
      }
    })
      .then(response => response.json())
      .then(response => {
        setWeather(response.current)
      })
  }, [])

  const renderWeather = () => {
    if (Object.keys(weather).length === 0) {
      return <p>Loading...</p>
    }

    return (
      <>
        <h3>Weather in {capital}</h3>
        <p>Temperature: {weather.temp_c} Celsius</p>
        <img src={'https:' + weather.condition.icon} alt={weather.condition.text} />
        <p>Wind: {weather.wind_kph} kph direction {weather.wind_dir}</p>
      </>
    )
  }

  return (
    <>
      {renderWeather()}
    </>
  )
}

export default CapitalWeather
