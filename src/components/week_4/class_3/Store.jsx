import React from 'react'
import data from "./data.json";
import Header from "./components/header/Header";
import Card from './components/Card/Card';

const Store = () => {
  return (
    <div>
      <Header />
      <Card />
    </div>
  )
}

export default Store