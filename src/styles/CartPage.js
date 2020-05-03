import styled from "styled-components";

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 70%;

  /* @media (max-width: 360px) {
    width: 95%;
  } */
`;

export const CartHeader = styled.div`
  border-bottom: 3px solid rgba(50, 50, 50, 0.05);

  h4 {
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    width: 23%;
  }
  .cart_header_product {
    width: 30%;
  }
`;

export const CartFooter = styled.div`
  position: relative;
  width: 35%;
  background-color: white;
  margin-left: 65%;
  margin-bottom: 10px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;

  .cost span {
    font-size: 2rem;
    color: green;
    margin-left: 10px;
  }

  .clear_cart {
    position: absolute;
    top: 50%;
    right: -61px;

    span {
      font-size: 1rem;
      font-weight: normal;
      transition: 0.4s;
      top: 60%;
    }

    .trash {
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 1.7rem;
      opacity: 0.2;

      &:hover {
        opacity: 0.7;
        color: red;
      }
    }
  }
`;

export const OrderButton = styled.button`
  display: block;
  position: relative;
  width: 35%;
  background-color: white;
  margin-left: 65%;
  margin-bottom: 10px;
  border: none;
  height: 3rem;
  color: white;
  background-color: #189518;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  font-family: "Catamaran", sans-serif;
  text-transform: uppercase;

  &:hover {
    background-color: #17b217;
    box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.9);
  }
`;
