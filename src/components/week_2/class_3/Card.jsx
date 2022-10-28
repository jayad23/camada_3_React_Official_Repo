import React, { Fragment } from 'react'
import PowerList from './PowerList'

const CardBackgroundColor = (type) => {
    switch (type)
    {
        case "fire":
            return {
                borderColor: "#5A0E1A",
                bgColor: "#B3001B",
            }
        case "water":
            return {
                borderColor: "#255C99",
                bgColor: "#7EA3CC",
            }

        case "rock":
            return {
                borderColor: "#262626",
                bgColor: "#C6C6C6",
            }

        default:
            return;
    }
}

const GetColors = (type) => {
    const { borderColor, bgColor } = CardBackgroundColor(type)
    const styles = {
        border: `3px solid ${ borderColor }`,
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        padding: "20px",
        width: "200px",
        backgroundColor: `${ bgColor }`,
        borderRadius: "20px"
    }

    return styles;
}

const Card = ({ data, type }) => {

    return (
        <Fragment>
            {
                data.map(pokemon => (

                    <div key={pokemon.id} style={GetColors(type)}>
                        <h2>{pokemon.pokemonName}</h2>
                        <div style={{ width: "120px", margin: "0 auto" }}>
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
        </Fragment >
    )
}

export default Card