import React, { useContext } from "react"
import { AudiobookCard } from "../AudiobookCard"

import { Container, Header, Total, Title } from "./styles"
import SearchContext from "../../context/SearchContext"

export const ListOfAudiobooks = ({ data }) => {
  const { searchData, setSearchData } = useContext(SearchContext)
  return (
    <Container>
      <Header>
        <Title>Audiobooks</Title>
        <Total>Total: {data.total}</Total>
      </Header>

      <div>
        {searchData
          ? searchData.items.map((audiobook) => {
              return <AudiobookCard key={audiobook.sys.id} {...audiobook} />
            })
          : data.items.map((audiobook) => {
              return <AudiobookCard key={audiobook.sys.id} {...audiobook} />
            })}
      </div>
    </Container>
  )
}
