import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Main>
        <Logos>
          <Logo>umeh</Logo>
          <Navs>
            <Nav>For team</Nav>
            <Nav>Project guides</Nav>
            <Nav>Features</Nav>
            <Nav>Pricing</Nav>
            <Nav>Templates</Nav>
            <Nav>Support</Nav>
            <Nav>Deals</Nav>
          </Navs>
        </Logos>
        <Button to="/register">Get Started</Button>
      </Main>
    </Container>
  );
};

export default Header;

const Button = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: dodgerblue;
  color: black;
  outline: none;
  border: 1px solid black;
  text-decoration: none;
  transition: all 350ms;

  :hover {
    cursor: pointer;
  }
`;

const Nav = styled.div`
  margin-left: 10px;
  font-size: 15px;
  margin-top: 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
  }
`;

const Navs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Logos = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
