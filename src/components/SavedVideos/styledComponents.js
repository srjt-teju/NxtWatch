import styled from 'styled-components'

export const SavedCon = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9 ')};
  min-height: 100vh;
  width: 80%;
  font-family: 'Roboto';
`

export const FailCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  padding: 20px;
  height: 100vh;
`
export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  font-size: 30px;
`
export const Para = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : ' #64748b')};
  font-size: 20px;
  font-weight: 500;
  margin: 3px;
`
export const Banner = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  padding: 40px;
  padding-left: 50px;
  display: flex;
  align-items: center;
`
export const Span = styled.span`
  background-color: ${props => (props.isDark ? '#212121' : '#e2e8f0')};
  padding: 25px;
  padding-left: 28px;
  padding-right: 28px;
  border-radius: 50px;
  margin-right: 20px;
`
export const CustomHead = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : ' #0f0f0f')};
  font-size: 45px;
`
