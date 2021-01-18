import React from 'react';
import { Link } from 'react-router-dom';

const PokemonListItem = props => {

    const pokemonNumber = props.url.match(/\/([^/]+)\/?$/)[1];
    const formattedNumber = `#${pokemonNumber.padStart(3, '0')}`;

    return (
        <tr>
            <td>{formattedNumber}</td>
            <td><Link to={`/detail?id=${pokemonNumber}`}>{props.name}</Link></td>
        </tr>
    )
}

export default PokemonListItem
