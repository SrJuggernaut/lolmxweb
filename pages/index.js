import React from 'react'
import Layout from '../layout/Layout'
import styled from '@emotion/styled'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mdStart, lgStart } from '../helpers/breakPoints'

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100%;
  gap: 16px;
  @media (min-width: ${mdStart}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${lgStart}) {
    grid-template-columns: repeat(3, 1fr);
  }
  section {
    padding-block: 16px;
    text-align: center;
    transition: background 0.5s 0s ease-in-out;
    &:hover {
      background: linear-gradient(
        180deg,
        rgba(255, 85, 85, 1) 0%,
        rgba(255, 85, 85, 0) 100%
      );
    }
  }
`

export default function Home () {
  return (
    <Layout>
      <StyledHero>
        <section>
          <h2>Reglamento</h2>
          <p>
            Puedes consultar el reglamento del grupo de Lol Mexico haciendo clic
            al siguiente enlace:
          </p>
          <Button href="/reglamento">
            Ver Reglamento <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </section>
        <section>
          <h2>Comunidades</h2>
          <p>
            Otras comunidades a las que deberias considerar unirte si te gustan
            los videojuegos:
          </p>
          <Button href="/comunidades">
            Ver Comunidades <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </section>
        <section>
          <h2>Equipo de Moderacion</h2>
          <p>
            Aqui puedes conocer al equipo de moderacion y aprender mas sobre
            como unirte
          </p>
          <Button href="/equipo">
            Ver Equipo <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </section>
        <section>
          <h2>Herramientas</h2>
          <p>Puedes</p>
          <Button href="/herramientas">
            Ir a herramientas <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </section>
      </StyledHero>
    </Layout>
  )
}
