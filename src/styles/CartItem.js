import styled from "styled-components";

export const ItemWrapper = styled.div`
  height: 150px;
  margin: 10px 0;
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);
  flex-grow: 1;

  .item_img {
    height: 140px;
    width: 60%;
    overflow: hidden;
    position: relative;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    max-width: 90%;
  }

  .cart_trash {
    position: absolute;
    right: -100px;

    span {
      margin-left: -90px;
      margin-top: 20px;
    }
  }

  .trash {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    font-size: 1.7rem;
    opacity: 0.2;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      color: red;
    }
  }
`;

export const Numbers = styled.div`
  flex-basis: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  span {
    font-size: 1.2rem;
  }

  .total {
    font-weight: bold;
    transform: translateX(-7px);
  }
  .operators {
    position: relative;
    min-width: 60px;
  }
`;

export const Product = styled.div`
  flex-basis: 30%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: black;
  }
`;

export const Button = styled.button`
  position: absolute;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.4);
  box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.4);
  font-size: 1.3rem;
  transition: 0.2s;
  cursor: pointer;
  outline: none;

  &.btn_decrease {
    position: absolute;
    left: -10px;
    &:hover {
      background-color: #fa6472;
    }
  }
  &.btn_increase {
    position: absolute;
    right: -10px;
    &:hover {
      background-color: #7aea7a;
    }
  }
  &:hover {
    box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.8);
  }
`;
