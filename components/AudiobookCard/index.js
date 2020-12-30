import React from "react"
import Image from "next/image"
import { MdEdit, MdDelete } from "react-icons/md"
import { GoVerified } from "react-icons/go"

import {
  Container,
  Details,
  Content,
  Title,
  Author,
  ImageContainer,
  Options,
  OptionButton,
} from "./styles"

export const AudiobookCard = ({ fields, sys }) => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image
            src={fields.cover["es-MX"]}
            alt={fields.title["es-MX"]}
            width={60}
            height={60}
            objectFit="cover"
          />
        </ImageContainer>
        <Details>
          <Title>
            {fields.title["es-MX"]}
            {fields.is_original["es-MX"] ? (
              <GoVerified style={{ marginLeft: 10 }} />
            ) : null}
          </Title>
          <div>
            <Author>{fields.authors["es-MX"]}</Author>
            <Author>{fields.narrators["es-MX"]}</Author>
          </div>
        </Details>
      </Content>
      <Options>
        <OptionButton Color="#287EF6">
          Edit
          <MdEdit />
        </OptionButton>
        <OptionButton Color="#EE5152">
          Delete
          <MdDelete />
        </OptionButton>
      </Options>
    </Container>
  )
}
