import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import People from './Components/People';


function App() {
  const [people, setPeople] = useState([]);
  const [number, setAmount] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch('http://api.open-notify.org/astros.json');
      let data = await result.json();
      setPeople(data.people);
    }

    async function fetchAmount() {
      let result = await fetch('http://api.open-notify.org/astros.json');
      let data = await result.json();
      setAmount(data.number);
    }

    fetchPeople();
    fetchAmount();

  }, [])

  console.log('people', people)
  console.log('amount', number);
  return (
    
    <div className="App">
      <Header  data={number} />
      <People data={people} />
    </div>
  );
}

export default App;
