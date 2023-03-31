import * as React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {StaticImage} from "gatsby-plugin-image";
import styled from "@emotion/styled";
import "../styles/carousel.css"

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
  height: 40rem;
`

const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`
const CarouselWrapper = styled.div`
margin-bottom: 4rem;
  margin-top: 6rem;
`
const MultiCarousel = () => (
<CarouselWrapper>
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
            src="../images/thinkpadE15.png"
            loading="eager"
            height={300}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Laptop with arrows"
            class = "desktopImage"
        />
            <Title>Laptops</Title>
            <Description>Unsere breite Auswahl an Lenovo ThinkPad Laptops von Medium Performance bis Extreme Performance, mit oder ohne Touch-Funktion. Finden Sie das perfekte Modell, das Ihren Anforderungen entspricht und steigern Sie Ihre Produktivität, wo immer Sie sind!</Description>
        </ItemWrapper>
        <ItemWrapper>
            <StaticImage
                placeholder= 'none'
                src="../images/DesktopPC.png"
                loading="eager"
                height={300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Laptop with arrows"
                class = "desktopImage"
            />
            <Title>Desktops</Title>
            <Description>Investieren Sie jetzt in einen leistungsstarken All-in-One-Desktop-Computer der Marken ASUS oder Lenovo, der speziell auf Ihre individuellen Anforderungen zugeschnitten ist. Mit unseren vielfältigen Modellen und Leistungsstufen finden Sie garantiert das passende Gerät für Ihren Bedarf! </Description>
        </ItemWrapper>
        <ItemWrapper>
            <StaticImage
                placeholder= 'none'
                src="../images/iPad.png"
                loading="eager"
                height={300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Laptop with arrows"
                class = "desktopImage"
            />
            <Title>Tablets</Title>
            <Description>Wir besitzen eine vielfältige Auswahl an Tablets in verschiedenen Modellen, Displaygrößen und Konnektivitätsoptionen (4G), um für jede Anforderung gerüstet zu sein. Wählen Sie das passende Modell für sich und genießen Sie die Vorteile eines mobilen und leistungsstarken Tablets! </Description>
        </ItemWrapper>

    </Carousel>
</CarouselWrapper>
)


export default MultiCarousel;