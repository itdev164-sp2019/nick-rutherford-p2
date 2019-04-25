import React from 'react'
import { BaseContainer } from '../BaseContainer'
import PropTypes from 'prop-types'

type Props = {
  children: PropTypes.node
}

export const Footer = (props: Props) => <BaseContainer as="footer" {...props} />

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}