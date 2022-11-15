import React, { useState } from 'react'
import { FlexedContainer } from '../../../styles.general'
import { CustomSpan, ProductImage, SectionWrapper, Button } from "./styles.cards.js";

const Cards = ({ product, handleSelectedProduct, handleAddPlusItem, handleRemoveItem }) => {

  const [genderSelected, setGenderSelected] = useState(product.demo_female);
  const [paramPassed, setParamPassed] = useState("female");

  const handleGenderSelected = (param) => {
    const options = {
      male: product.demo_male,
      female: product.demo_female
    };
    setParamPassed(param);
    setGenderSelected(options[param]);
  }

  return (
    <FlexedContainer
      custom
      direction="column"
      width="300px"
      isCard
    >
      <section>
        <FlexedContainer custom justify="start" gap={5} align="start" >
          <CustomSpan
            space={10}
            onClick={() => handleGenderSelected("female")}
            selection={paramPassed === "female"}
          >
            For her
          </CustomSpan>
          {"-"}
          <CustomSpan
            selection={paramPassed === "male"}
            onClick={() => handleGenderSelected("male")}
          >
            For him
          </CustomSpan>
        </FlexedContainer>
        <ProductImage src={genderSelected} alt="product" />
      </section>
      <SectionWrapper>
        <h3 style={{ wordBreak: "break-word" }}>{product.name.slice(0, 12)}</h3>
        <h3 style={{ wordBreak: "break-word" }}>{product.name.slice(12, product.name.length)}</h3>
        <p>{product.price}</p>
        {product.itemsSelected && product.itemsSelected > 0 && (
          <CustomSpan>
            This item in Cart: {product?.itemsSelected}
          </CustomSpan>
        )}
      </SectionWrapper>
      {
        product && product.added ? (
          <FlexedContainer
            width="100%"
            justify="space-between"
          >
            <Button
              width={50}
              color="crimson"
              onClick={() => handleRemoveItem(product)}
            >
              remove
            </Button>
            <Button
              width={50}
              onClick={() => handleAddPlusItem(product)}
            >
              add + 1
            </Button>
          </FlexedContainer>
        ) : (
          <Button width={100} onClick={() => handleSelectedProduct(product)}> add to cart</Button>
        )
      }
    </FlexedContainer>
  )
}

export default Cards