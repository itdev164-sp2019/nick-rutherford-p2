import * as React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export function BaseContainer ({ 
  children, 
  flex, 
  className,
  ...props 
  }: {
    children: React.Node,
    flex: boolean,
    className: string,
    props: any
  }) {
  if(flex){
    return (
      <Flex {...props} className={className}>
        { children }
      </Flex>
      )
  } else {
    return (
    <Box {...props} className={className}>
      { children }
      </Box>
    )
  }
}

BaseContainer.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}