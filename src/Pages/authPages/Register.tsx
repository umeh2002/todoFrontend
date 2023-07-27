import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { createUser } from "../../Utils/authApi";
import Swal from "sweetalert2";

const Register = () => {

  const navigate= useNavigate()

  const create= yup.object({
    userName:yup.string().required(),
   email:yup.string().required().email(),
  password:yup.string().required(),
  confirmPassword:yup.string().oneOf([yup.ref("password")])
  })

  const {
    register,
    formState:{errors},
    handleSubmit,
    
  } =useForm({resolver:yupResolver(create)})

  const onSubmit =handleSubmit (async(res)=>{
    // const{userName, email, password, confirmPassword} =res
    createUser({
      userName :res.userName, 
      email:res.email, 
      password:res.password, 
      confirmPassword:res.confirmPassword
    }).then(()=>{
      Swal.fire({
        icon:"success",
        title:"Created Successfully",
        text:"Re-directing to Sign-in",
        timerProgressBar:true,
        timer:1000,
      })
    navigate("/sign-in")
    })
  })
 

  return (
    <Container>
      <Main>
        <Card onSubmit={onSubmit}>
          <Txt>Sign Up</Txt>

          <InputHolder>
            <Txt1>Enter name</Txt1>
            <Input placeholder="name" {...register("userName")} />
          {errors.userName &&  <Err>name must be enter</Err>}
          </InputHolder>

          <InputHolder>
            <Txt1>Enter password</Txt1>
            <Input placeholder="password" {...register("password")} />
           {errors.password &&  <Err>password must be enter</Err>}
          </InputHolder>

          <InputHolder>
            <Txt1>Confirm password</Txt1>
            <Input placeholder="confirm" {...register("confirmPassword")}/>
          {errors.confirmPassword &&   <Err>confirm password</Err>}
          </InputHolder>

          <InputHolder>
            <Txt1>Enter email address</Txt1>
            <Input placeholder="email" {...register("email")}/>
       {errors.email && <Err>email must be enter</Err>}
          </InputHolder>

          <Button  type="submit">Sign up</Button>

          <Txt2>
            By signing up you agree to our <span>Terms</span> and
            <span>Conditions</span>
          </Txt2>

          <Dot>
            <Line />
            <Txt3>or</Txt3>
            <Line />
          </Dot>

          <Txt4 to="/sign-in">Sign In</Txt4>
        </Card>
      </Main>
    </Container>
  );
};

export default Register;

const Err = styled.div`
  font-size: 10px;
  color: red;
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
`;

const Txt4 = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  color: dodgerblue;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;
  margin-left: 130px;
`;

const Dot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Txt3 = styled.div`
  margin-bottom: 3px;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: silver;
`;

const Txt2 = styled.div`
  padding:0 10px;
  font-size: 12px;
  margin: 10px 0;
  span {
    font-weight: 700;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: dodgerblue;
  outline: none;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  margin: 10px 0px;
  margin-left: 110px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  border: 1px solid silver;
  margin-left: 10px;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
`;

const Txt1 = styled.div`
  padding-left: 10px;
  font-size: 15px;
`;

const InputHolder = styled.div`
  margin: 20px 0px;
`;

const Txt = styled.div`
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  font-weight: 500;
`;

const Card = styled.form`
  width: 300px;
  min-height: 200px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
