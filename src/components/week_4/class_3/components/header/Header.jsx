import React from 'react'
import { header, divs, imgHeader, spanHeader, iHeader } from './headerStyles'
import { TiShoppingCart } from 'react-icons/ti'

const Header = () => {
  return (
    <header style={header}>
        <div style={divs}>
            <img style={imgHeader} src="https://i.pinimg.com/originals/44/70/f8/4470f811037ecfdd235f8e5e9d21a669.gif" alt=''/>
            <h1>The Palaca of Jordans</h1>
        </div>
        <div style={divs}>
            <TiShoppingCart style={iHeader}/>
            <span style={spanHeader}>0</span>
        </div>
    </header>
  )
}

export default Header