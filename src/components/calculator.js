import * as React from "react"
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";
import Pill from "../components/pill";
import Modal from "../components/modal";

const Button = styled.button`
  background: #dd356e;
  :disabled {
    background: white;
  }
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #ddd;
    margin-bottom: 1.5rem;
`

const Td = styled.td`
    border: 1px solid #ddd;
    text-align: center;
    padding: 16px;
`

const Calculator = () => {

    const [years, setYears] = React.useState(false);
    const [prices, setPrices] = React.useState([393, 150, 50]);
    const [modal, setModal] = React.useState(false);

    const toggleYears = () => {
        years ? setYears(false) : setYears(true);
        years ? setPrices([393, 150, 50]) : setPrices([393 * 3, 150, 50]);
    }

    const toggleModal = () => {
        modal ? setModal(false) : setModal(true);
        console.log(modal)
    }

    return (
        <>
            <Button onClick={toggleYears} disabled={years}>1 Jahr</Button>
            <Button onClick={toggleYears} disabled={!years}>3 Jahre</Button>
            {modal && <Modal toggleModal={toggleModal}/>}
            <Table>
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ohne EASIT</th>
                    <th>mit EASIT</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td>Anschaffungskosten</Td>
                    <Td>{prices[0]}.-</Td>
                    <Td><StaticImage
                        src="../images/check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></Td>
                </tr>
                <tr>
                    <Td>Setup</Td>
                    <Td>50.-</Td>
                    <Td><StaticImage
                        src="../images/check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></Td>
                </tr>
                <tr>
                    <Td>Support</Td>
                    <Td>{prices[1]}.-</Td>
                    <Td><StaticImage
                        src="../images/check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></Td>
                </tr>
                <tr>
                    <Td>Total</Td>
                    <Td>{prices.reduce((partialSum, a) => partialSum + a, 0)}.-</Td>
                    <Td><Pill action={toggleModal}>Angebot erhalten</Pill></Td>
                </tr>
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th><h2>Ausserdem mit EASIT</h2></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <Td><StaticImage
                        src="../images/check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></Td>
                    <Td>Ausfallsicherheit</Td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Calculator