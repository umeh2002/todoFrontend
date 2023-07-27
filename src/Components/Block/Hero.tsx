import React from "react";
import styled from "styled-components";
import { GrCheckmark } from "react-icons/gr";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Main>
        <Icon />
        <Txt>Umeh To Do</Txt>
        <Txt1>
          To Do gives you focus, from work to <br /> play.
        </Txt1>
        <Button to="/register">Get Started</Button>

        <Txt2>Learn More</Txt2>
      </Main>
    </Container>
  );
};

export default Hero;

const Button = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: dodgerblue;
  outline: none;
  color: black;
  border: 1px solid black;
  text-decoration: none;
  margin-bottom: 20px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
  }
`;

const Txt2 = styled.div`
  cursor: pointer;
  color: dodgerblue;
`;

const Txt1 = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`;

const Txt = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Icon = styled(GrCheckmark)`
  margin-bottom: 20px;
  color: dodgerblue;
  font-size: 50px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
