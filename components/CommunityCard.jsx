import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'

const StyledCommuntiyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  img{
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

const CommunityCard = ({ name, description, links }) => {
  return (
    <StyledCommuntiyCard>
      <img
        src={`/assets/img/comunidades/${name}.png`}
        alt={name}
        loading="lazy"
      />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
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

export default CommunityCard
