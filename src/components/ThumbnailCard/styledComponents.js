import styled from 'styled-components'

export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : ' #1e293b')};
  font-size: 17px;
  margin: 5px;
  font-weight: 500;
`
export const CustomPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#616e7c' : ' #7e858e')};
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  margin-top: 7px;
`
