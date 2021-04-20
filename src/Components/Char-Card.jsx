import React, { useEffect, useState } from "react";
import Images from "../charImages";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  background-color: #ccc;
  min-height: 100vh;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  text-align: center;

  img {
      margin: 15px 0;
    max-width: 50%;
    height: 330px;
    transition: all ease 200ms;
    border-radius: 0.6em;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
    }
    }
  }
`;

const DescriptionWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f8bb2c;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

  span {
    text-align: center;
    text-transform: capitalize;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .arrow {
    font-size: 20px;
    cursor: pointer;
    opacity: 0.8;
    margin: 30px;
    &:hover {
      color: #f8931b;
    }
  }

  .disabledArrow {
    font-size: 20px;
    cursor: not-allowed;
    opacity: 0.1;
    margin: 30px;
  }
`;

const CharCard = () => {
  const [characters, setCharacters] = useState(null);
  const [firstChar, setFirstChar] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://swapi.dev/api/people/${firstChar}/`);

      const name = res.data.name.split(" ")[0].toLowerCase();

      res.data.image = Images[name];

      //es name imito chavweret ro dinamiurad wamoigos suratebi da ar mogviwios stringebis chawera key ebshi

      console.log("SPLITTER", name);

      setCharacters(res.data);
    };
    fetchData();
    setLoading(false);
  }, [firstChar]);

  const changeCounter = (type) => {
    if (type === "prev" && firstChar > 1) {
      setFirstChar((prevState) => prevState - 1);
    } else if (type === "next" && firstChar < 22) {
      setFirstChar((prevState) => prevState + 1);
    } else {
      return;
    }
  };

  return (
    <Wrapper>
      {characters && !loading ? (
        <>
          <ImgWrapper>
            <img src={characters.image} alt="luke" />
          </ImgWrapper>
          <DescriptionWrapper>
            <span>Name: {characters.name}</span>
            <span>Gender: {characters.gender}</span>
            <span>Birth Year: {characters.birth_year}</span>
            <span>Height: {characters.height}</span>
            <span>Hair Color: {characters.hair_color}</span>
            <span>Eye Color: {characters.eye_color}</span>
          </DescriptionWrapper>
        </>
      ) : (
        <DescriptionWrapper>
          <span>Loading...</span>
        </DescriptionWrapper>
      )}
      <ArrowWrapper>
        <span
          onClick={() => changeCounter("prev")}
          className={firstChar <= 1 ? "disabledArrow" : "arrow"}
        >
          Previous
        </span>
        <span
          onClick={() => changeCounter("next")}
          className={firstChar >= 22 ? "disabledArrow" : "arrow"}
        >
          Next
        </span>
      </ArrowWrapper>
    </Wrapper>
  );
};

export default CharCard;
