const Header = () => {
    const ulStyles = {
        display: "flex",
        listStyle: "none",
        justifyContent: "space-evenly",
        gap: "3px",
        padding: "0"
    }

    const colorPicket = (bgColor, ftColor) => {
        const liStyles = {
            width: "100%",
            padding: "10px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: `${bgColor}`,
            color: `${ftColor}`
        }

        return liStyles;
    }

    return (
        <header style={{ width: "100%"}}>
            <nav style={{ width: "100%"}}>
                <ul style={ulStyles}>
                    <li style={colorPicket("blue", "white")}>Home</li>
                    <li style={colorPicket("green", "yellow")}>About</li>
                    <li style={colorPicket("crimson", "white")}>Contact</li>
                    <li style={colorPicket("purple", "pink")}>More Info</li>
                    <li style={colorPicket("black", "yellow")}>Gallery</li>
                </ul>
            </nav>
        </header>
    )
}

const Avatar = (props) => {
    return <img src={props.image} alt={props.imageAlt}/>
}
const Bio = (props) => {
    return (
        <div style={{ flexDirection: "column"}}>
            <h1>Nombre: {props.name}</h1>
            <p>Ocupación: {props.occupation}</p>
            <p>Nacionalidad: {props.nationality}</p>
            <p>Fecha de Nacimiento: {props.DOB}</p>
            <p>Edad: {props.age}</p>
            <Media movies={props.movies} series={props.series}/>
        </div>
    )
}

const Media = ({ movies, series}) => {
    return (
        <ul>
            <div style={{ marginBottom: "10px", fontWeight: "bolder"}}>
                <span>Apariciones: </span>
            </div>
            <span>Peliculas: </span>
            {
                movies.map((movie, idx) => 
                <li key={idx}>{movie}</li>
                )
            }
            <span>Series:</span>
            {
                series.map((serie, idx) => 
                    <li key={idx}>{serie}</li>
                )
            }

            <div>
                <span>total Apariciones: {(movies.length) + (series.length)}</span>
            </div>
        </ul>
    )
}

const App = () => {
    //STATE
    const db = [
        {
            name: "Taylor Daniel Lauthner",
            occupation: "Actor",
            nationality: "American",
            DOB: "Feb. 11th, 1992",
            age: "30 years old",
            movies: ["Twilight Saga", "Shark Boy 1, 2", "Runner", "Abduction", "Ridiculous", "Run the Tide", "Scream Queens", "St. Valentine's"],
            series: ["Cuckoo"],
            avatar: "https://younghollywood.com/images/stories/newsIMG/wenn/20110902/wenn3484998_46_2000_9.jpg"
        }
    ]

    const bioProps = {
        name: db[0].name,
        occupation:db[0].occupation,
        nationality:db[0].nationality,
        DOB:db[0].DOB,
        age:db[0].age,
        movies:db[0].movies,
        series:db[0].series
    }
    //STATE
    return (
        <div>
            <Header />
            <section style={{ display: "flex", justifyContent: "space-evenly", gap: "10px"}}>
                <Avatar image={db[0].avatar} imageAlt={db[0].name}/>
                <Bio {...bioProps}/>
            </section>
            <h1>Componente App</h1>
        </div>
    )
}



// ReactDOM.render(<App />, document.getElementById("root"));