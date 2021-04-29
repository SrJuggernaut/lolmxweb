import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIconBar = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
`
const StyledIconItem = styled.li`
  a:hover {
    color: var(--color-primary);
  }
  a span {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    &:focus {
      clip: auto;
      -webkit-clip-path: none;
      clip-path: none;
      height: auto;
      margin: auto;
      overflow: visible;
      width: auto;
      white-space: normal;
    }
  }
`

const IconBar = ({ iconList }) => {
  return (
    <StyledIconBar>
      {iconList.map((icon) => (
        <StyledIconItem key={icon.url}>
          <a href={icon.url}>
            <FontAwesomeIcon
              icon={[icon.style, icon.icon]}
              fixedWidth
              size="2x"
            />
            <span>{icon.desc}</span>
          </a>
        </StyledIconItem>
      ))}
    </StyledIconBar>
  )
}

export default IconBar
