import React from 'react'
import styled from 'styled-components'
import TaskInput from './Input/TaskInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeTaskToggleFalse, changeTaskToggleTrue } from '../../Global/globalStore'
import StepInput from './Input/StepInput'
import {useQuery} from "@tanstack/react-query"
import { readTask } from '../../Utils/TaskApi'

const Task = () => {

  const dispatch =useDispatch()
  const toggle =useSelector((state:any)=>state.taskToggle)
  const user =useSelector((state:any)=>state.user?._id)

  const Read = useQuery({
    queryKey: ['data'],
    queryFn: () => readTask()
  })

  return (
   <Container>
    <Card>
      <Title >Task</Title>
     {toggle ? <Txt onClick={()=>{
      dispatch(changeTaskToggleFalse())
     }}>Add task</Txt>: <Txt onClick={()=>{
      dispatch(changeTaskToggleTrue())
     }}>Add task</Txt>}
      <TaskInput />
      {
        Read?.data?.map((props:any)=>(<Holder>
          <Pics>
            <Pic>{props?.avatar}</Pic>
            <Nam>{props?.name}</Nam>
          </Pics>
          <Tasks>{props?.task}</Tasks>
  <Priority>{props?.priority}</Priority>
  <Div>
    <Button bg="purple">Steps</Button>
    <Button bg="dodgerblue">Start</Button>
    <Button bg="#720a34">Delete</Button>
  </Div>
        </Holder>))
      }
      <StepInput />
    </Card>

   </Container>
  )
}

export default Task

const Txt= styled.div`
  padding: 0px 20px;
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 5px;
  transition: all 400ms;

  :hover{
    cursor: pointer;
    
  }
`

const Button=styled.button<{ bg?: string }>`
width: 50px;
outline: none;
border: 1px solid black;
height: 30px; 
margin-top: 5px;
margin-left: 5px;
margin-bottom: 5px;
display:flex;
justify-content: center;
align-items: center;
background-color: ${({ bg }) => bg};
font-size: 12px;
border-radius: 3px;
color: white;
cursor: pointer;
`

const Div=styled.div`
display: flex;
margin-left: 10px;

`

const Priority =styled.div`
padding: 0px 10px;
`

const Tasks =styled.div`
padding: 5px 10px;
`

const Nam =styled.div`
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
`

const Pic =styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
overflow: hidden;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
`

const Pics =styled.div`
display: flex;
padding: 10px 10px;
`

const Holder =styled.div`
  width: 90%;
 min-height: 50px;
  background-color: grey;
  border-radius: 5px;
  margin-left: 15px;
  margin-bottom: 10px;
`

const Title=styled.div`
text-align: center;
margin: 10px 0px;
font-size: 20px;
font-weight: 500;
`

const Card =styled.div`
  width: 300px;
  min-height: 100px;
  border-radius: 10px;
  border: 1px solid black;
`

const Container =styled.div`
width: 100%;
height: 100vh;
margin-top: 750px;
display: flex;
justify-content: center;
align-items: center;
`

