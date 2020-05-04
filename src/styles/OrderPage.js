import styled from "styled-components";

export const Container = styled.div`
  font-family: "Catamaran", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px auto;
  width: 70%;

  @media (max-width: 830px) {
    width: 85%;
    margin: 0 auto;
  }
`;

export const Header = styled.h2`
  text-align: center;
  font-size: 3rem;

  @media (max-width: 830px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;

  @media (max-width: 830px) {
    font-size: 1.8rem;
  }
`;

export const Checkmark = styled.div`
  text-align: center;
  font-size: 15rem;
  color: #17b217;

  @media (max-width: 830px) {
    font-size: 10rem;
    margin: -30px;
  }
`;
