import React, { useState } from "react"
import { GoVerified } from "react-icons/go"

import { DeleteAudiobookButton } from "../DeleteAudiobookButton"
import { EditAudiobookButton } from "../EditAudiobookButton"

import {
  Container,
  ImageContainer,
  Title,
  InformationContainer,
  Name,
  OptionsIcon,
  Options,
  Option,
} from "./styles"

export const AudiobookCard = ({ fields, sys }) => {
  const [options, setOptions] = useState(false)

  return (
    <Container>
      <ImageContainer>
        <img
          src={fields.cover["es-MX"]}
          alt={fields.title["es-MX"]}
          width={35}
          height={35}
          loading="lazy"
        />
      </ImageContainer>
      <Title>
        {fields.title["es-MX"]}
        {fields.is_original["es-MX"] ? (
          <GoVerified style={{ marginLeft: 5 }} />
        ) : null}
      </Title>

      <InformationContainer>
        {fields.authors["es-MX"].map((author, index) => (
          <Name key={index}>{author}</Name>
        ))}
      </InformationContainer>

      <InformationContainer>
        {fields.narrators["es-MX"].map((narrator, index) => (
          <Name key={index}>{narrator}</Name>
        ))}
      </InformationContainer>

      <div>
        <OptionsIcon onClick={() => setOptions(!options)} size={19} />
        {options ? (
          <Options>
            <EditAudiobookButton fields={fields} sys={sys} />
            <DeleteAudiobookButton {...sys} />
          </Options>
        ) : null}
      </div>
    </Container>
  )
}
