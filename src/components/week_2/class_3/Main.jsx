import React from 'react'
import { Pokemon } from "../pokemons"
import Card from './Card'

const Main = () => {
    const typesOfPokemon = Object.keys(Pokemon)

    return (
        <div style={{ padding: "20px" }}>
            <h1>List of Pokemons</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {
                    typesOfPokemon.map(type => (
                        <Card
                            key={Pokemon[type].pokemonName}
                            data={Pokemon[type]}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Main