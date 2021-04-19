import React from 'react'
import Layout from '../layout/Layout'
import styled from '@emotion/styled'
import CommunityCard from '../components/CommunityCard'
import arrayComunidades from '../helpers/comunidades'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const comunidades = () => {
  return (
    <Layout>
      <StyledGrid>
        {arrayComunidades.map((comunidad) => (
          <CommunityCard {...comunidad} key={comunidad.name} />
        ))}
      </StyledGrid>
    </Layout>
  )
}

export default comunidades
