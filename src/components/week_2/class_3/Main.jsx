import React from 'react'
import { Pokemon } from "../pokemons"
import Card from './Card'

const Main = () => {
    const typesOfPokemon = Object.keys(Pokemon)

    return (
        <div style={{ padding: "20px", alignItems: "center" }}>
            <h1>List of Pokemons</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-evenly" }}>
                {
                    typesOfPokemon.map(type => (
                        <Card
                            key={Pokemon[type].pokemonName}
                            data={Pokemon[type]}
                            type={type}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Main