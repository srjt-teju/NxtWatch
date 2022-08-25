import styled from 'styled-components'

export const VideoCon = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 150vh;
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
  height: 130vh;
`
export const Heading = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  font-size: 20px;
  margin: 11px;
`
export const Head = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  font-size: 20px;
  margin: 11px;
`
export const Para = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : ' #64748b')};
  font-size: 16px;
  font-weight: 400;
  margin: 10px;
  font-family: 'Roboto';
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
export const CustomCon = styled.button`
  background-color: transparent;
  font-size: ${props => (props.isActive ? '500' : '')};
  border: 0px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;

  color: ${props => {
    if (props.isDark) {
      return props.isActive ? '#2563eb' : ' #64748b'
    }
    return props.isActive ? '#2563eb' : '#64748b'
  }};
`
export const IconCon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => {
    if (props.isDark) {
      return props.isActive ? '#2563eb' : ' #64748b'
    }
    return props.isActive ? '#2563eb' : '#64748b'
  }};
`
export const Break = styled.hr`
  color: ${props => (props.isDark ? '#94a3b8' : ' #e2e8f0')};
  padding: 0px;
  margin: 10px;
  margin-top: 20px;
`
export const CustomPara = styled(Para)`
  color: ${props => (props.isDark ? '' : '#616e7c')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-top: 25px;
`
