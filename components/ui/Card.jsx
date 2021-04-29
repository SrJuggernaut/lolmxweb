import React from 'react'
import styled from '@emotion/styled'
import IconBar from './IconBar'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  padding-block: 1rem;
`
const StyledCardImage = styled.img`
  border-radius: 50%;
  align-self: center;
`
const StyledCardDataWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`

const Card = ({ title, imgSrc, description, iconList }) => {
  return (
    <StyledCard>
      <StyledCardImage
        src={imgSrc}
        width="120px"
        height="120px"
        alt={title}
        loading="lazy"
        />
      <StyledCardDataWrapper>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </StyledCardDataWrapper>
      <IconBar iconList={iconList} />
    </StyledCard>
  )
}

export default Card
