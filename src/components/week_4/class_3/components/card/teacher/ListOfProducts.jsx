import React, { Fragment } from 'react'
import Card from "./Cards";
import NoDataAvailable from '../../no-data-selected/NoDataAvailable';
import TotalAverage from '../../bill/Bill';
import { CardsContainer } from "./styles.cards";

const ListOfProducts = ({
  products,
  handleSelectedProduct,
  handleAddPlusItem,
  handleRemoveItem,
  viewSelected,
  total
}) => {

  return (
    <Fragment>
      {
        viewSelected === "cart" && products.length > 0 && (
          <TotalAverage total={total} />
        )
      }
      <CardsContainer>
        {
          products && products.length > 0 ? products.map(product => (
            <Card
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
              handleAddPlusItem={handleAddPlusItem}
              handleSelectedProduct={handleSelectedProduct}
            />
          )) : (
            <NoDataAvailable />
          )
        }
      </CardsContainer>
    </Fragment>
  )
}

export default ListOfProducts