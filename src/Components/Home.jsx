import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const Wrapper = styled.div`
  background: url("https://images.alphacoders.com/107/107763.jpg");
  height: 100vh;
  background-size: cover;
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};

export default Home;
