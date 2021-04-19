import React from 'react'
import Layout from '../layout/Layout'
import styled from '@emotion/styled'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledHero = styled.div`
  min-height: 100%;
  section{
    text-align: center;
  }
`

export default function Home () {
  return (
    <Layout>
      <StyledHero>
        <section>
          <h2>Reglamento</h2>
          <p>Puedes consultar el reglamento del grupo de Lol Mexico haciendo clic al siguiente enlace:</p>
          <Button href="/reglamento">Ver Reglamento <FontAwesomeIcon icon="chevron-right" /></Button>
        </section>
        <section>
          <h2>Comunidades</h2>
          <p>Otras comunidades a las que deberias considerar unirte si te gustan los videojuegos:</p>
          <Button href="/comunidades">Ver Comunidades <FontAwesomeIcon icon="chevron-right" /></Button>
        </section>
        <section>
          <h2>Equipo de Moderacion</h2>
          <p>Aqui puedes conocer al equipo de moderacion y aprender mas sobre como unirte</p>
          <Button href="/equipo">Ver Equipo <FontAwesomeIcon icon="chevron-right" /></Button>
        </section>
      </StyledHero>
    </Layout>
  )
}
