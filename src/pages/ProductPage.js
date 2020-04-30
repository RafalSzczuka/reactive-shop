import React from "react";
import ProductDetails from "../components/ProductDetails";
import { Container } from "../styles/OrderPage";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/pageTransition";

import ItemsService from "../services/ItemsService";

const ProductPage = ({ match }) => {
  const product = ItemsService.getProductById(match.params.id);
  const { name, amount, category, image, weight, dimensions } = product[0];

  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Container>
        <ProductDetails
          name={name}
          amount={amount}
          category={category}
          image={image}
          weight={weight}
          dimensions={dimensions}
        />
      </Container>
    </motion.div>
  );
};

export default ProductPage;
