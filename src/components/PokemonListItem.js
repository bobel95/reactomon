import React, { Component } from 'react';
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


    // getPokemonSprite = url => {
    //     return axios.get(url)
    //             .then(res => this.setState({imgUrl:res.data.sprites.front_default}))
    // }
}

export default PokemonListItem
