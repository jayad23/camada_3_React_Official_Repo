import React, { useState } from 'react'
import data from "./data.json";
import Header from './components/header/teacher/Header';
import ListOfProducts from "./components/card/teacher/ListOfProducts";

const getTotal = (price) => {
  const symbol = price.indexOf("$");
  const value = Number(price.slice((symbol + 1), price.length));
  return value;
}

const Store = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProducts] = useState(data.products);
  const [viewSelected, setViewSelected] = useState("local");

  const handleSelectedProduct = (product) => {
    const value = getTotal(product.price);

    const addedProduct = products.map(prdct => prdct.id === product.id ?
      {
        ...prdct,
        added: true,
        itemsSelected: prdct.itemsSelected ?
          prdct.itemsSelected + 1 : 1,
        value,
      }
      : prdct
    );
    const productsInCart = addedProduct.filter(prdct => prdct.added && prdct.added === true);
    setNumberOfItemsInCart(productsInCart.length);
    setProducts(addedProduct);
    setProductsInCart(productsInCart);
  };

  const handleAddPlusItem = (product) => {
    const value = getTotal(product.price);

    const addedProduct = products.map(prdct => prdct.id === product.id ?
      {
        ...prdct,
        itemsSelected: prdct.itemsSelected + 1,
        value: prdct.value + value,
      } : prdct
    );
    setProducts(addedProduct);
    const productsInCart = addedProduct.filter(prdct => prdct.added && prdct.added === true);
    setProductsInCart(productsInCart);
  }

  const handleRemoveItem = (product) => {
    const value = getTotal(product.price);

    if (product.itemsSelected > 1) {
      const addedProduct = products.map(prdct => prdct.id === product.id ?
        {
          ...prdct,
          itemsSelected: prdct.itemsSelected - 1,
          value: prdct.value - value,
        } :
        prdct
      );
      setProducts(addedProduct);
      const productsInCart = addedProduct.filter(prdct => prdct.added && prdct.added === true);
      setProductsInCart(productsInCart);
    } else {
      const addedProduct = products.map(prdct => prdct.id === product.id ?
        { ...prdct, added: false, itemsSelected: null, value: 0 }
        : prdct
      );
      const productsInCart = addedProduct.filter(prdct => prdct.added && prdct.added === true);
      setNumberOfItemsInCart(productsInCart.length);
      setProducts(addedProduct);
      setProductsInCart(productsInCart);
    };
  };

  const handleViewSelection = (param) => {
    setViewSelected(param);
  };

  const values = productsInCart.map(pr => (pr.value));

  const headerProps = {
    logo: data.store.logo,
    appName: data.store.name,
    count: numberOfItemsInCart,
    handleViewSelection,
  };

  const RenderListOfProducts = (view) => {
    switch (view) {
      case "cart":
        return (
          <ListOfProducts
            products={productsInCart}
            viewSelected={viewSelected}
            handleRemoveItem={handleRemoveItem}
            handleAddPlusItem={handleAddPlusItem}
            handleSelectedProduct={handleSelectedProduct}
            total={values.length > 0 && values.reduce((a, b) => (a + b))}
          />
        )

      default:
      case "local":
        return (
          <ListOfProducts
            products={products}
            viewSelected={viewSelected}
            handleRemoveItem={handleRemoveItem}
            handleAddPlusItem={handleAddPlusItem}
            handleSelectedProduct={handleSelectedProduct}
            total={values.length > 0 && values.reduce((a, b) => (a + b))}
          />
        )
    }
  }

  return (
    <div>
      <Header {...headerProps} />
      {RenderListOfProducts(viewSelected)}
    </div>
  )
}

export default Store