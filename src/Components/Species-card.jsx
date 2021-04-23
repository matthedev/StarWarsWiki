import React from "react";

import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 49.4%;
  background-color: #ccc;
  height: auto;
  margin: 20px auto;
  opacity: 0.9;
  display: flex;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SpanWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  span {
    font-size: 22px;
    line-height: 40px;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    span {
      line-height: 23px;
      font-size: 18px;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 50%;
  text-align: center;
  img {
    margin: 15px 50px;
    max-width: 80%;
    height: 400px;
    transition: all ease 200ms;
    border-radius: 0.6em;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
    }
    }
  }
  @media (max-width: 768px) {
    img {
      max-width: 70%;
      height: 320px;
      margin: 15px 40px;
    }
   }
`;

const Speciescard = ({
  name,
  classi,
  height,
  life,
  lang,
  skin,
  eye,
  hair,
  des,
  img,
}) => {
  return (
    <ContentWrapper>
      <ImgWrapper>
        <img src={img} alt="species" />
      </ImgWrapper>
      <SpanWrapper>
        <span>
          <strong>Name:</strong> {name}
        </span>
        <span>
          <strong>Classification:</strong> {classi}
        </span>
        <span>
          <strong>Average Height: </strong>
          {height}
        </span>
        <span>
          <strong> Average Life Span: </strong>
          {life}
        </span>
        <span>
          <strong>Language: </strong>
          {lang}
        </span>
        <span>
          <strong>Skin Color: </strong>
          {skin}
        </span>
        <span>
          <strong>Eye Color: </strong>
          {eye}
        </span>
        <span>
          <strong>Hair Color: </strong>
          {hair}
        </span>
        <span>
          <strong>Designation: </strong>
          {des}
        </span>
      </SpanWrapper>
    </ContentWrapper>
  );
};

export default Speciescard;
