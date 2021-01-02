import "../styles/globals.css"

import { SearchContextProvider } from "../context/SearchContext"

function MyApp({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  )
}

export default MyApp
