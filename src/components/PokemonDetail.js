import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import axios from 'axios';

export class PokemonDetail extends Component {

    _isMounted = false;

    state = {
        data: {
            sprites: {},
            types: [
                {
                    type: {}
                }
            ]
        }
    }

    render() {
        console.log(this.state.data.sprites.front_default);

        const { name, sprites: {front_default : sprite}, weight, height } = this.state.data;

        return (
            <Card style={cardStyle}>
                <Card.Img variant="top" src={sprite} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {this.state.data.types[0].type.name}-type pokemon
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weight: {weight}</ListGroupItem>
                    <ListGroupItem>Height: {height}</ListGroupItem>
                </ListGroup>
            </Card>
        )
    }

    componentDidMount = () => {
        this._isMounted = true;

        const id = this.getIdFromParam();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => this.setState({ data: res.data }));
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    getIdFromParam = () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        return params.get('id');
    }
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}

export default PokemonDetail
