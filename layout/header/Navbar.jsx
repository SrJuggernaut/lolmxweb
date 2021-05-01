import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledNavbar = styled.nav`
  position: relative;
  padding: 0 16px;
  > button {
    display: inline-block;
    padding: 10px;
    background: transparent;
    border: none;
    color: var(--color-text);
    @media (max-width: 768px) {
      &:active,
      &:hover {
        color: var(--color-light);
        border: 1px solid var(--color-text);
      }
      &:hover + ul,
      &:active + ul,
      & + ul:hover,
      &:active + ul:hover {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 100%;
        background-color: var(--color-primary);
        li a {
          padding: 8px 8px;
        }
      }
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  ul {
    display: none;
    list-style: none;
    li {
      display: inline-block;
    }
    li {
      a {
        display: inline-block;
        padding: 4px 8px;
      }
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
  a:hover,
  a:active {
    color: var(--color-light);
    @media (max-width: 768px) {
      display: block;
    }
  }
`

const Navbar = (props) => {
  return (
    <StyledNavbar role="navigation">
      <button type="button" aria-label="Navigation Menu toggle">
        <FontAwesomeIcon icon="bars" size="2x" />
      </button>
      <ul>
        <li>
          <a href="https://www.facebook.com/groups/comunidadlolmexico">
            <FontAwesomeIcon icon={['fab', 'facebook']} /> Grupo
          </a>
        </li>
        <li>
          <Link href="/reglamento">
            <a>Reglamento</a>
          </Link>
        </li>
        <li>
          <Link href="/comunidades">
            <a>Comunidades</a>
          </Link>
        </li>
        <li>
          <Link href="/equipo">
            <a>Equipo</a>
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
