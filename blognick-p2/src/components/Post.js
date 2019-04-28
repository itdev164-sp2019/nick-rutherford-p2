import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunction'
import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Badge } from 'reactstrap';

const Post = ({title,author,path,date,body,fluid,tags}) => {
    return(
            <Card>
             <Link to={path}>
            <Img className="card-image-top" fluid={fluid} />
            </Link>
                <CardBody>
                <CardTitle> <Link to={path}> {title}  </Link></CardTitle>
                {title}
                <CardSubtitle>
                <span className="text-info">{date}</span> by{' '}
                <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                {tags.map(tag => (
                  <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary" className="text-uppercase" >{tag}</Badge>
                   </Link>
                   </li>
                ))}
                </ul>

                <Link to={path} className="btn btn-outline-primary float-right">Read More </Link>
                </CardBody>
            </Card>
    )
}
export default Post 