const Display = ({counter}) => <div>{counter}</div>
  

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [counter, setCounter ] = useState(0)
  console.log("rendering with counter value", counter)
  //const handleClick = () => {
    //console.log("clicked")
 // }

  //setTimeout(
   // () => setCounter(counter + 1),
   // 1000
  //)

  const increaseByOne = () => {
    console.log("increasing,counter value before",counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log("decreasing,counter value by 1",counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log("reseting to zero,value before",counter)
    setCounter(0)
  }

  console.log("rendering...", counter)



  return (
    <div>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne}
        text="plus"
      />
      <Button 
        onClick={setToZero}
        text="zero"
      />
      <Button 
        onClick={decreaseByOne}
        text="minus"
      />
    </div>

  )
}



// for unicafe

const Averege = (props) => {
    const dif = Number(props.good) - Number(props.bad)
    const numAllReviews = dif / Number(props.allReviews)
    console.log(numAllReviews)
    console.log(dif)
    return (
      
      <div>
        Averege {numAllReviews}
      </div> 
    )
  }

  // another
  const averegeNum = (props) => {
    const tempAverege = (props.good-props.bad)/props.allReviews
    setAverege((props.good-props.bad)/props.allReviews)
    return(
      <div>
        Averege {props.averegeRating}
      </div>
      )
  }


  //git like prev state xoxo

  import { useState } from 'react'

  const Statistics = (props) => {
    const updatedGood = props.good + 1
    props.setGood(updatedGood)
    console.log('good r.',props.good)
    props.setAll(updatedGood + props.neutral + props.bad)
   
  }
  
  
  const App4 = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allReviews, setAll] = useState(0)
    //const [averegeRating, setAverege] = useState(0)
    //const [positive, setPositive] = useState(0)
  
    
  
  
    let averege = (good-bad)/allReviews
    if (isNaN(averege)) {
      averege = 0
    } else {
      averege = (good-bad)/allReviews
    }
    console.log("const averege..",averege)
  
    let positive = (good*100)/allReviews
    if (isNaN(positive)) {
      positive = 0;
    } else {
      positive = (good*100)/allReviews
    }
    console.log("positive...",positive)
  
    const neutralReviews = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      console.log('neutral r.',neutral)
      setAll(good + updatedNeutral + bad)
      
    }
  
    const badReviews = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
      console.log('bad r.',bad)
      setAll(good + neutral + updatedBad)
      
    
    }
  
    
    
    console.log("allreviews..",allReviews)
    console.log("difference..",good-bad)
    console.log("ist averege",(good-bad)/allReviews)
    
    
  
  
    return (
      <div>
        <h1>Give us your feedback</h1>
        <button onClick={goodReviews}>good</button>
        
        <button onClick={neutralReviews}>neutral</button>
        
        <button onClick={badReviews}>bad</button>
        <h2>Statistics</h2>
        <p>Good {good }</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All reviews {allReviews}</p>
        
        <p>Averege: {averege}</p>
        <p>Positive percentage: {positive}%</p>
        
      </div>
    )
  }
  
  
  export default App
  