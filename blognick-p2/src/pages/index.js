import React from "react"
import {Row,Col} from 'reactstrap'
import {graphql, StaticQuery} from 'gatsby'
import Sidebar from '../components/Sidebar'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/Post'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Homepage</h1>
        <Row> 
    <Col md="8"> 
       <StaticQuery query={indexQuery} render={data =>{
      return(
      <div>
      {data.allMarkdownRemark.edges.map(({node })=> (
        <Post title={node.frontmatter.title}
        key={node.id}
        author={node.frontmatter.author}
        path={node.frontmatter.path}
        fluid={node.frontmatter.image.childImageSharp.fluid}
            tags={node.frontmatter.tags}
        date={node.frontmatter.date}
        body={node.excerpt}
        />
      ))}
      </div>
      )
    }}/>
    
    </Col>
       <Col md="4"> 
       <Sidebar> </Sidebar>
    
    </Col>
 </Row>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort:{fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          path
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
