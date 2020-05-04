import React from "react";
import { ItemWrapper, Product, Numbers, Button } from "../styles/CartItem.js";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";
import { Tooltip } from "../styles/Tooltip";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({
  image,
  name,
  amount,
  numbers,
  productQuantity,
  clearProduct,
  id,
}) => {
  let cost = (numbers * amount).toFixed(2);
  return (
    <ItemWrapper>
      <Product>
        <Link to={`/product/${id}`}>
          <div className="item_img">
            <img src={image} alt={name} />
          </div>
          <h3>{name}</h3>
        </Link>
      </Product>
      <Numbers>
        <span className="amount">{amount}$</span>
        <div className="operators">
          <Button
            className="btn_decrease"
            onClick={() => productQuantity("decrease", name)}
          >
            <span>-</span>
          </Button>
          <span className="quantity">{numbers}</span>
          <Button
            className="btn_increase"
            onClick={() => productQuantity("increase", name)}
          >
            <span>+</span>
          </Button>
        </div>
        <span className="total">{cost}$</span>
      </Numbers>
      <Tooltip className="cart_trash">
        <FontAwesomeIcon
          className="trash"
          icon={faTrashAlt}
          onClick={() => clearProduct(name)}
        />
        <span>Remove</span>
      </Tooltip>
    </ItemWrapper>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  CartItem
);
