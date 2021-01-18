import React, { Component } from 'react';
import PokemonListItem from './PokemonListItem';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export class PokemonList extends Component {
    render() {
        let pokeKey = 1;
        const pokemon = this.props.pokemon
            .map(p => {
                const {name, url} = p;
                return <PokemonListItem key={pokeKey++} name={name} url={url}></PokemonListItem>
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
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}

export default PokemonList
