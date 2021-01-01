import React from "react"
import Image from "next/image"

import { SearchBar } from "../SearchBar"
import { AddAudiobookButton } from "../AddAudiobookButton"

import { Navbar } from "./styles"

export const Header = () => {
  return (
    <Navbar>
      <Image src="/logo_beek.svg" alt="Beek Logo" width={120} height={80} />
      <SearchBar />
      <AddAudiobookButton />
    </Navbar>
  )
}
