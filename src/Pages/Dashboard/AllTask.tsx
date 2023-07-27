import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import Progress from './Progress'
import Done from './Done'

const AllTask = () => {
  return (
  <Container>
    <Task/>
    <Progress />
    <Done />
  </Container>
  )
}

export default AllTask

const Container =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
padding: 100px;

`