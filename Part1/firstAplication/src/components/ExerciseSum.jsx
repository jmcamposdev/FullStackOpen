const ExerciseSum = ({ parts }) => {
  const totalExercises = parts.reduce((accumulator, part) => accumulator + part.exercises, 0)

  return (
    <b>Total of {totalExercises} exercises</b>
  )
}

export default ExerciseSum
