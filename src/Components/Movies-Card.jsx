import React from "react";
import styled from "styled-components";

const MovieWrapper = styled.div`
  width: 100%;
  margin: 15px auto;
`;

const TitleWrapper = styled.div`
  background-color: #333;
  color: #f5c518;
  padding: 5px;

  span {
    font-size: 35px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    text-align: center;
    span {
      font-size: 22px;
    }
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  background-color: #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  width: 50%;
  margin: auto;

  img {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DescWrapper = styled.div`
  width: 50%;
  background-color: #ccc;
  padding: 10px;

  span {
    display: block;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    span {
      line-height: 26px;
    }
  }
`;

const MoviesCard = ({ title, director, date, about, produc, picture }) => {
  return (
    <MovieWrapper>
      <TitleWrapper>
        <span>Star Wars: {title}</span>
      </TitleWrapper>
      <BoxWrapper>
        <ImgWrapper>
          <img src={picture} alt="" />
        </ImgWrapper>
        <DescWrapper>
          <span>Director: {director}</span>
          <span>Producer: {produc}</span>
          <span>Release Date: {date}</span>
          <span>
            About: <p style={{ fontSize: "14px", marginTop: "5px" }}>{about}</p>
          </span>
        </DescWrapper>
      </BoxWrapper>
    </MovieWrapper>
  );
};

export default MoviesCard;
