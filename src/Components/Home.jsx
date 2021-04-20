import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const Wrapper = styled.div`
  background: url("https://images.alphacoders.com/107/107763.jpg");
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

const Home = ({ history }) => {
  return (
    <Wrapper>
      <Header history={history} />
      <Content />
    </Wrapper>
  );
};

export default Home;
