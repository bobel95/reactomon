import React, { useEffect, useState, useContext } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CaughtPokemonContext } from './CaughtPokemonContext';
import axios from 'axios';

const PokemonDetail = props => {

    const getIdFromParam = () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        return params.get('id');
    }

    const isCaught = () => {
        let res = false;
        caught.forEach(p => {
            if (p.name === name) {
                res = true;
            }
        })
        
        return res;
    }

    
    const [caught, setCaught] = useContext(CaughtPokemonContext);
    const [name, setName] = useState('');
    const [sprite, setSprite] = useState('');
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [type, setTypes] = useState([]);
    let caughtBool = isCaught();

    useEffect(() => {
        const id = getIdFromParam();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                const { name, sprites: {front_default : sprite}, weight, height } = res.data;
                const type = res.data.types[0].type.name
                setName(name);
                setSprite(sprite);
                setWeight(weight);
                setHeight(height);
                setTypes(type);
            });
    }, [caughtBool]);

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={sprite} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {type}-type pokemon
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Weight: {weight}</ListGroupItem>
                <ListGroupItem>Height: {height}</ListGroupItem>
            </ListGroup>
            <Button onClick={ e => {
                setCaught(prev => [...prev, {
                    name: name,
                    sprite: sprite
                }])
                console.log(typeof caught);
            }} disabled={isCaught()}>{isCaught() ? 'Already Caught!' : 'Catch!'}</Button>

        </Card>
    )
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}

export default PokemonDetail
