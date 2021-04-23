import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 49.4%;
  background-color: #ccc;
  height: auto;
  margin: 20px auto;
  opacity: 0.9;
  text-indent: 10px;
  padding: 20px;
  box-sizing: border-box;

  span {
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
  }
  img {
    float: right;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-indent: 0;
    text-align: center;
    span {
      line-height: 30px;
      font-weight: 400;
    }
    img {
      float: none;
      width: 100%;
    }
  }
`;

const Content = () => {
  return (
    <ContentWrapper>
      <img
        src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/12/George-Lucas-star-wars-sequel-trilogy-original-trilogy-.jpg?q=50&fit=crop&w=400&h=400"
        alt="georgelucas"
      />
      <span>
        Chronologically, the story spans 67 years and it begins with Anakin
        Skywalker, the Chosen One of Jedi prophecy, as the prequel trilogy
        charts his rise as a Jedi Knight through his fall to the dark side of
        the Force and becoming Darth Vader. The original trilogy tells the story
        of Anakin's children, Luke Skywalker and Leia Organa, as they lead the
        fight against the Galactic Empire, and Luke saves Anakin from the dark
        side and becomes a Jedi in his own right. The sequel trilogy focuses on
        Rey, a Force prodigy who is swept up into a new galactic conflict and
        faces off against Anakin's fallen grandson, Kylo Ren while becoming the
        first of a new generation of Jedi.
      </span>
    </ContentWrapper>
  );
};

export default Content;
