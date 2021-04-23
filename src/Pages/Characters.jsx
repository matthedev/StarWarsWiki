import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import CharCard from "../Components/Char-Card";

const Wrapper = styled.div`
  background: url("https://images.alphacoders.com/107/107763.jpg");
  height: 100vh;
  background-size: cover;
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  width: 49.4%;
  background-color: #ccc;
  height: auto;
  margin: 20px auto;
  opacity: 0.9;

  span {
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Characters = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <CharCard />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Characters;
