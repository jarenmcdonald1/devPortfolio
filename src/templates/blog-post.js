import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Col } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const bannerimage = getImage(post.frontmatter.thumbimg)
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <section className="post-banner-con">
        <div className="post-banner-text-con px-2 py-2 d-flex align-items-center justify-content-center">
          <h1 className="banner-title text-center text-white font-weight-bold">{post.frontmatter.title}</h1>
        </div>
        <div className="post-banner-img-con">
          <GatsbyImage className="post-banner-img" image={bannerimage} alt={post.frontmatter.title} />
        </div>
      </section>

      <article
        className="project-post container"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="d-none">
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
        </header>

        <section className="row project-details">
        <Col xs={12} sm={6}>
            <p>Client: {post.frontmatter.client}</p>
          </Col>
          <Col xs={12} sm={6} className="text-right">
            {post.frontmatter.date}
          </Col>
        </section>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <hr />

        <footer className="">
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav py-3">
        <ul
          className="d-flex flex-wrap justify-content-between align-items-center py-2 px-2 py-md-4"
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="btn btn-outline-dark rounded-pill">
              <FaAngleLeft className="mb-1 mr-1" title="arrow left icon" /> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="text-right">
            {next && (
              <Link to={next.fields.slug} rel="next" className="text-right btn btn-outline-dark rounded-pill">
                {next.frontmatter.title} <FaAngleRight className="mb-1 ml-1" title="arrow right icon" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
        description
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
