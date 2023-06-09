import * as React from "react"
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import Pill from "../components/pill";
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
  color: black;
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
  color: black;
  background: white;
  :disabled {
    background: #dd356e;
    color: white;
    border: none;
  }
`

const Title = styled.h1`
    
    margin-top: 4rem;
  `
const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  `
const Table = styled.table`
  width: 65%;
  border-spacing: 0;
  border: 2px solid #ddd;
  margin: auto auto 1.5rem;
  border-radius: 0.5rem;
  border-collapse: separate;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  display: inline-block;
    width: 97%;
  }
`

const Tr = styled.tr`
  
 
 display: flex;
    border: 2px solid #ddd;
    height: 6rem;
    border-bottom: none;
    border-top: none;




  @media (max-width: 768px) {
   height: 4rem;
    .kauf-title{
      font-size: 1rem;
    }
    .easit-logo{
      min-width: 4rem;
    }
  }

    
     &:last-child {
    border-bottom-left-radius: 0.5rem;
   border-bottom-right-radius: 0.5rem;
   
  }
  
       &:nth-child(n+3):last-child {



         @media (max-width: 768px) {
           min-width: 100%;
           .css-1kofyew {
             font-size: 1rem;
           }

           .css-fsgl7x {
             font-size: 0.8rem;
             margin-right: 10px;
             white-space: nowrap;
           }
         }
         
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 4rem;
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: -1.5rem;
    margin-right: 2.5rem;
    height: 4rem;
    
    
    
  }


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
  

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 35px;
    margin-left: 0;
    height: 4rem;
  }

`

const RequestSection = styled.div`
margin-top: 3rem;
  margin-bottom: 4rem;


.cardsPill{
margin-left: 1rem;
margin-right: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
}

.buttonWrapperBottom{
      display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
    }

  .buttonWrapperTop{
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
     margin-bottom: -2.5rem;
    }
  }
`

const PricingTableLaptopTouch = () => {

    return (

        <div id="section2" style={{textAlign:"center"}}>
            <Title>Laptop Touch</Title>
            <Description>Schnell eine Handnotiz in ein Dokument machen, aber doch gerne am Laptop tippen? Kein
                Problem mit unseren Hybrid Laptops mit Touchscreen!</Description>
            <Table>
                <Tr>
                    <TrSection1>Kategorie</TrSection1>
                    <TrSection2>Woche</TrSection2>
                    <TrSection3>Monat</TrSection3>
                    <TrSection3>Jahr</TrSection3>
                </Tr>

                <Tr>
                    <TrSection1><p className="text">Medium Performance</p><StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="mplt"/></TrSection1>
                    <ReactTooltip anchorSelect=".mplt" place="top" effect="solid">
                        <span>Alle Office Anwendungen</span>
                    </ReactTooltip>
                    <TrSection2> 74.95 CHF</TrSection2>
                    <TrSection3>229.95 CHF</TrSection3>
                    <TrSection3>804.95 CHF</TrSection3>
                </Tr>

                <Tr>
                    <TrSection1><p className="text">High Performance</p><StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="hplt"/></TrSection1>
                    <ReactTooltip anchorSelect=".hplt" place="top" effect="solid">
                        <span>Leistungsintensive Applikationen</span>
                    </ReactTooltip>
                    <TrSection2> 114.95 CHF</TrSection2>
                    <TrSection3>344.95CHF</TrSection3>
                    <TrSection3>1'239.95CHF</TrSection3>
                </Tr>

            </Table>

            <p>Zubehör: Laptoptasche & Stift</p>
        </div>




    )
}

export default PricingTableLaptopTouch