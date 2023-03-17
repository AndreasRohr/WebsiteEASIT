import * as React from "react"
import styled from "@emotion/styled"
//import GatsbyImage from "gatsby-plugin-image";

const Card = styled.div`
  background: #ffffff;
  color: #000000;
  width: 30vw;
  text-align: center;
`

// export const query = graphql`
//   query ($logo: String) {
//     file(relativePath: { eq: $logo }) {
//       childImageSharp {
//         gatsbyImageData(
//         width: 100
//         placeholder: BLURRED
//         formats: [AUTO, WEBP, AVIF]
//         )
//       }
//     }
//   }
// `

const Testimonial = ({name, content}) => {

//    const image = useStaticQuery(query, {logo: logo});

    return (
        <Card>
            <h2>{name}</h2>
            <p>{content}</p>
            {/*<GatsbyImage image={image}/>*/}
        </Card>
    )
}

export default Testimonial