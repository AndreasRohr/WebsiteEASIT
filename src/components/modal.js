import * as React from "react";
import styled from "@emotion/styled";
import Pill from "../components/pill";

const ModalContainer = styled.div`

`

const Modal = ({toggleModal}) => {

    return (
        <>
            <ModalContainer>
                <h1>Modal</h1>
                <p>Modal content</p>
                <Pill action={toggleModal}>Close</Pill>
            </ModalContainer>
        </>
    )
}

export default Modal;