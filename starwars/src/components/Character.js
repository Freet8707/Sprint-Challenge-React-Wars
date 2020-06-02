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
            props.character.name === 'krabby' ? 'https://cdn.bulbagarden.net/upload/a/a7/098Krabby.png' :
            props.character.name === 'caterpie' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/10-Caterpie.png' :
            props.character.name === 'weedle' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/13-Weedle.png' :
            props.character.name === 'pidgey' ? 'https://cdn.bulbagarden.net/upload/5/55/016Pidgey.png' :
            props.character.name === 'paras' ? 'https://pokestop.io/img/pokemon/paras-256x256.png' :
            props.character.name === 'venonat' ? 'https://cdn.bulbagarden.net/upload/a/ad/048Venonat.png' :
            props.character.name === 'bellsprout' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/69-Bellsprout.png' :
            props.character.name === 'metapod' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/11-Metapod.png' :
            props.character.name === 'butterfree' ? 'https://pokestop.io/img/pokemon/butterfree-256x256.png' :
            props.character.name === 'kakuna' ? 'https://cdn.bulbagarden.net/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png' :
            props.character.name === 'beedrill' ? 'https://pokestop.io/img/pokemon/beedrill-256x256.png' :
            props.character.name === 'meowth' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/2052-Shiny-Meowth.png' :
            props.character.name === 'abra' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/63-Abra.png' :
            props.character.name === 'persian' ? 'https://cdn.bulbagarden.net/upload/1/13/053Persian.png' :
            props.character.name === 'kadabra' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/64-Kadabra.png' :
            props.character.name === 'alakazam' ? 'https://static.pokemonpets.com/images/monsters-images-300-300/2065-Shiny-Alakazam.png' :
            props.character.name === 'grimer' ? 'https://static.pokemonpets.com/images/monsters-images-300-300/88-Grimer.png' :
            props.character.name === 'voltorb' ? 'https://pokestop.io/img/pokemon/voltorb-256x256.png' :
            props.character.name === 'koffing' ? 'https://pokestop.io/img/pokemon/koffing-256x256.png' :
            props.character.name === 'ditto' ? 'https://i.pinimg.com/originals/db/3e/44/db3e440a0051e81ace925555de731592.png' :
            props.character.name === 'eevee' ? 'https://static.pokemonpets.com/images/monsters-images-800-800/133-Eevee.png' : ''} alt='pokemon' />
        </CardDiv>
    )
} 