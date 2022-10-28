import React, { Fragment } from 'react'
import PowerList from './PowerList'

const Card = ({ data }) => {

    return (
        <Fragment>
            {
                data.map(pokemon => (

                    <div key={pokemon.id} style={{ border: "1px solid red", display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "20px" }}>
                        <h2>{pokemon.pokemonName}</h2>
                        <div style={{ width: "120px" }}>
                            <img style={{ width: "100%" }} src={pokemon.avatar} alt={pokemon.name} />
                        </div>
                        {
                            pokemon.power && (
                                <PowerList list={pokemon.power} />
                            )
                        }
                    </div>
                ))
            }
        </Fragment>
    )
}

export default Card