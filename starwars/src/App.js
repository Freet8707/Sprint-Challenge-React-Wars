import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response);      
      setCharacters(response.data.results)
    })
  }, []);
  console.log(characters);
  return (
    <div>
      <h1>Characters</h1>
      <div>
        {characters.map(characters =>{
          return <CharacterCard key={characters.id} charName={characters.name} status={characters.status} species={characters.species} gender={characters.gender} origin={characters.origin.name} image={characters.location.image} />
        })}        
      </div>
    </div>
  );
}

export default App;
