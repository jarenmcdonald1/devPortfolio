import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaPaperPlane, FaGithub, FaLinkedin, FaLaptopCode, FaEdit, FaPhotoVideo } from 'react-icons/fa';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const social = data.site.siteMetadata?.social
  const profileimage = getImage(data.profileImg)
  let careerduration = new Date().getFullYear() - 2011

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Digital Developer" />

        <section className="index-banner banner-con">
        
        </section>

        <Container className="mb-4 mb-sm-5 pt-2 pt-md-4" id="about">
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <GatsbyImage className="about-img" image={profileimage} alt="me and my car" />
            </Col>
            <Col>
              <h4 className="display-4">Hello, I'm Jaren</h4>
              <h5>I'm a multi-talented front-end web developer that loves what I do!</h5>
              <p>Since beginning my journey nearly {careerduration} years ago, I've worked and collaborated with talented people to create unique and impactful marketing solutions. I'm always searching for interesting things to learn, build, and share. I have yet to find a challenge that is too big or small!</p>
              <Link to="#contact" alt="send me an email" className="btn btn-success btn-lg">Let's talk <FaPaperPlane title="paper plane icon" className="ml-1 mb-1" /></Link>
            </Col>
          </Row>
        </Container>

        <Container className="mb-4 mb-sm-5 pt-2 pt-md-4">
          <Row className="about-skills">
            <Col xs={12} md={4} className="mb-2">
              <Card className="w-100 shadow">
                <Card.Body>
                  <Card.Title className="text-center border-bottom border-success font-weight-bold text-dark pb-2">Design <FaEdit className="mb-1 ml-2 text-secondary" /></Card.Title>
                  <div className="d-flex justify-content-center flex-wrap text-center">
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Acrobat</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Photoshop</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Illustrator</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe InDesign</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe XD</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Bridge</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Lightroom</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Sketch</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Affinity Designer</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-2">
              <Card className="w-100 shadow">
                <Card.Body>
                  <Card.Title className="text-center border-bottom border-success font-weight-bold text-dark pb-2">Code <FaLaptopCode className="mb-1 ml-2 text-secondary" /></Card.Title>
                  <div className="d-flex justify-content-center flex-wrap text-center">
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Git</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">HTML5</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">CSS3</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">SASS/SCSS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">PostCSS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">JavaScript ES6</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">GatsbyJS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">NuxtJS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Drupal CMS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Wordpress CMS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Netlify CMS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">VueJS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">ReactJS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">PHP</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">mySQL</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Grunt/Gulp</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">NodeJS</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Bootstrap 4 & 5</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Tailwind CSS</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-2">
              <Card className="w-100 shadow">
                <Card.Body>
                  <Card.Title className="text-center border-bottom border-success font-weight-bold text-dark pb-2">Video  <FaPhotoVideo className="mb-1 ml-2 text-secondary" /></Card.Title>
                  <div className="d-flex justify-content-center flex-wrap text-center">
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe After Effects</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Premier</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Final Cut Pro</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Motion</Card.Text>
                    <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Media Encoder</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <p className="mb-4 mb-md-5 py-md-4">
          No project posts found. Check back again later.
        </p>

        <Container className="mb-4" id="contact">
          <Row>
            <Col xs={12} className="">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title className="display-4">Contact</Card.Title>
                  <Card.Text>
                    Have a new project in mind? Need help with an existing project? Looking for an experienced freelance web developer? No matter what point you are with your project, I'll be happy to help!
                  </Card.Text>
                  <div className="mb-3">
                    <a className="btn btn-success" href={`mailto:${social.email}`} alt="click to send and email">Send me and email <FaPaperPlane title="paper plane icon" className="ml-1 mb-1" /></a>
                  </div>
                  <Card.Link 
                    href={`https://github.com/${social?.github || ``}`}
                      alt="Checkout my github profile" className="contact-icon-link"
                    >
                    <span class="sr-only">Github</span>
                    <FaGithub className="contact-icon" title="github logo" />
                  </Card.Link>
                  <Card.Link href={`https://www.linkedin.com/in/${social?.linkedin || ``}`} 
                    alt="Checkout my linkedin profile" 
                    className="contact-icon-link"
                  >
                    <span className="sr-only">linkedin</span>
                    <FaLinkedin className="contact-icon" title="linkedin logo" />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Digital Developer" />

      <section className="d-none index-banner banner-con">
        
      </section>

      <Container className="mb-4 mb-sm-5 pt-2 pt-md-4" id="about">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <GatsbyImage className="about-img" image={profileimage} alt="me and my car" />
          </Col>
          <Col>
            <h4 className="display-4">Hello, I'm Jaren</h4>
            <h5>I'm a multi-talented front-end web developer that loves what I do!</h5>
            <p>Since beginning my journey nearly {careerduration} years ago, I've worked and collaborated with talented people to create unique and impactful marketing solutions. I'm always searching for interesting things to learn, build, and share. I have yet to find a challenge that is too big or small!</p>
            <Link to="#contact" alt="send me an email" className="btn btn-success btn-lg">Let's talk! <FaPaperPlane title="paper plane icon" className="ml-1 mb-1" /></Link>
          </Col>
        </Row>
      </Container>

      <Container className="mb-4 mb-sm-5 pt-2 pt-md-4">
        <Row className="about-skills">
          <Col xs={12} md={4} className="mb-2">
            <Card className="w-100 shadow">
              <Card.Body>
                <Card.Title className="text-center border-bottom border-success font-weight-bold text-dark pb-2">Design <FaEdit className="mb-1 ml-2 text-secondary" /></Card.Title>
                <div className="d-flex justify-content-center flex-wrap text-center">
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Acrobat</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Photoshop</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Illustrator</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe InDesign</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe XD</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Bridge</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Lightroom</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Sketch</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Affinity Designer</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-2">
            <Card className="w-100 shadow">
              <Card.Body>
                <Card.Title className="text-center border-bottom border-success font-weight-bold text-dark pb-2">Code <FaLaptopCode className="mb-1 ml-2 text-secondary" /></Card.Title>
                <div className="d-flex justify-content-center flex-wrap text-center">
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Git</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">HTML5</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">CSS3</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">SASS/SCSS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">PostCSS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">JavaScript ES6</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">GatsbyJS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">NuxtJS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Drupal CMS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Wordpress CMS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Netlify CMS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">VueJS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">ReactJS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">PHP</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">mySQL</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Grunt/Gulp</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">NodeJS</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Bootstrap 4 & 5</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Tailwind CSS</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-2">
            <Card className="w-100 shadow">
              <Card.Body>
                <Card.Title className="text-center border-bottom border-success font-weight-bold text-dark pb-2">Video  <FaPhotoVideo className="mb-1 ml-2 text-secondary" /></Card.Title>
                <div className="d-flex justify-content-center flex-wrap text-center">
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe After Effects</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Premier</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Final Cut Pro</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Motion</Card.Text>
                  <Card.Text className="mr-2 mr-md-3 mr-lg-4 mb-lg-3 mb-2">Adobe Media Encoder</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mb-4 mb-sm-5 py-md-4" id="work" fluid>
        <div className="index-work-con mx-auto">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.thumbimg)

          return (
            <Link className="work-project-main mb-4 mb-sm-0" to={post.fields.slug} alt={`click to read more about ${title}`} key={post.fields.slug}>

                <div className="work-project-con h-100 d-flex justify-content-center align-items-center">

                  <div className="work-body project-sample py-3 px-3 py-sm-4">
                    <Link to={post.fields.slug} alt={`click to read more about ${title}`}>
                      <h3 className="sample-title font-weight-bold mb-2">{title}</h3>
                    </Link>
                    <Card.Text>
                      
                    </Card.Text>
                    <p
                      className="sample-desc font-weight-light"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.subtitle || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <div className="">
                      <Link to={post.fields.slug} className="btn btn-success" alt={`click to read more about ${title}`}>
                        Read more <span className="sr-only">about {title}</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <GatsbyImage className="work-img" image={image} alt={title} />
              </Link>
          )
        })}
        </div>
      </Container>

      <Container className="mb-4" id="contact">
        <Row>
          <Col xs={12} className="">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="display-4">Contact</Card.Title>
                <Card.Text>
                  Have a new project in mind? Need help with an existing project? Looking for an experienced freelance web developer? No matter what point you are with your project, I'll be happy to help!
                </Card.Text>
                <div className="mb-3">
                  <a className="btn btn-success" href={`mailto:${social.email}`} alt="click to send and email">Send me and email <FaPaperPlane title="paper plane icon" className="ml-1 mb-1" /></a>
                </div>
                <Card.Link 
                  href={`https://github.com/${social?.github || ``}`} 
                  alt="Checkout my github profile" className="contact-icon-link">
                  <span class="sr-only">Github</span>
                  <FaGithub className="contact-icon" title="github logo" />
                </Card.Link>
                <Card.Link href={`https://www.linkedin.com/in/${social?.linkedin || ``}`} alt="Checkout my linkedin profile" className="contact-icon-link">
                <span className="sr-only">linkedin</span>
                <FaLinkedin className="contact-icon" title="linkedin logo" />
                </Card.Link>
              </Card.Body>
            </Card>
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
        social {
          github
          linkedin
          email
        }
      }
    }
    profileImg: file(relativePath: { eq: "jaren-profile.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 850
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
                width: 865
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
