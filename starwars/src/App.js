import React, { useState, useEffect } from 'react';
import Card from './components/Character'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const PokeButton = styled.button`
  width: 160px;
  height: 30px;
  margin: 0 40px 20px 0;
  border-radius: 10px;
  border: 2px solid #02535C;
  text-align: center;
  background: #83C6D5;
  &:hover {
    color: #C33042;
  }
`;

const App = () => {
  const [pokemon, setPokemon] = useState([])
  //initial state set to water pokemon habitat parameter
  const [habitatButton, setHabitatButton] = useState('9')

  useEffect(() => {
    const waterPokemon = []
    axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${habitatButton}`)
    .then(response => {
      console.log(response)
      //set limit to the amount of pokemon returned
      for(let i = 0; i < 10; i++){
        waterPokemon.push(response.data.pokemon_species[i])
      }
      setPokemon(waterPokemon)
    })
    .catch(error => console.log('error', error))
  }, [habitatButton])
  console.log(pokemon)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <PokeButton onClick={()=>{setHabitatButton('2')}}>Forest Pokemon!</PokeButton>
        <PokeButton onClick={()=>{setHabitatButton('8')}}>Urban Pokemon!</PokeButton>
        <PokeButton onClick={()=>{setHabitatButton('9')}}>Water Pokemon!</PokeButton>
        <FlexDiv>
          {pokemon.map(item => {
          return <Card character={item} key={item.url}/>
          })}
        </FlexDiv>
    </div>
  );
}

export default App;
