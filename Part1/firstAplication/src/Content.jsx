import Part from './Part'

const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part name={parts[0]} exercises={exercises[0]} />
      <Part name={parts[1]} exercises={exercises[1]} />
      <Part name={parts[2]} exercises={exercises[2]} />
    </div>
  )
}

export default Content
