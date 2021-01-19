import React, { createContext, useState } from 'react';

export const CaughtPokemonContext = createContext();

export const CaughtPokemonProvider = (props) => {
    const [ caughtPokemon, setCaughtPokemon ] = useState([]);

    return (
        <CaughtPokemonContext.Provider 
        value={[ caughtPokemon, setCaughtPokemon ]}>
            {props.children}
        </CaughtPokemonContext.Provider>
    )
}