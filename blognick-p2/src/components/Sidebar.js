import React from 'react'
import {graphql,StaticQuery,Link} from "gatsby"
import Img from 'gatsby-image'


import {Card,CardTitle,CardBody,Form,FormGroup,Input} from 'reactstrap'

const Sidebar = () =>(
<div>
<Card>
    <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
        NewsLetter
        </CardTitle>
            <Form className="text-center">
                <FormGroup><Input type="email" name="email" placeholder="Your email here" />
                </FormGroup>
                <button className="btn btn-outline-success text-uppercase">
                Something Will Go Here
                </button>
            </Form>
    </CardBody>
</Card>
    <Card>
    <CardBody>
        <CardTitle className="text-center text-uppercase">
        Advertisment
        </CardTitle>
        <img src="https://via.placeholder.com/320x200" alt="Advert"   />
            </CardBody>
    </Card>
    <Card>  
        <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
            Recent Posts Here 
            </CardTitle>
            {/* <StaticQuery query={sideBarQuery} render={(data) =>(
                <div>
                    {data.allMarkDownRemark.edges.map(({node}) =>(
                        <Card key={node.id}>
                        <Link to={node.frontmatter.path}>
                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                        </Link>
                        <CardBody>

                        <CardTitle>

                        <Link to={node.frontmatter.path}>
                        {node.frontmatter.title}

                        </Link>

                        </CardTitle>

                        </CardBody>
                        </Card>
                 ))} 
                  </div>
            )}/> */}
        </CardBody>
    </Card>

</div>

);

const sideBarQuery = graphql `
    query sidebarQuery{
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 3
        ){
            edges{
                node{
                    id
                    frontmatter{
                        title
                        path
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
export default Sidebar