import React from 'react';
import { Link } from 'react-scroll';
import styled from "@emotion/styled";

const Ul = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 14rem;
  color: #f7c2d4;
  font-size: 1.5rem;
  text-align: center;
  

  .linkText {
    &:hover {
      color: white;
      cursor: pointer;
    }
  }

  &.active {
    .linkText {
      color: white;
    }
  }
`;


const Nav = styled.nav`
background-color: #dd356e;
display: flex;
justify-content: center;
`

const ScrollComponent = ({title1, title2, title3, title4}) => {
    return (
        <Nav>
            <Ul>
                <LinkWrapper>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="linkText"
                    >
                        {title1}
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="linkText"
                    >
                        {title2}
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="linkText"
                    >
                        {title3}
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="linkText"
                    >
                        {title4}
                    </Link>
                </LinkWrapper>
            </Ul>
        </Nav>
    );
};


export default ScrollComponent;
