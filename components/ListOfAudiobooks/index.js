import React from "react"
import { AudiobookCard } from "../AudiobookCard"

import { Container, Header, Total } from "./styles"

export const ListOfAudiobooks = ({ data }) => {
  return (
    <Container>
      <Header>
        <h1>Audiobooks</h1>
        <Total>
          <p>Total: {data.total}</p>
        </Total>
      </Header>
      {data.items.map((audiobook) => {
        return <AudiobookCard {...audiobook} />
      })}
    </Container>
  )
}
