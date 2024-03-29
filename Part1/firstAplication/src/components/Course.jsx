import Content from './Content'
import ExerciseSum from './ExerciseSum.jsx'
import Header from './Header.jsx'

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <ExerciseSum parts={course.parts} />
    </>
  )
}

export default Course
