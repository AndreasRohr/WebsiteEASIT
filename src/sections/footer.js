import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Container = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  font-size: var(--font-sm);
  
  .link{
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

  }
`;

const Footer = () => (
    <Container>
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
