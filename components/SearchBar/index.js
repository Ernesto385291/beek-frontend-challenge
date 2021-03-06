import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

import SearchContext from "../../context/SearchContext"

import { SearchComponent, Container, Button } from "./styles"

export const SearchBar = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const { searchData, setSearchData } = useContext(SearchContext)

  const onSubmit = ({ search }) => {
    toast.promise(
      axios({
        method: "GET",
        headers: {
          Authorization:
            "Bearer CFPAT-LBtveUvtDi7YjAhsyNzZURthngcrVnIr53eOZjYnxuc",
        },
        url: `https://api.contentful.com/spaces/1t4hjzo7y0kb/environments/master/entries?query=${search}&select=fields,sys.id&locale=es-MX&content_type=audiocontent-v12`,
      }).then((result) => {
        setSearchData(result.data)
      }),
      {
        loading: "Loading",
        success: "Showing results",
        error: "Error when deleting",
      }
    )
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <SearchComponent
        name="search"
        type="text"
        placeholder="Search"
        ref={register}
      />
      <Button type="submit" value="Search" />
      <Toaster />
    </Container>
  )
}
