import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import People from './Components/People';


function App() {
  const [people, setPeople] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch('http://api.open-notify.org/astros.json');
      let data = await result.json();
      setPeople(data.people);
    }

    async function fetchCoordinates() {
      let result = await fetch('http://api.open-notify.org/iss-now.json');
      let data = await result.json();
      setCoordinates(data.iss_position);
    }

    fetchPeople();
    fetchCoordinates();

  }, [])

  console.log('people', people)
  console.log('coordinates', coordinates);
  return (
    
    <div className="App">
      <Header />
      <People data={people} />
    </div>
  );
}

export default App;
