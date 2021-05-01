import React from 'react'
import styled from '@emotion/styled'

const StyledUnorderedList = styled.ul`
  li{
    margin: 1rem 0;
  }
`

const UnorderedList = ({ children }) => {
  return <StyledUnorderedList className="fa-ul">{children}</StyledUnorderedList>
}

export default UnorderedList
