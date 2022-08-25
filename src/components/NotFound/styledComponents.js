import styled from 'styled-components'

export const HomeCon = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  min-height: 100vh;
`

export const NotFoundCon = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const Para = styled.p`
  color: #64748b;
  font-size: 18px;
  font-weight: 500;
`
