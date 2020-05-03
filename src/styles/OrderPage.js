import styled from "styled-components";

export const Container = styled.div`
  font-family: "Catamaran", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 70%;

  @media (max-width: 360px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Header = styled.h2`
  text-align: center;
  font-size: 3rem;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;
`;

export const Checkmark = styled.div`
  text-align: center;
  font-size: 15rem;
  color: #17b217;
`;
