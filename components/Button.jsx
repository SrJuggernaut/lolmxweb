import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const StyledButton = styled.a`
  display: inline-block;
  background-color: var(--color-primary);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 0.35em 1.2em;
  font-weight: 700;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.50);
  &:hover {
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--color-text);
    box-shadow: 4px 4px 2px 1px rgba(0,0,0,0.50);
  }
  &:active{
    box-shadow: inset 2px 2px 2px 1px rgba(0,0,0,0.50);
  }
`

const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <StyledButton>{children}</StyledButton>
    </Link>
  )
}

export default Button
