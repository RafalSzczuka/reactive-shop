import styled from "styled-components";

export const Header = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 0;
`;

export const DetailsWidget = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);

  .column_left {
    width: 400px;
    margin: 0 20px;
  }

  .column_right {
    flex-grow: 1;
    margin: 0 20px;

    .buttons {
      display: flex;
      align-items: flex-end;
      flex-direction: column-reverse;

      .catalog {
        width: 300px;
      }
    }
  }

  .add_to_cart {
    margin-top: 20px;
    button {
      background-color: rgb(81, 156, 218);

      &::after {
        content: "";
        background: rgb(81, 156, 218);
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -100px !important;
        box-shadow: 0 0 5px 5px rgba(146, 217, 251, 0.85);
        opacity: 0;
        transition: all 0.8s;
      }
      &:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s;
      }
      &:active {
        transform: translateY(5px);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.6);
      }
    }

    span {
      font-size: 1.7rem;
      color: #00a1b4;
      margin-right: 20px;
    }
  }

  .category {
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  .wrapper {
    display: flex;

    .img_container {
      min-width: 400px;
      overflow: hidden;
      position: relative;
    }

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      max-height: 100%;
      max-width: 100%;
    }

    p {
      font-size: 1.2rem;
      padding: 25px;
      margin: 0;
      text-align: justify;
    }
  }

  button {
    position: relative;

    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(128, 128, 128, 0.2);
    color: white;

    font-size: 1.2rem;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    text-align: center;

    cursor: pointer;
    transition-duration: 0.4s;
    overflow: hidden;
    outline: none;

    &:hover {
      background-color: rgb(24, 129, 216);
      box-shadow: 2px 2px 6px rgba(128, 128, 128, 0.6);
    }
  }
`;

export const Technical = styled.div`
  h3 {
    text-transform: 1.4rem;
    letter-spacing: 1px;
  }

  ul {
    list-style: disc;
  }

  ul li {
    letter-spacing: 1px;
    font-size: 1.1rem;

    span {
      font-weight: bold;
    }
  }
`;
