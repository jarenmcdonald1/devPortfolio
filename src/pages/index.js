import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col } from 'react-bootstrap'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const profileimage = getImage(data.profileImg)
  let careerduration = new Date().getFullYear() - 2011

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />

        <section className="index-banner banner-con">
        
        </section>
        
        <Container>
          <Bio />
        </Container>

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Digital Developer" />

      <section className="index-banner banner-con">
        
      </section>

      <Container className="mb-4 mb-sm-5" id="about">
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <GatsbyImage className="about-img" image={profileimage} alt="me and my car" />
          </Col>
          <Col>
            <h4>Hello, I'm Jaren</h4>
            <h6>I'm a multi-talented front-end web developer that loves what I do!</h6>
            <p>Since beginning my journey nearly {careerduration} years ago, I've worked and collaborated with talented people to create unique and impactful marketing solutions. I'm always searching for interesting things to learn, build, and share. I have yet to find a challenge that is too big or small!</p>
            <Link to="#contact" alt="send me an email" className="btn btn-primary">Let's talk!</Link>
          </Col>
        </Row>
      </Container>

      <Container className="mb-4 mb-sm-5" id="work">
        <div className="index-work-con">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.thumbimg)

          return (
            <section className="index-work-card work-card" key={post.fields.slug}>
              <Link className="work-body-con py-2 px-2 px-sm-4" to={post.fields.slug} alt={`click to read more about ${title}`}>
              <div className="work-body">
                <Link to={post.fields.slug} alt={`click to read more about ${title}`}>
                  <h3>{title}</h3>
                </Link>
                <h5>{post.frontmatter.client}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.subtitle || post.excerpt,
                  }}
                  itemProp="description"
                />
                <div className="">
                  <Link to={post.fields.slug} className="btn btn-primary" alt={`click to read more about ${title}`}>
                    Read more <span className="sr-only">about {title}</span>
                  </Link>
                </div>
              </div>
              </Link>

              <GatsbyImage className="work-img" image={image} alt={title} />
            </section>
          )
        })}
        </div>
      </Container>

      <Container id="contact">
        <Row>
          <Col xs={12} className="">
            <h2>Contact</h2>
            <a href="mailto:jaren.mcd@gmail.com" alt="send me an email">jaren.mcd@gmail.com</a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profileImg: file(relativePath: { eq: "jaren-profile.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 650
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM YYYY")
          title
          subtitle
          client
          tags
          thumbimg {
            childImageSharp {
              gatsbyImageData (
                width: 650
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`
