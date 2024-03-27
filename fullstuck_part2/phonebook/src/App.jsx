import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("check new name/number",newName, number);
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName("");
      setNumber("");
    } else {
      const newPerson = {
        name: newName,
        number: number,
      };
      setPersons((previous) => [...previous, newPerson]);
      setNewName("");
      setNumber("");
    }
    
  };

  const handleChange = (event) => {
    console.log("for a name:",event.target.value);
    setNewName(event.target.value);
    
  };

  const handleNumberChange = (event) => {
    console.log("for number:",event.target.value)
    setNumber(event.target.value);
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map(( person,index ) => (
            <div key={index}>
              <p>{person.name} {person.number}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default App;
