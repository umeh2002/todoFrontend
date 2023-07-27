import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { signIn } from "../../Utils/authApi";
import { useDispatch } from "react-redux";
import { signInUser } from "../../Global/globalStore";
import axios from "axios";
const url = "http://localhost:3500/api/v1/auth";


const SignIn = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

  const schema =yup.object({
email:yup.string().required(),
password:yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  }=useForm({
    resolver:yupResolver(schema)
  })

  const onSubmit =handleSubmit(async(res:any)=>{
  
      try {
         await axios.post(`${url}/sign-in`, { email:res.email,
          password:res.password}).then((res) => {
            dispatch(signInUser(res.data.data))
            navigate("/input-task")
         return res.data.data
        });
      } catch (error) {
        console.log(error);
      }
   
  })



  return (
    <Container>
      <Main>
        <Card onSubmit={onSubmit}>
          <Txt>Sign In</Txt>

          <InputHolder>
            <Txt1>Enter email address</Txt1>
            <Input placeholder="email"{...register("email")} />
         {errors.email &&    <Err>email must be enter</Err>}
          </InputHolder>

          <InputHolder>
            <Txt1>Enter password</Txt1>
            <Input placeholder="password" {...register("password")}/>
           {errors.password &&  <Err>password must be enter</Err>}
          </InputHolder>

          <Button type="submit">Sign in</Button>

          <Txt2>Don't have an account yet</Txt2>

          <Txt4 to="/register">Sign up</Txt4>
        </Card>
      </Main>
    </Container>
  );
};

export default SignIn;

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
  padding-bottom: 30px;
  text-decoration: none;
  margin-left: 130px;
`;

const Txt2 = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
  text-align: center;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  background-color: dodgerblue;
  outline: none;
  border: 1px solid black;
  text-decoration: none;
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
