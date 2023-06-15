import * as React from "react";
import styled from "@emotion/styled";
import { OutboundLink } from "gatsby-plugin-google-gtag";
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

const FooterSection = () => (
    <Container>
        <div>
            © {new Date().getFullYear()} &middot; Powered by
            {` `}
            <OutboundLink className="link"  href="https://www.teqly.ch">TEQLY GmbH</OutboundLink>
        </div>
        <Link to="/legal_agb" className="link" activeClassName="active">AGB</Link>
        <Link to="/legal_dataprivacy" className="link" activeClassName="active">Datenschutzerklärung</Link>
        <Link to="/legal_imprint" className="link" activeClassName="active">Impressum</Link>
    </Container>
);

export default FooterSection;
