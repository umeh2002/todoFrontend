import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Main>Footer</Main>
    </Container>
  )
}

export default Footer

const Main = styled.div`
  width: 90%;
  height: 100%;
`

const Container =styled.div`
  width: 100%;
  height: 400px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`