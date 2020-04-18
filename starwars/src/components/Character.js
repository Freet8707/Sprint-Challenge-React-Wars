// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = (props) => {
    return (
        <div>
            <section>
                <h2>{props.charName}</h2>
            </section>
        </div>
    )
}

export default CharacterCard;