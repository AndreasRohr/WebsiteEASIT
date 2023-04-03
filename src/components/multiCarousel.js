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
  height: 41rem;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    height: 40rem;
  }
  
  
`

const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`
const CarouselWrapper = styled.div`
margin-bottom: 4rem;
  margin-top: 6rem;
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: 0;
  }
`
const MultiCarousel = () => (
<CarouselWrapper>
    <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
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
            class = "carouselImage"
        />
            <Title>Laptops</Title>
            <Description>Wir haben eine breite Auswahl an Modellen in unserem Sortiment. Von Laptops für die klassische Büroarbeit bis hin zu CAD-Rechenmaschinen ist alles dabei. Alle Laptops kommen mit einer Hülle oder Tasche und verfügen über einen Zahlenblock, damit du noch produktiver sein kannst! </Description>
        </ItemWrapper>
        <ItemWrapper>
            <StaticImage
                placeholder= 'none'
                src="../images/lenovo_ideapad.webp"
                loading="eager"
                height={300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Laptop with arrows"
                class = "carouselImage"
            />
            <Title>Touch Laptops</Title>
            <Description>Tablet oder Laptop? Du musst dich nicht entscheiden und kannst beides in einem Gerät haben! Dank unseren Laptops mit Touchscreen kannst du das Beste aus zwei Welten nutzen. So wird das Notizen schreiben und Dokumente kommentieren zum Kinderspiel.</Description>
        </ItemWrapper>
        <ItemWrapper>
            <StaticImage
                placeholder= 'none'
                src="../images/lenovo_ideacenter.webp"
                loading="eager"
                height={300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Laptop with arrows"
                class = "carouselImage"
            />
            <Title>Desktops</Title>
            <Description>Du brauchst kein mobiles Laptop und arbeitest lieber an einem grossen Bildschirm? Dann sind unsere All-In-One Desktops die richtige Lösung für dich! Die leistungsstarken und schlichten Geräte sind perfekt für den Büroalltag geeignet. Alle unsere Desktops kommen natürlich mit einer Kabellosen Maus und Tastatur, so dass dein Pult nie im Kabelsalat versinkt.</Description>
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
                class = "carouselImage"
            />
            <Title>Tablets</Title>
            <Description>Unsere Tablets sind die perfekten begleiter für Unterwegs! Dank der mitgelieferten Tastaturhülle bist du noch produktiver und zum Schutz des Displays verfügen alle unsere Tablets über ein Panzerglas. Wenn du auch unterwegs immer online sein möchtest bieten wir auch iPads mit 4G Modul an, bei diesen Geräten ist auch immer eine Internet Flatrate dabei, so dass du so viel surfen kannst wie du möchtest.</Description>
        </ItemWrapper>

    </Carousel>
</CarouselWrapper>
)


export default MultiCarousel;