import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--color-text);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  &:disabled {
    cursor: initial;
    opacity: 50%;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--color-text);
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: inset 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`
const StyledAnchorButton = StyledButton.withComponent('a')

const Button = ({ href, children, type = 'anchor', isDisabled = false }) => {
  return type === 'anchor'
    ? (
    <Link href={href}>
      <StyledAnchorButton>{children}</StyledAnchorButton>
    </Link>
      )
    : (
    <StyledButton type={type} disabled={isDisabled}>
      {children}
    </StyledButton>
      )
}

export default Button
