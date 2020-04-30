import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/pageTransition";

import { connect } from "react-redux";
import { Cart, CartHeader, CartFooter, OrderButton } from "../styles/CartPage";
import CartEmpty from "../components/CartEmpty";
import { clearBasket } from "../actions/productQuantity";
import { Tooltip } from "../styles/Tooltip.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage = ({ basketProps, clearBasket }) => {
  let productsInCart = [];
  const total = basketProps.cartCost.toFixed(2);

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <CartItem
        key={index}
        image={product.image}
        name={product.name}
        amount={product.amount}
        numbers={product.numbers}
      />
    );
  });

  const CartFilled = () => {
    return (
      <Cart>
        <CartHeader>
          <h4 className="cart_header_product">Product</h4>
          <h4 className="cart_header_price">Price</h4>
          <h4 className="cart_header_quantity">Quantity</h4>
          <h4 className="cart_header_total">Total</h4>
        </CartHeader>
        <div>{productsInCart}</div>
        <CartFooter>
          <div className="cost">
            <p>
              Total cost: <span>{total}$</span>
            </p>
          </div>
          <div className="clear_cart">
            <Tooltip>
              <FontAwesomeIcon
                className="trash"
                icon={faTrash}
                onClick={() => clearBasket()}
              />
              <span>Clear cart</span>
            </Tooltip>
          </div>
        </CartFooter>
        <Link
          to="/order"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <OrderButton onClick={() => clearBasket()}>Buy Now</OrderButton>
        </Link>
      </Cart>
    );
  };

  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      {total > 0 ? <CartFilled /> : <CartEmpty />}
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { clearBasket })(CartPage);
