import * as React from "react"
import styled from "@emotion/styled"

const Button = styled.button`

`

const Content = styled.p`
  
`

const Collapsible = ({title}) => {

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <>
            <Button onClick={toggle}>{title}</Button>
            { open && <Content>EASIT ist Super!</Content> }
        </>
    )
}

export default Collapsible
