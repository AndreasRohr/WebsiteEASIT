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
  
`

const Calculator = () => {

    const [open, setOpen] = React.useState(false);
    const [years, setYears] = React.useState(false);
    const [prices, setPrices] = React.useState([393, 150, 50]);

    const toggle = () => {
        open ? setOpen(false) : setOpen(true);
        years ? setYears(false) : setYears(true);
        years ? setPrices([393, 150, 50]) : setPrices([393 * 3, 150 * 3, 50]);
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
                    <td>Abschreibung</td>
                    <td>{prices[0]}.-</td>
                    <td><StaticImage
                        src="../images/Check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></td>
                </tr>
                <tr>
                    <td>Setup</td>
                    <td>50.-</td>
                    <td><StaticImage
                        src="../images/Check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></td>
                </tr>
                <tr>
                    <td>Support</td>
                    <td>{prices[1]}.-</td>
                    <td><StaticImage
                        src="../images/Check.png"
                        loading="eager"
                        width={50}
                        formats={["auto", "webp", "avif"]}
                        alt="Checkmark"
                    /></td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{prices.reduce((partialSum, a) => partialSum + a, 0)}.-</td>
                    <td>535.-</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Calculator