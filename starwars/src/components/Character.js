// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = (props) => {
    const CardDiv = styled.div`
        display: flex;
        flex-direction: column;
        background: rgba(88, 108, 221, .8);
        width: 300px;
        height: 450px;
        padding: 0 10px 0 10px;  
        margin: 25px 10px;      
    `;
    const NameHeader = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        color: #F9F675;
        `;
    const CharDescription = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
                <h4>{props.charName}</h4>
                <h4>{props.status}</h4>
            </NameHeader>
            <CharDescription>
                <h4>{props.species}</h4>
                <h6>{props.gender}<br></br>{props.origin}</h6>
            </CharDescription>
            <ImgWrapper>
                <Image src={props.image} alt={props.charName} />
            </ImgWrapper>
        </CardDiv>
    )
}

export default CharacterCard;