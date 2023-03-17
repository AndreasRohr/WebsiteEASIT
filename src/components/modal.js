import * as React from "react";
import styled from "@emotion/styled";
import Form from "./form";

const ModalPage = styled.div`
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const ModalContent = styled.div`
  position: fixed;
  text-align: center;
  margin: auto;
  background-color: white;
  width: 50%;
  top: 30vh;
  left: 25%;
`

const Modal = ({toggleModal}) => {

    return (
        <>
            <ModalPage>
                <ModalContent>
                    <Form/>
                    <a onClick={toggleModal}>Close</a>
                </ModalContent>
            </ModalPage>
        </>
    )
}

export default Modal;