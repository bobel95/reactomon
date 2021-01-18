import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const Types = props => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => setData(res.data.results));
    }, [])

    let typeKey = 1;
    const types = data
        .map(type => <ListGroupItem key={typeKey++}>{type.name}</ListGroupItem>);

    return (
        <Card style={cardStyle}>
            <Card.Body>
                <Card.Title>Types</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {types}
            </ListGroup>
        </Card>
    )
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}

export default Types
