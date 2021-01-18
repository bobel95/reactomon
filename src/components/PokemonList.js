import React from 'react';
import PokemonListItem from './PokemonListItem';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const PokemonList = props => {
    let pokemonKey = 1;

    const pokemon = props.pokemon
        .map(p => {
            const {name, url} = p;
            return <PokemonListItem key={pokemonKey++} name={name} url={url}></PokemonListItem>
        });

    return (
        <Card style={cardStyle}>
            <Table>
                <thead>
                    <tr>
                        <th>Pokedex No.</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon}
                </tbody>
            </Table>
        </Card>
    )
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}

export default PokemonList
