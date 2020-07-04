import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_BASKET,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAILURE,
} from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: [],
  origin: [],
};
let initialProducts;

export default (state = initialState, action) => {
  let productSelected = "";

  switch (action.type) {
    case PRODUCTS_GET_SUCCESS:
      initialProducts = { ...action.payload };
      const origin = [];

      for (const key in initialProducts) {
        origin.push(initialProducts[key]);
      }

      return {
        ...state,
        products: action.payload,
        origin: origin,
      };

    //asdasd
    case PRODUCTS_GET_FAILURE:
      return {
        ...state,
      };

    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };

      productSelected.numbers += 1;
      productSelected.inCart = true;

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].amount,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].amount,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      if (productSelected.numbers === 1)
        return {
          ...state,
          basketNumbers: state.basketNumbers,
          cartCost: state.cartCost,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };
      else {
        productSelected.numbers -= 1;
        return {
          ...state,
          basketNumbers: state.basketNumbers - 1,
          cartCost: state.cartCost - state.products[action.payload].amount,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };
      }

    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        basketNumbers: state.basketNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.amount,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case CLEAR_BASKET:
      return {
        ...state,
        basketNumbers: 0,
        cartCost: 0,
        products: { ...initialProducts },
      };
    default:
      return state;
  }
};
