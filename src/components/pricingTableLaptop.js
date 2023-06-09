import * as React from "react"
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

const Title = styled.h1`

  margin-top: 2rem;
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

const PricingTableLaptop = () => {

    return (

                <div id="section1" style={{textAlign:"center"}}>
                    <Title>Laptops</Title>
                    <Description>Mit unseren Laptops bist du in jeder Situation und überall produktiv!</Description>
                    <Table>
                        <Tr>
                            <TrSection1>Kategorie</TrSection1>
                            <TrSection2>Woche</TrSection2>
                            <TrSection3>Monat</TrSection3>
                            <TrSection3>Jahr</TrSection3>
                        </Tr>

                        <Tr>
                            <TrSection1><p className="text">Medium Performance</p><StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="mpl"/></TrSection1>
                            <ReactTooltip anchorSelect=".mpl" place="top" effect="solid">
                                <span>Alle Office Anwendungen</span>
                            </ReactTooltip>
                            <TrSection2> 49.95 CHF</TrSection2>
                            <TrSection3>149.95 CHF</TrSection3>
                            <TrSection3>543.95 CHF</TrSection3>
                        </Tr>

                        <Tr>
                            <TrSection1><p className="text">High Performance</p><StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="hpl"/></TrSection1>
                            <ReactTooltip anchorSelect=".hpl" place="top" effect="solid">
                                <span>Leistungsintensive Applikationen</span>
                            </ReactTooltip>
                            <TrSection2> 104.95 CHF</TrSection2>
                            <TrSection3>314.95CHF</TrSection3>
                            <TrSection3>1'129.95 CHF</TrSection3>
                        </Tr>

                        <Tr>
                            <TrSection1><p className="text">Extreme Performance</p><StaticImage src="../images/information.png" loading="eager" width={20} alt="info" className="epl"/></TrSection1>
                            <ReactTooltip anchorSelect=".epl" place="top" effect="solid">
                                <span>Grafik- und CAD Anwendungen</span>
                            </ReactTooltip>
                            <TrSection2> 164.95CHF</TrSection2>
                            <TrSection3>494.95 CHF</TrSection3>
                            <TrSection3>1'779.95 CHF</TrSection3>
                        </Tr>


                    </Table>

                    <p>Zubehör: Laptoptasche</p>
                </div>

    )
}

export default PricingTableLaptop