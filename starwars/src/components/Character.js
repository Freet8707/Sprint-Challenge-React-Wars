// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = (props) => {
    const CardDiv = styled.div`
        display: flex;
        flex-direction: column;
        background: rgba(42, 34, 35, .3);
        width: 300px;
        height: 400px;  
        margin: 25px 10px;      
    `;
    const NameHeader = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        `;
    const CharDescription = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        height: 70px;
        `;
    const ImgWrapper = styled.section`
        width: 100%;
        height: 300px;
        `;
    const Image = styled.img`
        width: 100%;
        max-height: 300px;
        `;    

    return (
        <CardDiv>
            <NameHeader>
                <h3>{props.charName}</h3>
                <h3>{props.status}</h3>
            </NameHeader>
            <CharDescription>
                <h4>{props.species}</h4>
                <h4>{props.gender}<br></br>{props.origin}</h4>
            </CharDescription>
            <ImgWrapper>
                <Image src={props.image} alt={props.charName} />
            </ImgWrapper>
        </CardDiv>
    )
}

export default CharacterCard;