import * as React from "react"
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";

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
`

const Td = styled.td`
    border: 1px solid #ddd;
    text-align: left;
    padding: 16px;
`

const Calculator = () => {

    const [open, setOpen] = React.useState(false);
    const [years, setYears] = React.useState(false);
    const [prices, setPrices] = React.useState([393, 150, 50]);

    const toggle = () => {
        open ? setOpen(false) : setOpen(true);
        years ? setYears(false) : setYears(true);
        years ? setPrices([393, 150, 50]) : setPrices([393 * 3, 150, 50]);
    }

    return (
        <>
            <Button onClick={toggle} disabled={years}>1 Jahr</Button>
            <Button onClick={toggle} disabled={!years}>3 Jahre</Button>
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
                        src="../images/Check.png"
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
                        src="../images/Check.png"
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
                        src="../images/Check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></Td>
                </tr>
                <tr>
                    <Td>Total</Td>
                    <Td>{prices.reduce((partialSum, a) => partialSum + a, 0)}.-</Td>
                    <Td>535.-</Td>
                    <Td>pro Jahr</Td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Calculator