import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Container = styled.footer`
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 2rem;
`;

const Footer = () => (
    <Container style={{marginTop: `var(--space-5)`, fontSize: `var(--font-sm)`,}}>
        <div>
            © {new Date().getFullYear()} &middot; Powered by
            {` `}
            <a className="link"  href="https://www.teqly.ch">TEQLY GmbH</a>
        </div>
        <a><Link to="/legal_agb" className="link" activeClassName="active">AGB</Link></a>
        <a><Link to="/legal_dataprivacy" className="link" activeClassName="active">Datenschutzerklärung</Link></a>
        <a><Link to="/legal_imprint" className="link" activeClassName="active">Impressum</Link></a>
    </Container>
);

export default Footer;