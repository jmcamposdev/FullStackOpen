import StatisticLine from './StatisticLine'
import Title from './Title'

const Statistics = ({ good, neutral, bad }) => {
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
    <>
      <Title text='Statistics' />
      {getTotalComments() === 0
        ? (
          <p>No FeedBack Given</p>
          )
        : (
          <>
            <Title text='Statistics' />
            <table>
              <tbody>
                <StatisticLine text='Good' value={good} />
                <StatisticLine text='Neutral' value={neutral} />
                <StatisticLine text='Bad' value={bad} />
                <StatisticLine text='All' value={good + neutral + bad} />
                <StatisticLine text='Average' value={getAverage()} />
                <StatisticLine text='Positive' value={getPositivePercentage() + '%'} />
              </tbody>
            </table>
          </>
          )}
    </>
  )
}

export default Statistics
