import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAILURE,
} from "./types";
import { fetchProducts } from "../fetch/products.fetch";

export const fetchProductsAction = () => async (dispatch) => {
  dispatch({
    type: PRODUCTS_GET_REQUEST,
  });

  try {
    const response = await fetchProducts();
    const data = await response.json();

    let result = {};

    data.forEach((product) => {
      result[product.name] = {
        ...product,
        inCart: false,
        numbers: 0,
        amount: parseInt(product.amount),
      };
    });

    dispatch({
      type: PRODUCTS_GET_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_GET_FAILURE,
    });
  }
};
