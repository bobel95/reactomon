import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export class Types extends Component {

    _isMounted = false;

    state = {
        results: []
    }

    componentDidMount = () => {
        this._isMounted = true;
    
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => this.setState({ results: res.data.results }));
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render() {
        console.log(this.state.results);

        const types = this.state.results
                        .map(t => <ListGroupItem>{t.name}</ListGroupItem>);

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
}

const cardStyle = {
    width: '40%',
    margin: '1rem auto',
    textAlign: 'center',
    border: '2px solid black'
}



export default Types
