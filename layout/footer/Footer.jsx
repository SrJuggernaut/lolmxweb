import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex: 0 1 60px;
  min-height: 60px;
  background-color: var(--color-primary);
  color: var(--color-text);
  > div{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 768px){
      max-width: 768px
    }
    @media (min-width: 1024px){
    max-width: 1024px
    }
    @media (min-width: 1440px){
    max-width: 1440px
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Hecho con <FontAwesomeIcon icon="heart"/> por <Link href="https://github.com/SrJuggernaut"><a>SrJuggernaut</a></Link></p>
      </div>
    </StyledFooter>
  )
}

export default Footer
