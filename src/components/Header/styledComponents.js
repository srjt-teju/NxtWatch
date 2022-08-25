import styled from 'styled-components'

export const Navbar = styled.nav`
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px;
  font-family: 'Roboto';
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
`
export const HeaderCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px;
`
export const OutlineButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.isDark ? '1px solid #ffffff' : '1px solid #3b82f6'};
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#ffffff' : ' #3b82f6')};
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
  margin-right: 15px;
  font-family: 'Roboto';
`
export const CustomButton = styled(OutlineButton)`
  background-color: ${props => (props.out ? 'transparent' : '#3b82f6')};
  color: ${props => (props.out ? '#616e7c' : '#ffffff')};
  border: ${props => (props.out ? '1px solid #616e7c' : '0px')};
  font-family: 'Roboto';
`
export const PopupBtn = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5px;
`
