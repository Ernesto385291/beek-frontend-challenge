import styled from "styled-components"

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: #ececec;
  border-radius: 20px;
  padding: 1px 5px 1px 20px;
`

export const Button = styled.input`
  background-color: #36d7dc;
  color: #232529;
  font-size: 13px;
  font-weight: 500;
  padding: 0px 16px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 100ms;
`

export const SearchComponent = styled.input`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  height: 38px;
  border: 0;
  color: #232529;
  font-size: 14px;
  letter-spacing: 0.4px;
  font-weight: 400;
  width: 100%;
`
