import * as React from "react"
import styled from "@emotion/styled";

const SectionContainer = ({ children, color, textcolor="black" }) => {

const Containerstyle = styled.div`
    background: ${color};
    color: ${textcolor};
    width: 100%;
`
    return (
        <>
            <Containerstyle>{children}</Containerstyle>
        </>
    )
}

export default SectionContainer;