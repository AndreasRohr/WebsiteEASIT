import * as React from "react"
import styled from "@emotion/styled";

const SectionContainer = ({ children, color, textcolor="black", id, height=95 }) => {

const SectionStyle = styled.div`
    background: ${color};
    color: ${textcolor};
    width: 100%;
    height: ${height}%;
`

const ContentContainer = styled.div`
    margin-inline: 3em;
    padding: 2em;
`

    return (
        <>
            <SectionStyle id={id}>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </SectionStyle>
        </>
    )
}

export default SectionContainer;