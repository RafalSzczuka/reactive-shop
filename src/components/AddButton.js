import React from "react";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const AddButton = (props) => {
  const product = props.product;
  return (
    <button
      className="addButton"
      onClick={() => {
        props.addBasket(product);
      }}
    >
      Add to cart
    </button>
  );
};

export default connect(null, { addBasket })(AddButton);
