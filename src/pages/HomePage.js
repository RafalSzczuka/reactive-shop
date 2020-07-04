import React, { useEffect } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import { connect } from "react-redux";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";

const Products = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Featured = styled.h2`
  text-align: center;
  font-size: 2rem;

  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;

const TextInt = styled.span`
  font-size: 2rem;
  color: gray;
  font-style: italic;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

const HomePage = ({ basketProps }) => {
  let products = basketProps.origin;

  const desktops = products.filter(
    (p) => p.category === "desktop" && p.featured
  );
  const tablets = products.filter((p) => p.category === "tablet" && p.featured);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (products.length === 0) {
    return <h4>Data loading....</h4>;
  } else {
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
  }
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(HomePage);
