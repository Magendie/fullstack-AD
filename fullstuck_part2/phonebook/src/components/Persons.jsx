const Persons = (props) => {
    return(
        <div>
        {props.persons.map((person, index) => (
          <div key={index}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        ))}
      </div>
    )
}

export default Persons
