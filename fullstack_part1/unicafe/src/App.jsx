import { useState } from 'react'


const Button =({handleClick, text}) => {
  return (
      <button onClick={handleClick}>{text}</button>

  )
}


const Statistics = (props) => {

  const goodReviews = () => {
    const updatedGood = props.good + 1
    props.setGood(updatedGood)
    console.log('good r.',props.good)
    props.setAll(updatedGood + props.neutral + props.bad)
   }
  const neutralReviews = () => {
    const updatedNeutral = props.neutral + 1
    props.setNeutral(updatedNeutral)
    props.setAll(props.good + updatedNeutral + props.bad)
  }
  const badReviews = () => {
    const updatedBad = props.bad + 1
    props.setBad(updatedBad)
    console.log('bad r.',props.bad)
    props.setAll(props.good + props.neutral + updatedBad)
  }

  const Statisticline = ({text, value}) => {
    return (
      <>{text}{value}</>
    )
  }

  let averege = (props.good-props.bad)/props.allReviews
  if (isNaN(averege)) {
    averege = 0
  } else {
    averege = (props.good-props.bad)/props.allReviews
  }
  console.log("const averege..",averege)

  let positive = (props.good*100)/props.allReviews
  if (isNaN(positive)) {
    positive = 0;
  } else {
    positive = (props.good*100)/props.allReviews + "%"
  }
  console.log("positive...",positive)
  console.log("allreviews..",props.allReviews)
  console.log("difference..",props.good-props.bad)
  console.log("ist averege",(props.good-props.bad)/props.allReviews)


  if (props.allReviews === 0) {
    return (
      <div>
        <h1>Give us your feedback</h1>
        <Button handleClick={goodReviews} text={"good"}/>
        <Button handleClick={neutralReviews} text={"neutral"}/>
        <Button handleClick={badReviews} text={"bad"}/>
       <h2>Statistics</h2>
        No feedback given
      </div>
    )
  }
  

  return (
    <div>
      <h1>Give us your feedback</h1>
      <div>
        <Button handleClick={goodReviews} text={"good"}/>
        <Button handleClick={neutralReviews} text={"neutral"}/>
        <Button handleClick={badReviews} text={"bad"}/>
      </div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td><Statisticline text="Good" /></td>
            <td><Statisticline value={props.good}/></td>
          </tr>
          <tr>
            <td><Statisticline text="Neutral"/></td>
            <td><Statisticline value={props.neutral}/></td>
          </tr>
          <tr>
            <td><Statisticline text="Bad" /></td>
            <td><Statisticline value={props.bad}/></td>
          </tr>
          <tr>
            <td><Statisticline text="All reviews"/></td>
            <td><Statisticline value={props.allReviews}/></td>
          </tr>
          <tr>
            <td><Statisticline text="Averege"/></td>
            <td><Statisticline value={averege}/></td>
          </tr>
          <tr>
            <td><Statisticline text="Positive percentage"/></td>
            <td><Statisticline value={positive}/></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allReviews, setAll] = useState(0)
  //const [averegeRating, setAverege] = useState(0)
  //const [positive, setPositive] = useState(0)

  
  
  return (
    <div>
      
      <Statistics good={good}
       neutral={neutral}
       bad={bad} 
       allReviews={allReviews} 
       setAll={setAll} 
       setGood={setGood} 
       setBad={setBad} 
       setNeutral={setNeutral}/>
      
    </div>
  )
}


export default App
