import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [showFilter, setFilter] = useState([]);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("check new name/number", newName, number);

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
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
    console.log("for a name:", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("for number:", event.target.value);
    setNumber(event.target.value);
  };


  const numbersToShow = () => {
    let searchedPhoneNumber = document.getElementById("searchRequest");
    let searchedValue = searchedPhoneNumber.value;
    console.log("thats what im searching", searchedValue);


    //this has a subtle bug,function searches any char in any number
    //thus showing every num that has 'a' e.g.
    setFilter(
      persons.filter(function (person) {
        return (
          person.name.split(' ').join('').toLowerCase().includes(searchedValue.toLowerCase()) &&
          person.number === person.number &&
          person.id === person.id
        );
      })
    );
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input type="text" id="searchRequest" onInput={numbersToShow} />
      </div>
      <div>
        {showFilter.map((filtered) => (
          <div key={filtered.id}>
            <p>
              {filtered.name} {filtered.number}{" "}
            </p>
          </div>
        ))}
      </div>
      <h2>Add a new</h2>
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
        {persons.map((person, index) => (
          <div key={index}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
