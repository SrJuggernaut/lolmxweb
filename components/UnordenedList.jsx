import React from 'react'
import styled from '@emotion/styled'

const StyledUnorderedList = styled.ul`
  li{
    margin: 1rem 0;
  }
`

const UnordenedList = ({ children }) => {
  return <StyledUnorderedList className="fa-ul">{children}</StyledUnorderedList>
}

export default UnordenedList
