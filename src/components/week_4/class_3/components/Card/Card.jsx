import React from 'react'
import "./index.css"

const Card = () => {
    return (
        <div className="card">
            <div className="card-info">
                <span className="text-button">FOR HER</span><span> / </span><span className="text-button">FOR HER</span>
                <img src="https://media2.giphy.com/media/WNzdpwzusqLM1wb1gA/giphy.gif?cid=790b761193ed4cd00659666461aa0799b44f1ee0909e7f9e&rid=giphy.gif&ct=g" alt="" />
                <h4>Nombre del producto</h4>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem ab quos vitae fugiat quod.</p> */}
            {/* <p>Precio: $111</p> */}
            <div className="button-container">
                <button onClick={() => console.log('bruh')}>ADD TO CART</button>
            </div>
            {/* <div className="button-container">
            <button style={{
                backgroundColor: 'red'
            }}>REMOVE</button>
            <button>ADD 1</button>
        </div> */}
        </div>
    )
}

export default Card