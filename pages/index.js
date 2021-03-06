import Head from "next/head"

//Components
import { Header } from "../components/Header"
import { ListOfAudiobooks } from "../components/ListOfAudiobooks"

export const getServerSideProps = async () => {
  // Call an external API endpoint to get audiobooks.
  const res = await fetch(
    "https://api.contentful.com/spaces/1t4hjzo7y0kb/environments/master/entries?select=fields,sys.id,sys.version&locale=es-MX&content_type=audiocontent-v12",
    {
      method: "get",
      headers: new Headers({
        Authorization:
          "Bearer CFPAT-LBtveUvtDi7YjAhsyNzZURthngcrVnIr53eOZjYnxuc ",
      }),
    }
  )
  const audiobooks = await res.json()

  return {
    props: {
      audiobooks,
    },
  }
}

export default function Home({ audiobooks }) {
  return (
    <div>
      <Head>
        <title>Beek Frontend Challenge</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <ListOfAudiobooks data={audiobooks} />
    </div>
  )
}
