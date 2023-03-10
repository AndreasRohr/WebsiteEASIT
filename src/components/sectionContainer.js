import * as React from "react"
import styled from "@emotion/styled";

const SectionContainer = ({ children, color, textcolor="black", id }) => {

const Containerstyle = styled.div`
    background: ${color};
    color: ${textcolor};
    width: 100%;
`
    return (
        <>
            <Containerstyle id={id}>{children}</Containerstyle>
        </>
    )
}

export default SectionContainer;