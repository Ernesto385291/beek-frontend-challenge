import React from "react"
import { AudiobookCard } from "../AudiobookCard"

import { Container, Header, Total, Title } from "./styles"

export const ListOfAudiobooks = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>Audiobooks</Title>
        <Total>Total: {data.total}</Total>
      </Header>

      <div>
        {data.items.map((audiobook) => {
          return <AudiobookCard key={audiobook.sys.id} {...audiobook} />
        })}
      </div>
    </Container>
  )
}
