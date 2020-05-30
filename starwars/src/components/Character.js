// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 350px;
    background-color: rgba(51, 173, 220, .25);
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        width: 350px;
        height: 350px;
        object-fit: scale;
    }
`;
export default function Card(props) {
    // const [pokePic, setPokePic] = useState('')
    // if (props.character.name === 'squirtle'){
    //     setPokePic({Squirtle})
    // }
    // console.log(props)
    return(
        <CardDiv>
            <h1>{props.character.name}</h1>
            <img src={props.character.name === 'squirtle' ? 'https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png' : 
            props.character.name === 'psyduck' ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png' : 
            props.character.name === 'poliwag' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/2060-Shiny-Poliwag.png' :
            props.character.name === 'wartortle' ? 'https://pokestop.io/img/pokemon/wartortle-256x256.png' :
            props.character.name === 'blastoise' ? 'https://www.serebii.net/swordshield/pokemon/009.png' :
            props.character.name === 'golduck' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/55-Golduck.png' :
            props.character.name === 'poliwhirl' ? 'https://poliwager.net/Poliwag_files/Poliwhirldreamart.png' :
            props.character.name === 'poliwrath' ? 'https://cdn.bulbagarden.net/upload/2/2d/062Poliwrath.png' :
            props.character.name === 'slowpoke' ? 'https://cdn.bulbagarden.net/upload/7/70/079Slowpoke.png' :
            props.character.name === 'krabby' ? 'https://cdn.bulbagarden.net/upload/a/a7/098Krabby.png' : ''} alt='pokemon' />
        </CardDiv>
    )
} 