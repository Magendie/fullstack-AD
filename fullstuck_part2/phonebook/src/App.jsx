import { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import personService from "./services/personsService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [showFilter, setFilter] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);
  console.log("rendered", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("check new name/number", newName, number);

    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedNumber = { name: newName, number: number };
        const numberToUpdate = persons.find((p) => p.name === newName);
        personService.update(numberToUpdate.id, updatedNumber).then(() => {
          personService.getAll().then((initialPerson) => {
            setPersons(initialPerson);
            setNewName("");
            setNumber("");
            console.log("successully updated");
          });
        });
      } else {
        setNewName("");
        setNumber("");
      }
    } else {
      const newPerson = {
        name: newName,
        number: number,
      };
      personService.create(newPerson).then((returnedPerson) => {
        setPersons((previous) => [...previous, returnedPerson]);
        setNewName("");
        setNumber("");
      });
    }
  };

  const deletePersonHandler = (id) => {
    const findperson = persons.find((n) => n.id === id);
    console.log(findperson);
    if (window.confirm(`Delete ${findperson.name} `)) {
      personService
        .deleteNumber(findperson.id)
        .then((returnedNumber) => {
          //the state need a rerender to show changes on the screen
          personService.getAll().then((initialPerson) => {
            setPersons(initialPerson);
            console.log("success");
          });
        })
        .catch((error) => {
          alert(`the numner ${findperson.name} has already been deleted`);
        });
    }
  };

  // personService.deleteNumber(findperson).then(returnedNumber => {
  //   setPersons( (previous) => [...previous, returnedNumber])
  // })

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
          person.name
            .split(" ")
            .join("")
            .toLowerCase()
            .includes(searchedValue.toLowerCase()) &&
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
      <Filter numbersToShow={numbersToShow} showFilter={showFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        number={number}
        handleChange={handleChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Persons
            key={person.id}
            person={person}
            deletePerson={() => deletePersonHandler(person.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
