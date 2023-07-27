import React from 'react'
import Sider from '../../Components/Static/Sider'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Todo = () => {
  return (
    <div>
      
      <Container>
      <Sider />
       <Outlet />
      </Container>
    </div>
  ) 
}

export default Todo

const Container =styled.div`
display: flex;
`