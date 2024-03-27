import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState(new Array(8).fill(0))
  

  const firsAnecdote = () => {
    const randNum2 = Math.floor(Math.random() * 8);
    setSelected(randNum2)
    console.log("randnum2 which gos to firstan",randNum2)
    //return (
      //anecdotes[randNum2]
    //)
  }

  //const randAnecdote = () => {
    //const randNum = Math.floor(Math.random() * 8);
    //console.log("randAnecdote",randNum)
    //setSelected(randNum)
  //}

  

  const handleVote = () => {
    //create coppy of the vote state array
    const copy = [...vote]
    console.log("zeroes should be changed",copy)
    //adding +1 vote when buttn is clicked
    copy[selected] += 1
    setVotes(copy)
  }

  const highestVote = Math.max(...vote)
  console.log("highest vote is", highestVote)
  let position = vote.indexOf(highestVote)
  console.log("index of highest vote is:",position)
    

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={firsAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes:</h2>
      <p>{anecdotes[position]}</p>
      <p>has {vote[position]} votes</p>
    </div>
     
    
  )
}

export default App