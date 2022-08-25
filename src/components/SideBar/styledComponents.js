import styled from 'styled-components'

export const SideBarCon = styled.div`
  width: 20vw;
  padding: 0px;
  font-size: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  min-height: 130vh;
  background-color: ${props => (props.isDark ? ' #212121' : '#ffffff')};
`
export const SideBarItem = styled.li`
  color: ${props => (props.isDark ? ' #cccccc' : '#616e7c')};
  display: flex;
  align-items: center;
  padding: 8px;
  padding-left: 30px;
  background-color: ${props => {
    if (props.isDark) {
      return props.active ? '#383838' : ''
    }
    return props.active ? '#f1f5f9' : ''
  }};
`
export const Para = styled.p`
  font-size: 18px;
  font-weight: ${props => (props.active ? 'bold' : '')};
  margin: 5px;
  color: ${props => {
    if (props.isDark) {
      return props.active ? '#ffffff' : ''
    }
    return props.active ? '#000000' : ''
  }};
`
export const ContactPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#616e7c')};
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 18px;
`
