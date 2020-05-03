import React, { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";

import ItemsService from "../services/ItemsService";

const ProductPage = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <ProductDetails
        name={name}
        amount={amount}
        category={category}
        image={image}
        weight={weight}
        dimensions={dimensions}
      />
    </motion.div>
  );
};

export default ProductPage;
