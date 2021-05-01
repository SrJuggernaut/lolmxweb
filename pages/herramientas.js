import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import React from 'react'
import Button from '../components/ui/Button'
import Layout from '../layout/Layout'

const StyledHerramientaSection = styled.section`
  padding-block: 16px;
  border-block: 1px solid var(--color-primary) ;
`

const herramientas = () => {
  return (
    <Layout>
      <h1>Herramientas</h1>
      <StyledHerramientaSection>
        <h2>Plantilla Buscar Duo</h2>
        <p>
          Crea tu solicitud de duo para compartir en tu grupo favorito de
          facebook
        </p>
        <Button href="/herramientas/duo">
          Crear ahora <FontAwesomeIcon icon={['fas', 'chevron-right']} fixedWidth />
        </Button>
      </StyledHerramientaSection>
      <StyledHerramientaSection>
        <h2>Plantilla Buscar Clash</h2>
        <p>
          Próximamente
        </p>
        <Button type="button" isDisabled={true} >
          ir <FontAwesomeIcon icon={['fas', 'chevron-right']} fixedWidth />
        </Button>
      </StyledHerramientaSection>
    </Layout>
  )
}

export default herramientas
