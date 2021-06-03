/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Row, Col } from 'react-bootstrap'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
      profileImg: file(relativePath: { eq: "jaren-profile.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 125
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const image = getImage(data.profileImg.childImageSharp)

  return (
    <Row className="bio justify-content-center">
    <Col xs={12} className="bio-col d-flex align-items-center justify-content-center">
      <GatsbyImage className="rounded-circle bio-img mr-2" image={image} alt={'me and my car'} />
      {author?.name && (
        <p className="mb-0">
          Written by <strong>{author.name}</strong> {author?.summary || null} <a href={`https://github.com/${social?.github || ``}`}> You should follow me on Github!
          </a>
        </p>
      )}
      </Col>
    </Row>
  )
}

export default Bio
