import React from "react"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

import { Option } from "./styles"

export const DeleteAudiobookButton = ({ id }) => {
  return (
    <>
      <Option
        onClick={() => {
          toast.promise(
            axios({
              method: "DELETE",
              headers: {
                Authorization:
                  "Bearer CFPAT-LBtveUvtDi7YjAhsyNzZURthngcrVnIr53eOZjYnxuc",
              },
              url: `https://api.contentful.com/spaces/1t4hjzo7y0kb/environments/master/entries/${id}`,
            }).then((result) => {
              location.reload()
            }),
            {
              loading: "Loading",
              success: "Refreshing",
              error: "Error when deleting",
            }
          )
        }}
      >
        Delete
      </Option>
      <Toaster />
    </>
  )
}
