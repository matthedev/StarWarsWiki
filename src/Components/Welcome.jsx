import React from "react";
import styled from "styled-components";
import saber from "../Utility/saber.mp3";

const Wrapper = styled.div`
  background: url("http://wallpapercave.com/wp/pEeUsp1.jpg");
  height: 100vh;
  background-size: cover;
`;

const LogoWrapper = styled.div`
  text-align: center;

  img {
    margin: 50px;
    width: 500px;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  background-color: #ccb905;
  margin: 200px auto;
  padding: 7px;
  width: 250px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    background-color: #eea236;
    color: black;
  }
`;

const Welcome = ({ history }) => {
  const visitHandler = () => {
    let audio = new Audio(saber);
    audio.play();
    history.push("/home");
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/2000px-Star_Wars_Yellow_Logo.svg.png"
          alt="logo"
        />
      </LogoWrapper>
      <ButtonWrapper onClick={visitHandler}>USE THE FORCE</ButtonWrapper>
    </Wrapper>
  );
};

export default Welcome;
