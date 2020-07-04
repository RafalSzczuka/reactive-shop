import React, { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";

const ProductPage = ({ match, basketProps }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = basketProps.origin;

  const product = products.filter((p) => p.id === match.params.id);

  const { name, amount, category, image } = product[0];

  if (products.length === 0) {
    return <h4>Data loading....</h4>;
  } else {
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
        />
      </motion.div>
    );
  }
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(ProductPage);
