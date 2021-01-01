import styled from "styled-components"
import { BsThreeDotsVertical } from "react-icons/bs"

export const Container = styled.div`
  border-bottom: 1px solid #edeef2;
  display: grid;
  grid-template-columns: 5% 50% 20% 20% 5%;
  grid-template-rows: 48px;
  grid-column-gap: 10px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 2px;
    object-fit: cover;
  }
`

export const Title = styled.h4`
  margin: 0;
  padding: 0;
  color: #262626;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Name = styled.p`
  color: #aaaaaa;
  font-size: 14px;
  margin: 0;
`

export const OptionsIcon = styled(BsThreeDotsVertical)`
  cursor: pointer;
`
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #aaaaaa;
`

export const Option = styled.p`
  margin: 5px 0px;
  cursor: pointer;
  color: ${(props) => props.color || "#262626"};
`
