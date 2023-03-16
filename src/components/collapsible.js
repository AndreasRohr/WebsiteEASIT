import * as React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    padding: 1em;
`

const Button = styled.button`

`

const Content = styled.p`
  
`

const Collapsible = ({title, content}) => {

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <Container>
            <Button onClick={toggle}>{title}</Button>
            { open && <Content>{content}</Content> }
        </Container>
    )
}

export default Collapsible
