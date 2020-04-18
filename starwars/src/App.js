import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
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
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("error ", error)
    })
  }, []);
  ;
  const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CardWrapper>
        {characters.map(characters =>{
          return <CharacterCard key={characters.id} charName={characters.name} status={characters.status} species={characters.species} gender={characters.gender} origin={characters.origin.name} image={characters.image} />
        })}        
      </CardWrapper>
    </div>
  );
}

export default App;
