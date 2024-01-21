const Anecdote = ({ text, vote }) => {
  return (
    <>
      <p>{text}</p>
      <p>This anecdote has {vote}</p>
    </>
  )
}

export default Anecdote
