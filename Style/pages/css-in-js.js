import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};

`

function CSSJS() {
  return (
    <>
      <Title>Styled Component</Title>
      <h2 style={{ color: 'red' }}>Hello world</h2>
    </>
  )
}

export default CSSJS
