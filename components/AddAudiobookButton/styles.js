import styled from "styled-components"

export const Button = styled.button`
  background-color: #36d7dc;
  color: #232529;
  font-size: 13px;
  width: 15%;
  font-weight: 500;
  padding: 0px 16px;
  height: 38px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 100ms;

  :hover {
    border: 1px solid #36d7dc;
    background-color: #fff;
  }
  /* @media (max-width: 1101px) {
    font-size: 12px;
    width: 13%;
    padding: 0px 13px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
    width: 15%;
    padding: 0px 13px;
  } */
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  margin: 0 0 4px;
  color: #1378f6;
  font-size: 14px;
  font-weight: 500;
`
export const Input = styled.input`
  border: 1px solid #c8c8c8;
  outline: none;
  border-radius: 25px;
  padding: 5px 10px;
  width: ${(props) => props.size || "90%"};
  font-size: 13px;
  color: #343434;
  ::placeholder {
    color: #aaaaaa;
  }
`
export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px 30px;
  margin-bottom: 10px;
`
export const TextError = styled.span`
  margin: 3px 0;
  color: #dd1b4d;
  font-size: 14px;
  font-weight: 500;
`
export const AnimationContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
