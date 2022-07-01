import styled from 'styled-components'

export const MainformContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.toggle ? '#181818' : '#ffffff')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 3px black;
  padding: 35px;
  background-color: ${props => (props.toggle ? '#231f20' : '#ffffff')};
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 60px;
  margin-bottom: 12px;
`

export const LabelItem = styled.label`
  color: #475569;
  font-size: 15px;
  font-family: roboto;
  font-weight: 500;
  align-self: flex-start;
  margin-top: ${props => (props.MaiCheckboxHU ? '0px' : '10px')};
`

export const InputItem = styled.input`
  border: 1px solid #475569;
  border-radius: 3px;
  color: #475569;
  align-self: flex-start;
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  outline: none;
`

export const LoginBtn = styled.button`
  color: #ffffff;
  font-family: roboto;
  font-weight: 500;
  background-color: #3b82f6;
  border-radius: 5px;
  outline: none;
  border: none;
  align-self: stretch;
  padding: 10px;
  margin-top: 8px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: flex-start;
`
export const Notice = styled.p`
  color: red;
`
