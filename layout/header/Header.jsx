import React from 'react'
import styled from '@emotion/styled'
import Logo from '../../components/Logo'
import Navbar from './Navbar'
import Link from 'next/link'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex: 0 1 60px;
  min-height: 60px;
  background-color: var(--color-primary);
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 768px){
      max-width: 768px;
    }
    @media (min-width: 1024px){
      max-width: 1024px;
    }
    @media (min-width: 1440px){
      max-width: 1440px;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <a aria-label="Home">
            <Logo height="40px" color="var(--color-text)" />
          </a>
        </Link>
        <Navbar />
      </div>
    </StyledHeader>
  )
}

export default Header
