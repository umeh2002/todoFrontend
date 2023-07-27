import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as yup from "yup";
import { changeTaskToggleFalse } from "../../../Global/globalStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../../../Utils/TaskApi";

const TaskInput = () => {
  const query = useQueryClient()
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user._id);;

  // console.log(user)

  const schema = yup.object({
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

  const mutate = useMutation({
    mutationKey: ["tasks"],
    mutationFn: (data:any) => createTask(user, data),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onSubmit = handleSubmit(async (res: any) => {
    mutate.mutate({
      task: res.task,
      priority: res.priority,
    })
    dispatch(changeTaskToggleFalse());
    console.log("adding a task")
  });

  return (
    <Card onSubmit={onSubmit}>
      <Holder>
        <Nam>Task</Nam>
        <Input placeholder="enter task" {...register("task")} />
        {errors.task && <Err>enter task</Err>}
      </Holder>
      <Holder>
        <Nam>Priority</Nam>
        <Input placeholder="enter priority" {...register("priority")} />
        {errors.priority && <Err>enter priority</Err>}
      </Holder>
      <Button type="submit">Create task</Button>
    </Card>
  );
};

export default TaskInput;

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
  padding-right: 10px;
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
