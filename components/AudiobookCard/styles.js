import styled from "styled-components"

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 15px;
`

export const Content = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  img {
    border-radius: 10px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Title = styled.h4`
  margin: 0;
  padding: 0;
  color: #262626;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
`

export const Author = styled.p`
  color: #898a8c;
  font-size: 12px;
  margin: 0;
  font-weight: 400;
`
export const Options = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
export const OptionButton = styled.button`
  background-color: ${(props) => props.Color};
  border: none;
  outline: none;
  color: #fff;
  border-radius: 25px;
  font-size: 15px;
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
