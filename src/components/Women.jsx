import React, { useEffect, useState } from "react";
import { Grid, Select } from "./Styled";
import { ProductCard } from "./ProductCard";

const Women = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    fetch("https://movie-fake-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        let temp = data.filter((item) => item.category === "women");
        setProductsData(temp);
      });
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    if (e.target.value === "asc") {
      let temp = productsData.sort((a, b) => a.price - b.price);
      setProductsData([...temp]);
    } else if (e.target.value === "desc") {
      let temp = productsData.sort((a, b) => b.price - a.price);
      setProductsData([...temp]);
    }
  };
  console.log(productsData);
  return (
    <>
      <h2>Women</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {productsData.map((item) => (
          <ProductCard item={item} />
        ))}
      </Grid>
    </>
  );
};

export default Women;
