import { useState } from 'react'
import Title from './Title'
import Button from './Button'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Handle Clicks
  const increaseGoodCounter = () => setGood(good + 1)
  const increaseNeutralCounter = () => setNeutral(neutral + 1)
  const increaseBadCounter = () => setBad(bad + 1)

  // Logic
  const getTotalComments = () => good + neutral + bad

  const getAverage = () => {
    const difference = good - bad
    if (getTotalComments() === 0) {
      return 0
    } else {
      return difference / getTotalComments()
    }
  }

  const getPositivePercentage = () => {
    if (getTotalComments() === 0) {
      return 0
    } else {
      return (good / getTotalComments()) * 100
    }
  }

  return (
    <div>
      <Title text='Give FeedBack' />
      <Button handleClick={increaseGoodCounter} text='Good' />
      <Button handleClick={increaseNeutralCounter} text='Neutral' />
      <Button handleClick={increaseBadCounter} text='Bad' />
      <Title text='Statistics' />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {getAverage()}</p>
      <p>Positive: {getPositivePercentage()}%</p>
    </div>
  )
}

export default App
