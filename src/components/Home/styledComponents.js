import styled from 'styled-components'

export const HomeCon = styled.div`
  background-color: ${props => (props.isDark ? '#181818 ' : '#f9f9f9')};
  min-height: 100vh;
  width: 80%;
  font-family: 'Roboto';
`
export const SearchCon = styled.div`
  border: 1px solid ${props => (props.isDark ? '#231f20' : '#cccccc')};
  width: 50%;
  margin: 30px;
  margin-left: 40px;
  border-radius: 3px;
  display: flex;
`

export const BannerCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  padding-right: 50px;
  font-family: 'Roboto';
`
export const Input = styled.input`
  color: ${props => (props.isDark ? '#cccccc' : '#212121')};
  padding: 7px;
  border: 0px;
  outline: none;
  width: 100%;
  font-weight: 500;
  background-color: ${props => (props.isDark ? 'transparent' : '#ffffff')};
`
export const SearchBtn = styled.button`
  background-color: ${props => (props.isDark ? '#383838' : '#f1f5f9')};
  width: 100px;
  border: 0px;
  border-left: 2px solid #cccccc;
  color: #606060;
  cursor: pointer;
  outline: none;
  padding: 5px;
`
export const FailCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  padding: 20px;
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
export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 5px;
  padding: 10px;
  border: 0px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
  font-weight: 600;
`
