import React, { useEffect } from "react";
import ItemsService from "../services/ItemsService";
import Product from "../components/Product";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";

const desktops = ItemsService.getFeatured("desktop");
const tablets = ItemsService.getFeatured("tablet");

const Products = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 360px) {
    flex-wrap: wrap;
  }
`;
const Featured = styled.h2`
  text-align: center;
  font-size: 2rem;

  @media (max-width: 360px) {
    font-size: 1.7rem;
  }
`;

const TextInt = styled.span`
  font-size: 2rem;
  color: gray;
  font-style: italic;

  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`;

const featuredDesktops = desktops.map((product) => (
  <Product
    key={product.id}
    image={product.image}
    name={product.name}
    amount={product.amount}
    id={product.id}
  />
));
const featuredTablets = tablets.map((product) => (
  <Product
    key={product.id}
    image={product.image}
    name={product.name}
    amount={product.amount}
    id={product.id}
  />
));

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="container"
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="header-big">
        Welcome to our <TextInt>(reactive)</TextInt> store
        <TextInt> ...with redux state management</TextInt>
      </h1>
      <Featured>Desktops</Featured>
      <Products>{featuredDesktops}</Products>
      <Featured>Tablets</Featured>
      <Products>{featuredTablets}</Products>
    </motion.div>
  );
};

export default HomePage;
