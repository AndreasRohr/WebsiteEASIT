import * as React from "react"
import styled from "@emotion/styled"
import Testimonial from "../components/testemonial";

const Container = styled.div`
  background: #273C2C;
  color: #fff;
  width: 100%;
`

const Testimonials = () => (
    <Container>
        <h1>Testimonials</h1>
        <Testimonial />
    </Container>
)

export default Testimonials