import styled from "styled-components";

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 70%;

  @media (max-width: 360px) {
    width: 95%;
  }
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
    top: 0;
    right: 0;
    font-weight: normal;
    font-size: 1rem;

    .trash {
      font-size: 1.7rem;
      opacity: 0.2;
      transition: 0.4s;
      cursor: pointer;
    }
  }
`;
