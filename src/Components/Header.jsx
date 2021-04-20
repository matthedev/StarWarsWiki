import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: url("https://ultimatestarwarsexperience.files.wordpress.com/2015/02/im-header-starwars-all.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 70%;
  height: 200px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 28px;
  font-weight: 700;
`;

const NavbarWrapper = styled.div`
  background: rgb(222, 203, 40);
  background: linear-gradient(
    90deg,
    rgba(222, 203, 40, 1) 14%,
    rgba(255, 232, 31, 1) 37%,
    rgba(72, 74, 28, 1) 100%
  );
  width: 49.4%;
  height: 70px;
  margin: 0 auto;
  font-size: 28px;
  text-align: center;
`;

const NavigationWrap = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  line-height: 40px;
  font-weight: 700;

  .navlink {
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }

  .active {
    color: white;
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderWrapper />
      <NavbarWrapper>
        <span>In a galaxy far, far away....</span>
        <NavigationWrap>
          <NavLink to="/home" className="navlink" activeClassName="active">
            Home
          </NavLink>
          <NavLink
            to="/characters"
            className="navlink"
            activeClassName="active"
          >
            Characters
          </NavLink>
          <NavLink to="/movies" className="navlink" activeClassName="active">
            Movies
          </NavLink>
          <NavLink to="/species" className="navlink" activeClassName="active">
            Species
          </NavLink>
          <NavLink to="/map" className="navlink" activeClassName="active">
            Map
          </NavLink>
        </NavigationWrap>
      </NavbarWrapper>
    </div>
  );
};

export default withRouter(Header);
