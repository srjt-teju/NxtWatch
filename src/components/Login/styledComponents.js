import styled from 'styled-components'

export const LoginCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  font-family: 'Roboto';
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: fit-content;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  border-radius: 5px;
  box-shadow: ${props => (props.isDark ? '0px' : '0px 4px 16px 0px #bfbfbf')};
  @media screen and (max-width: 768px) {
    padding: 20px;
    width: 80%;
  }
`

export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#64748b')};
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid #94a3b8;
  width: 400px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  outline: none;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${props => props.isDark && 'transparent'};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Button = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-weight: 600;
  margin-top: 40px;
`
export const CheckboxLabel = styled(Label)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
