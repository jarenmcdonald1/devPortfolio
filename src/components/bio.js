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
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
            email
            linkedin
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
    <Col xs={12} className="bio-col d-sm-flex align-items-center justify-content-center">
      <GatsbyImage className="rounded-circle bio-img mr-2" image={image} alt={'me and my car'} />
      <div>
      {author?.name && (
        <p className="mb-0">
          Created by <strong>{author.name}</strong> {author?.summary || null} <a href={`https://github.com/${social?.email || ``}`}> Say hi, send me an email!
          </a>
        </p>
      )}
      <p className="pt-2">
        <a 
          className="icon mr-3" 
          href={`https://github.com/${social?.github || ``}`} 
          alt="Checkout my github profile"
        >
          <span class="sr-only">Github</span>
          <FaGithub className="contact-icon" title="github logo" />
        </a>
        <a 
          className="icon" 
          href={`https://www.linkedin.com/in/${social?.linkedin || ``}`} alt="Checkout my linkedin profile"
        >
          <span className="sr-only">linkedin</span>
          <FaLinkedin className="contact-icon" title="linkedin logo" />
        </a>
      </p>
      </div>
    </Col>
    </Row>
  )
}

export default Bio
