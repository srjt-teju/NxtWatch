import styled from 'styled-components'

export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : ' #1e293b')};
  font-size: 18px;
  margin: 5px;
  margin-left: 10px;
  font-weight: bold;
`
export const CustomPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#616e7c' : ' #7e858e')};
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
`
