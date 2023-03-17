import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.footer`
  text-align: center;
`;

const Footer = () => (
    <Container
        style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
        }}
    >
        © {new Date().getFullYear()} &middot; Presented by
        {` `}
        <a href="https://www.teqly.ch">TEQLY GmbH</a>
    </Container>
);

export default Footer;