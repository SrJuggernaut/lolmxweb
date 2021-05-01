import React from 'react'
import Layout from '../layout/Layout'
import styled from '@emotion/styled'
import equipoArray from '../helpers/equipo'
import Card from '../components/ui/Card'

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

const equipo = () => {
  return (
    <Layout>
      <h1>Equipo</h1>
      <p>Actualmente la moderación del grupo esta a cargo de el equipo de moderación de EntGamers, si deseas unirte a la moderación deberás seguir el proceso de</p>
      <StyledGrid>
        {equipoArray.map(e => {
          return <Card {... e} key={e.title} />
        })}
      </StyledGrid>
    </Layout>
  )
}

export default equipo
