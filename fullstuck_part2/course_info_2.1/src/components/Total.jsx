const Total = (parts) => {
    const result = parts.reduce((total, part) => {
      console.log("what is happening",total)
      console.log("number of exers",part.exercises)
      //console.log("this is part",part)
      return total += part.exercises},0)

    return (
      <div>
        <p>Total number of exercises {result}</p>
      </div>
    )
  }

export default Total 