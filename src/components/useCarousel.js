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

const Title2 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: -6rem;
  margin-bottom: 2rem;
  

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

const Test = styled.div`
  

  `
const Test2 = styled.div`

  `
const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  min-height: 10rem;
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
const UseCarousel = () => (
    <CarouselWrapper>
        <Title2>Anwendungen</Title2>
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
                    src="../images/office.png"
                    loading="eager"
                    height={350}
                    width={500}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "carouselImage"
                />
                <Title>Arbeitsplätze</Title>
                <Description>Unsere Geräte eignen sich ideal für Unternehmen, die temporäre Mitarbeiter beschäftigen oder ihre Arbeitsumgebung flexibel gestalten möchten. Von Laptops für Remote-Arbeiter bis hin zu Desktops für temporäre Büroplätze bieten wir die passende Lösung für jeden Arbeitsplatzbedarf. </Description>
            </ItemWrapper>
            <ItemWrapper>
                <StaticImage
                    placeholder= 'none'
                    src="../images/lecture.png"
                    loading="eager"
                    height={350}
                    width={500}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "carouselImage"
                />
                <Title>Vorträge</Title>
                <Description>Bei Vorträgen ist es wichtig, dass Ihre Präsentation reibungslos abläuft. Unsere Mietgeräte ermöglichen es Ihnen, leistungsstarke Laptops oder Tablets zu nutzen, um Ihre Inhalte professionell und effektiv zu präsentieren. Sie können sich auf unsere zuverlässige Technologie verlassen, damit Ihr Vortrag einen bleibenden Eindruck hinterlässt.</Description>
            </ItemWrapper>
            <ItemWrapper>
                <StaticImage
                    placeholder= 'none'
                    src="../images/booth.png"
                    loading="eager"
                    height={350}
                    width={500}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "carouselImage"
                />
                <Title>Messen</Title>
                <Description>Auf Messen benötigen Sie möglicherweise Geräte für Produktpräsentationen, Datenmanagement und Kundeninteraktion. Unsere Mietlösungen bieten Ihnen die Möglichkeit, hochwertige Laptops, Tablets und Desktops für die Dauer der Messe zu nutzen und so einen professionellen Eindruck zu hinterlassen.</Description>
            </ItemWrapper>
            <ItemWrapper>
                <StaticImage
                    placeholder= 'none'
                    src="../images/store.png"
                    loading="eager"
                    height={350}
                    width={500}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "carouselImage"
                />
                <Title>Pop-Up Stores</Title>
                <Description>Wenn Sie einen temporären Laden eröffnen, bieten unsere Mietgeräte die perfekte Lösung. Von Kassensystemen und Tablets für Bestellungen bis hin zu leistungsstarken Desktops für digitale Beschilderungen ermöglichen wir es Ihnen, Ihre Pop-up-Store-Erfahrung mit modernster Technologie zu verbessern.</Description>
            </ItemWrapper>

            <ItemWrapper>
                <Test>


                <StaticImage
                    placeholder= 'none'
                    src="../images/festival.png"
                    loading="eager"
                    height={350}
                    width={500}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Laptop with arrows"
                    class = "carouselImage"
                />
                </Test>
                <Test2>
                <Title>Festivals</Title>
                <Description>Auf Festivals ist eine zuverlässige Technologie unerlässlich. Unsere Mietgeräte ermöglichen es Festivalveranstaltern, temporäre Arbeitsbereiche einzurichten, um den reibungslosen Ablauf von Ticketing-Systemen, Verkaufsstellen oder sogar Live-Streaming-Diensten sicherzustellen.</Description>
                </Test2>
                </ItemWrapper>

            <ItemWrapper>
                <Test>


                    <StaticImage
                        placeholder= 'none'
                        src="../images/homeoffice.png"
                        loading="eager"
                        height={350}
                        width={500}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Laptop with arrows"
                        class = "carouselImage"
                    />
                </Test>
                <Test2>
                    <Title>Home-Office</Title>
                    <Description>Mit unseren Mietgeräten können Sie Ihr Home-Office optimal ausstatten. Egal, ob Sie einen Laptop, einen Desktop oder ein Tablet benötigen, unsere flexiblen Mietlösungen ermöglichen es Ihnen, produktiv von zu Hause aus zu arbeiten.</Description>
                </Test2>
            </ItemWrapper>


            <ItemWrapper>
                <Test>


                    <StaticImage
                        placeholder= 'none'
                        src="../images/workshop.png"
                        loading="eager"
                        height={350}
                        width={500}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Laptop with arrows"
                        class = "carouselImage"
                    />
                </Test>
                <Test2>
                    <Title>Schulungen</Title>
                    <Description>Für Schulungsveranstaltungen bieten wir die ideale Lösung. Unsere Mietgeräte unterstützen Sie dabei, Schulungsteilnehmern Laptops oder Tablets zur Verfügung zu stellen, um interaktive Lerninhalte bereitzustellen und eine effektive Schulungsumgebung zu schaffen.</Description>
                </Test2>
            </ItemWrapper>

            <ItemWrapper>
                <Test>


                    <StaticImage
                        placeholder= 'none'
                        src="../images/startup.png"
                        loading="eager"
                        height={350}
                        width={500}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="Laptop with arrows"
                        class = "carouselImage"
                    />
                </Test>
                <Test2>
                    <Title>Start-Ups</Title>
                    <Description>Für Start-ups mit begrenztem Budget sind Mietgeräte eine kosteneffektive Lösung. Von der Produktentwicklung bis zur Gründungsphase ermöglichen unsere Mietlösungen Start-ups den Zugang zu erstklassiger Technologie, um ihre Ideen umzusetzen und ihr Geschäftswachstum voranzutreiben.</Description>
                </Test2>
            </ItemWrapper>

        </Carousel>
    </CarouselWrapper>
)


export default UseCarousel;