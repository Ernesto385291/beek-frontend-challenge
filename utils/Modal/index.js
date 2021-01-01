import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`
const ModalContainer = styled.div`
  width: 60%;
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  transform: translate(-50%, -50%); //  ----.
  border-radius: 12px;
`

const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`

const Modal = ({ handleClose, children, isOpen }) => {
  if (isOpen) {
    return (
      <Overlay>
        <ModalContainer>
          <CloseButton
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.39 20.39"
          >
            <title>close</title>
            <line
              x1="19.39"
              y1="19.39"
              x2="1"
              y2="1"
              fill="none"
              stroke="#5c3aff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="19.39"
              x2="19.39"
              y2="1"
              fill="none"
              stroke="#5c3aff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </CloseButton>
          {children}
        </ModalContainer>
      </Overlay>
    )
  } else {
    return <></>
  }
}

export default Modal
