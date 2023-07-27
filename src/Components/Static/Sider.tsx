import React from "react";
import styled from "styled-components";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { BsHourglassSplit } from "react-icons/bs";
import { BsDatabaseExclamation } from "react-icons/bs";
import { MdHeight } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggleFalse, changeToggleTrue, logOut } from "../../Global/globalStore";

const Sider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);

  return (
    <Container w={toggle ? "k" : ""}>
      {toggle ? (
        <Butt tt={toggle ? "k" : ""} 
        onClick={()=>{
          dispatch(changeToggleFalse())
        }}
        />
      ) : (
        <Butt tt={toggle ? "k" : ""} 
        onClick={()=>{
          dispatch(changeToggleTrue())
        }}
        />
      )}
      <Main>
        <Holder>
          <Icon></Icon>
          <Logo>Umeh</Logo>
        </Holder>
        <Bottom w={toggle ? "k" : ""}>

          <Divs  to="/input-task/task">
            <Icon1>
              <BsListTask />
            </Icon1>
          {
            toggle &&  <Nam>View task</Nam>
          }
          </Divs>

          <Divs to="/input-task/progress">
            <Icon1>
              <BsHourglassSplit />
            </Icon1>
         {
          toggle &&    <Nam >View progress</Nam>
         }
          </Divs>

          <Divs  to="/input-task/done">
            <Icon1>
              <AiOutlineFileDone />
            </Icon1>
         {
          toggle &&    <Nam>View done</Nam>
         }
          </Divs>

          <Divs to="/input-task/">
            <Icon1>
              <BsDatabaseExclamation />
            </Icon1>
          {
            toggle &&   <Nam >View all</Nam>
          }
          </Divs>

          <Divs to="/input-task/highest">
            <Icon1>
              <MdHeight />
            </Icon1>
         {
          toggle &&    <Nam>Highest done task</Nam>
         }
          </Divs>
        </Bottom>

        <Down w={toggle ? "k" : ""}
        onClick={()=>{
          dispatch(logOut())
        }}
        >
          <Icon2>
            <BiLogOut />
          </Icon2>
    {
      toggle &&       <Button>Log out</Button>
    }
        </Down>
      </Main>
    </Container>
  );
};

export default Sider;

const Butt = styled(BsFillArrowRightSquareFill)<{ tt?: string }>`
  position: absolute;
  color: red;
  font-size: 30px;
  top: 50px;
  right: -15px;
  cursor: pointer;
  background-color: white;
  overflow: hidden;
  border-radius: 2px;
  transform: ${({ tt }) => (tt ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 360ms;
`;

const Icon2 = styled.div`
  font-size: 30px;
  margin-top: 3px;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Down = styled.div<{w?:string}>`
width: ${({w})=>w?"230px":"50px"};
transition: all 350ms;
  display: flex;
  align-items: center;
  margin-top: 300px;
`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  outline: none;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -5px);
  }
`;

const Bottom = styled.div<{w?:string}>`
width: ${({w})=>w?"230px":"50px"};
transition: all 350ms;
`;

const Nam = styled.div`
  margin-left: 10px;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  background-color: white;
  padding-left: 10px;
  margin-top: 10px;
  transition: all 400ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -5px);
  }
`;

const Icon1 = styled.div`
  margin-top: 10px;
  font-size: 25px;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Divs = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
`;

const Icon = styled.div``;

const Holder = styled.div`
  display: flex;
`;

const Logo = styled.div`
  padding: 20px 0px;
  font-size: 20px;
  font-weight: 700;
`;

const Main = styled.div`
  padding-left: 20px;
`;

const Container = styled.div<{ w?: string }>`
  height: 100%;
  width: ${({ w }) => (w ? "250px" : "80px")};
  background-color: red;
  color: black;
  position: relative;
  position: fixed;
  top: 0;
`;
