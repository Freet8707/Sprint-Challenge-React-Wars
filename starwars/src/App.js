import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';


const App = () => {
  const [waterPokemon, setWaterPokemon] = useState('')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const waterCreatures = []
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=200/pokemon-habitat/9')
    .then(response => {
      // console.log(response)
      waterCreatures.push(response.data.results)
      setWaterPokemon(waterCreatures)
    })
    .catch(error => console.log('error', error))
  }, [])
  console.log(waterPokemon)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
