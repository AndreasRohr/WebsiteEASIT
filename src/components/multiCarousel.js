import * as React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {StaticImage} from "gatsby-plugin-image";
import styled from "@emotion/styled";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Title = styled.h1`
    text-align: center;
  margin-top: 1rem;
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center; /* centers items horizontally */
  align-items: center; /* centers items vertically */
  flex-direction: column;
  margin: 2rem 1rem 4rem;
  border: 1px solid lightgrey;
  padding: 2rem;
  border-radius: 8px;
`

const Description = styled.p`
margin-top: 1rem;
  margin-bottom: 1rem;
`

const MultiCarousel = () => (
    <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
    >
        <ItemWrapper>
        <StaticImage
            placeholder= 'none'
            src="../images/laptop-arrows.png"
            loading="eager"
            height={300}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Laptop with arrows"
            class = "desktopImage"
        />
            <Title>Laptops</Title>
            <Description>LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET. LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET. LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET.</Description>
        </ItemWrapper>
        <ItemWrapper>
            <StaticImage
                placeholder= 'none'
                src="../images/laptop-arrows.png"
                loading="eager"
                height={300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Laptop with arrows"
                class = "desktopImage"
            />
            <Title>Desktops</Title>
            <Description>LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET. LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET. LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET.</Description>
        </ItemWrapper>
        <ItemWrapper>
            <StaticImage
                placeholder= 'none'
                src="../images/laptop-arrows.png"
                loading="eager"
                height={300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Laptop with arrows"
                class = "desktopImage"
            />
            <Title>Tablets</Title>
            <Description>LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET. LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET. LOREM IPSUM DOLOR SI AMET, LOREM IPSUM DOLOR SI AMET.</Description>
        </ItemWrapper>
    </Carousel>
)


export default MultiCarousel;