import React, { useContext } from 'react';
import { CaughtPokemonContext } from './CaughtPokemonContext';
import { Card } from 'react-bootstrap';

const CaughtPokemon = (props) => {

    const [ caught, setCaught ] = 
        useContext(CaughtPokemonContext);

    const caughtPokemon = caught.map(p => {
        const { name, sprite } = p;
        return (
            <Card>
                <Card.Img variant="top" src={sprite} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>)
    })

    return (
        <Card style={cardStyle}>
            {caughtPokemon.length ? caughtPokemon : `No pokemon caught yet!`}
        </Card>
    )
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}


export default CaughtPokemon;


