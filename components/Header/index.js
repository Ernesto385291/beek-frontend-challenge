import React from "react"
import Image from "next/image"

import { SearchBar } from "../SearchBar"

import { Navbar, Button } from "./styles"

export const Header = () => {
  return (
    <Navbar>
      <Image src="/logo_beek.svg" alt="Beek Logo" width={120} height={80} />
      <SearchBar />
      <Button>Add Audiocontent</Button>
    </Navbar>
  )
}
