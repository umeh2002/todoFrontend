import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StepInput = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const schema = yup.object({
    name: yup.string().required(),
    task: yup.string().required(),
    priority: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (res: any) => {});

  return (
    <Card onSubmit={onSubmit}>
      <Holder>
        <Nam>assign name</Nam>
        <Input placeholder="name" {...register("name")} />
        {errors.name && <Err>enter name</Err>}
      </Holder>
      <Holder>
        <Nam>assign task</Nam>
        <Input placeholder="task" {...register("task")} />
        {errors.task && <Err>enter task</Err>}
      </Holder>
      <Holder>
        <Nam>assign priority</Nam>
        <Input placeholder="priority" {...register("priority")} />
        {errors.priority && <Err>enter priority</Err>}
      </Holder>
      <Button type="submit">Add step</Button>
    </Card>
  );
};

export default StepInput;

const Button = styled.button`
  margin-bottom: 5px;
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  background-color: dodgerblue;
  outline: none;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 110px;
  transition: all 400ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -5px);
  }
`;

const Err = styled.div`
  font-size: 12px;
  text-align: right;
  color: red;
  padding-right: 15px;
`;

const Input = styled.input`
  outline: none;
  padding-left: 10px;
  width: 90%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid silver;
  margin-bottom: 5px;
`;

const Nam = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;

const Holder = styled.div`
  padding-left: 20px;
`;

const Card = styled.form``;
