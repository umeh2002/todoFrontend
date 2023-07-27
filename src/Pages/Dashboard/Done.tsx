import React from 'react'
import styled from 'styled-components'

const Done = () => {
  return (
    <Container>
    <Card>
      <Title>Done</Title>
      <Holder>
        <Pics>
          <Pic>umeh</Pic>
          <Nam>umeh emmanuel</Nam>
        </Pics>
        <Tasks>washing plates</Tasks>
<Priority>High</Priority>
      </Holder>
    </Card>
   </Container>
  )
}

export default Done

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
`

const Title=styled.div`
text-align: center;
margin: 10px 0px;
font-size: 20px;
font-weight: 500;
`

const Card =styled.div`
  width: 300px;
  min-height: 300px;
  border-radius: 10px;
  border: 1px solid black;
`

const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`