import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("check new name",newName)
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName("");
    } else {
      const newPerson = {
        name: newName,
      };
      setPersons((previous) => [...previous, newPerson]);
      setNewName("");
    }
    
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);

    
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map(( person,index ) => (
            <div key={index}>
              <p>{person.name}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default App;
