import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Handle Clicks
  const increaseGoodCounter = () => setGood(good + 1)
  const increaseNeutralCounter = () => setNeutral(neutral + 1)
  const increaseBadCounter = () => setBad(bad + 1)

  return (
    <div>
      <Title text='Give FeedBack' />
      <Button handleClick={increaseGoodCounter} text='Good' />
      <Button handleClick={increaseNeutralCounter} text='Neutral' />
      <Button handleClick={increaseBadCounter} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
