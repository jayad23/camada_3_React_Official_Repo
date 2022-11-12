import React, { Fragment, useState } from 'react'
import { CardsContainer } from '../card/teacher/styles.cards'

const TotalAverage = ({ total }) => {
  return (
    <Fragment>
      <CardsContainer>
        <h1>Total USD: $ {total}</h1>
      </CardsContainer>
    </Fragment>
  )
}

export default TotalAverage;