const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {
  console.log(props)
  return (
    <ul>
      <li>Part {props.parts[0].name} {props.parts[0].exercises} exercises</li>
      <li>Part {props.parts[1].name} {props.parts[1].exercises} exercises</li>
      <li>Part {props.parts[2].name} {props.parts[2].exercises} exercises</li>
    </ul>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //const partsMap = parts.map(p=>parts[0].exercises + parts[1].exercises + parts[2].exercises)
  //console.log('number?',partsMap)

  const sum = (p1,p2,p3) => {
    return p1+p2+p3
  }

  const result = sum(course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises)
  console.log(result)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={result} />
    </div>
  )
}

export default App