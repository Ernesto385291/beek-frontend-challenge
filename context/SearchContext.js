import React, { useState } from "react"

const SearchContext = React.createContext({})

export const SearchContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null)

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext
