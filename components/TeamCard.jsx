import React from 'react'
import Img from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'

const StyledCommuntiyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  img {
    width: 120px;
    height: 120px;
  }
  div {
    h2 {
      text-align: center;
    }
    > div {
      display: flex;
      justify-content: space-around;
    }
  }
`

const TeamCard = ({ name, links }) => {
  console.log(name)
  return (
    <StyledCommuntiyCard>
      <Img
        src={`/assets/img/equipo/${name}.png`}
        width="120px"
        height="120px"
        alt={name}
        loading="lazy"
      />
      <div>
        <h2>{name}</h2>
        <div>
          {links.map((l) => (
            <a href={l.url} key={l.url}>
              <FontAwesomeIcon icon={['fab', l.icon]} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </StyledCommuntiyCard>
  )
}

export default TeamCard
