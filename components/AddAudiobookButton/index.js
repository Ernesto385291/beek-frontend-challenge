import React, { useState } from "react"

import { useForm } from "react-hook-form"
import axios from "axios"
import ReactLoading from "react-loading"
import toast, { Toaster } from "react-hot-toast"

import Modal from "../../utils/Modal"

import {
  Button,
  Label,
  InputContainer,
  Inputs,
  Input,
  TextError,
  AnimationContainer,
} from "./styles"

export const AddAudiobookButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data) => {
    const body = {
      fields: {
        title: {
          "es-MX": data.title,
        },
        is_original: {
          "es-MX": data.is_original,
        },
        street_date: {
          "es-MX": data.street_date,
        },
        cost_per_play: {
          "es-MX": parseInt(data.cost_per_play),
        },
        authors: {
          "es-MX": [data.authors],
        },
        narrators: {
          "es-MX": [data.narrators],
        },
        duration: {
          "es-MX": parseInt(data.duration),
        },
        cover: {
          "es-MX": data.cover,
        },
      },
    }
    setLoading(true)
    axios({
      method: "POST",
      headers: {
        Authorization:
          "Bearer CFPAT-LBtveUvtDi7YjAhsyNzZURthngcrVnIr53eOZjYnxuc",
        "X-Contentful-Content-Type": "audiocontent-v12",
      },
      url:
        "https://api.contentful.com/spaces/1t4hjzo7y0kb/environments/master/entries",
      data: body,
    })
      .then((result) => {
        toast.loading("Refreshing...")
        setLoading(false)
        setIsOpen(false)
        location.reload()
      })
      .catch((error) => {
        setLoading(false)
        alert("Error")
      })
  }

  return (
    <>
      <Toaster />
      <Button onClick={() => setIsOpen(true)}>Add Audiocontent</Button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        {isLoading ? (
          <AnimationContainer>
            <ReactLoading type="spin" color="#36D7DC" height={50} width={50} />
          </AnimationContainer>
        ) : null}
        <form style={{ padding: 20 }} onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <InputContainer>
              <Label>Title</Label>
              <Input
                ref={register({ required: true })}
                name="title"
                placeholder="Title"
                type="text"
              />
              {errors.title && <TextError>This field is required</TextError>}
            </InputContainer>
            <InputContainer>
              <Label>Original</Label>
              <Input
                ref={register}
                name="is_original"
                type="checkbox"
                size="5%"
              />
            </InputContainer>
            <InputContainer>
              <Label>Street date</Label>
              <Input
                ref={register({ required: true })}
                name="street_date"
                type="date"
                size="50%"
              />
              {errors.street_date && (
                <TextError>This field is required</TextError>
              )}
            </InputContainer>
            <InputContainer>
              <Label>Cost per play</Label>
              <Input
                ref={register({ required: true })}
                name="cost_per_play"
                size="50%"
                placeholder="0.0"
                type="number"
                step="any"
              />
              {errors.cost_per_play && (
                <TextError>This field is required</TextError>
              )}
            </InputContainer>
            <InputContainer>
              <Label>Authors</Label>
              <Input
                ref={register({ required: true })}
                name="authors"
                placeholder="Author, Author"
                type="text"
              />
              {errors.authors && <TextError>This field is required</TextError>}
            </InputContainer>
            <InputContainer>
              <Label>Narrators</Label>
              <Input
                ref={register({ required: true })}
                name="narrators"
                placeholder="Narrator, Narrator"
                type="text"
              />
              {errors.narrators && (
                <TextError>This field is required</TextError>
              )}
            </InputContainer>
            <InputContainer>
              <Label>Duration (In seconds)</Label>
              <Input
                ref={register({ required: true })}
                name="duration"
                size="50%"
                placeholder="00"
                type="number"
                step="any"
              />
              {errors.duration && <TextError>This field is required</TextError>}
            </InputContainer>
            <InputContainer>
              <Label>Cover</Label>
              <Input
                ref={register({ required: true })}
                name="cover"
                placeholder="https://your-url.com"
                type="url"
              />
              {errors.cover && <TextError>This field is required</TextError>}
            </InputContainer>
          </Inputs>
          <Button type="submit">Upload</Button>
        </form>
      </Modal>
    </>
  )
}
