import * as React from "react"
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import Pill from "../components/pill";
import Modal from "../components/modal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { navigate } from "gatsby";

const Button1 = styled.button`
font-size: 1.5rem;
font-weight: bold;
width: 10rem;
height: 3rem;
border: 2px solid grey;
border-right: none;
border-bottom-left-radius: 1rem;
border-top-left-radius: 1rem;
background: white;
  :disabled {
    background: #dd356e;
    color: white;
    border: none;
  }
`

const Button2 = styled.button`
font-size: 1.5rem;
font-weight: bold;
width: 10rem;
height: 3rem;
border: 2px solid grey;
border-left: none;
border-bottom-right-radius: 1rem;
border-top-right-radius: 1rem;
  background: white;
  :disabled {
    background: #dd356e;
    color: white;
    border: none;
  }
`

const Table = styled.table`
  width: 65%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid #ddd;
  margin: auto auto 1.5rem;
  border-radius: 0.5rem;
  border-collapse: separate !important;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
`

const Tr = styled.tr`
 display: flex;
    border: 2px solid #ddd;
    height: 6rem;
    border-bottom: none;
    border-top: none;
    
     &:last-child {
    border-bottom-left-radius: 0.5rem;
   border-bottom-right-radius: 0.5rem;
   
  }
  
       &:nth-child(n+3):last-child {
   font-weight: bold;
   background-color: #dd356e!important;
   color: white!important;
  }
  
      &:first-child {
   border: none;
   height: 3rem;
   margin-bottom: 1rem;
  
  }
  
  
   &:nth-child(2) {
   border-top-left-radius: 0.5rem;
   border-top-right-radius: 0.5rem;
   border-top: 2px solid #ddd;
  }
  
  &:nth-child(n+2):nth-child(odd){
  background-color: #F3F4F7;
  }
`

const TrSection1 = styled.div`
width: 50%;
min-width: 42%;
height: 6rem;
margin-left: 1.5rem;
display: flex;
align-items:center;
font-size: 1.5rem;
    white-space: nowrap;
  .text{
    margin-right: 0.5rem;
  }
`
const TrSection2 = styled.div`
width: 20%;
height: 6rem;
margin-left: 3rem;
display: flex;
align-items:center;
justify-content:center;
font-size: 1.5rem;
    white-space: nowrap;

`
const TrSection3 = styled.div`
font-size: 1.5rem;
width: 20%;
height: 6rem;
margin-left: 3rem;
display: flex;
align-items:center;
justify-content:center;
    white-space: nowrap;

`

const RequestSection = styled.div`
margin-top: 3rem;


.cardsPill{
margin-left: 1rem;
margin-right: 1rem;
}

.buttonWrapper{
      display: flex;
  justify-content: center;
    }
`

const Calculator = () => {

    const [years, setYears] = React.useState(true);
    const [prices, setPrices] = React.useState([1179.00, 150.00, 150.00]);
    const [pricestotal, setPricestotal] = React.useState([534.95]);
    const [modal, setModal] = React.useState(false);

    const toggleYears = () => {
        years ? setYears(false) : setYears(true);
        years ? setPrices([1179.00, 150.00, 450.00]) : setPrices([1179.00, 150.00, 150.00]);
        years ? setPricestotal([1604.85] ): setPricestotal([534.95]);
    }

    const toggleModal = () => {
        modal ? setModal(false) : setModal(true);
        console.log(modal)
    }

    const goToContactPage = () => {
      navigate("/contact");
    }

    return (
        <>
            <RequestSection>
                <div className={"buttonWrapper"}>
            <Button1 onClick={toggleYears} disabled={years}>1 Jahr</Button1>
            <Button2 onClick={toggleYears} disabled={!years}>3 Jahre</Button2>
                </div>
            </RequestSection>
            {modal && <Modal toggleModal={toggleModal}/>}
           {
               <Table>

                   <Tr>
                       <TrSection1></TrSection1>
                       <TrSection2>Kauf</TrSection2>
                       <TrSection3><StaticImage
                           placeholder= 'none'
                           src="../images/EASIT-Logo-slim.png"
                           loading="eager"
                           width={80}
                           quality={95}
                           formats={["auto", "webp", "avif"]}
                           alt="EASIT Logo"
                           className="easit-logo"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                     <TrSection1><p className="text">Anschaffung</p><StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="anschaffung"/></TrSection1>
                     <ReactTooltip anchorSelect=".anschaffung" place="top" effect="solid">
                       <span>Für einen Laptop aus einer Business Linie mit Intel i7 Prozessor & 16GB RAM</span>
                     </ReactTooltip>
                     <TrSection2>{prices[0]} CHF</TrSection2>
                     <TrSection3><StaticImage
                         src="../images/check.png"
                         loading="eager"
                         width={50}
                         formats={["auto", "webp", "avif"]}
                         alt="Checkmark"
                     /></TrSection3>
                   </Tr>

                   <Tr>
                       <TrSection1>Setup</TrSection1>
                       <TrSection2>{prices[1]} CHF</TrSection2>
                       <TrSection3><StaticImage
                           src="../images/check.png"
                           loading="eager"
                           width={50}
                           formats={["auto", "webp", "avif"]}
                           alt="Checkmark"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                       <TrSection1>Support</TrSection1>
                       <TrSection2>{prices[2]} CHF</TrSection2>
                       <TrSection3><StaticImage
                           src="../images/check.png"
                           loading="eager"
                           width={50}
                           formats={["auto", "webp", "avif"]}
                           alt="Checkmark"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                     <TrSection1><p className="text">Gerätemanagement</p>  <StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="geraetemanagement"/></TrSection1>
                       <ReactTooltip anchorSelect=".geraetemanagement" place="top" effect="solid">
                         <span>Wir kümmern uns um die Wartung und das Update der Geräte</span>
                       </ReactTooltip>
                       <TrSection2>-</TrSection2>
                       <TrSection3><StaticImage
                           src="../images/check.png"
                           loading="eager"
                           width={50}
                           formats={["auto", "webp", "avif"]}
                           alt="Checkmark"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                       <TrSection1>Updatemanagement</TrSection1>
                       <TrSection2>-</TrSection2>
                       <TrSection3><StaticImage
                           src="../images/check.png"
                           loading="eager"
                           width={50}
                           formats={["auto", "webp", "avif"]}
                           alt="Checkmark"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                       <TrSection1>Gratis Ersatzgerät</TrSection1>
                       <TrSection2>-</TrSection2>
                       <TrSection3><StaticImage
                           src="../images/check.png"
                           loading="eager"
                           width={50}
                           formats={["auto", "webp", "avif"]}
                           alt="Checkmark"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                       <TrSection1>Vieles Mehr</TrSection1>
                       <TrSection2>-</TrSection2>
                       <TrSection3><StaticImage
                           src="../images/check.png"
                           loading="eager"
                           width={50}
                           formats={["auto", "webp", "avif"]}
                           alt="Checkmark"
                       /></TrSection3>
                   </Tr>

                   <Tr>
                       <TrSection1>Total</TrSection1>
                       <TrSection2>{prices.reduce((partialSum, a) => partialSum + a , 0)} CHF</TrSection2>
                       <TrSection3>ab {pricestotal[0]} CHF</TrSection3>
                   </Tr>

               </Table>}

           <RequestSection>
               <div className={"buttonWrapper"}>
               <Pill action={goToContactPage} className="cardsPill">Jetzt kontaktieren</Pill>
               <Pill action={toggleModal} className="cardsPill">Preisübersicht erhalten</Pill>
               </div>
           </RequestSection>
        </>
    )
}

export default Calculator