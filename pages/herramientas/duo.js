import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import { toJpeg } from 'html-to-image'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import DuoForm from '../../components/content/solicitudDuo/DuoForm'
import Layout from '../../layout/Layout'
import DuoToExport from '../../components/content/solicitudDuo/DuoToExport'
import { lgStart } from '../../helpers/breakPoints'

const StyledDuoGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 16px;
  @media (min-width: ${lgStart}) {
    grid-template-columns: 50% 50%;
  }
`
const StyledGridColumn = styled.div`
  > h2 {
    text-align: center;
  }
`

const StyledPreview = styled.div`
  > h2 {
    text-align: center;
  }
  @media (min-width: ${lgStart}) {
    grid-column:  span 2;
  }
`
const StyledPosterSpace = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar-track {
    border-radius: var(--spacer);
    background: rgba(239, 250, 240, 0.05);
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: var(--spacer);
    background: rgba(239, 250, 240, 0.05);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: var(--spacer);
    background: #ff5555;
  }
`
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
const SyledButonWrappper = styled.div`
  display: flex;
  justify-content: space-around;
`
const duo = () => {
  const [imgSrc, setImgSrc] = useState('')
  const simpleRef = useRef(null)
  const handleShow = async () => {
    const dataUrl = await toJpeg(simpleRef.current, { quality: 0.95 })
    setImgSrc(dataUrl)
  }
  const handleDownload = async () => {
    const dataUrl = await toJpeg(simpleRef.current, { quality: 0.95 })
    console.log(dataUrl)
    const link = document.createElement('a')
    link.download = 'duo.jpeg'
    link.href = dataUrl
    link.click()
  }
  const duoFormSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, 'Nombre de usuario demasiado corto')
      .max(16, 'Nombre de usuario demasiado largo'),
    server: Yup.string(),
    league: Yup.string(),
    division: Yup.string(),
    mainLine: Yup.string(),
    secondaryLine: Yup.string(),
    mainChamp: Yup.string().min(2, 'Nombre de campeón demasiado corto')
  })
  const duoForm = useFormik({
    validationSchema: duoFormSchema,
    initialValues: {
      userName: '',
      server: 'LAN',
      league: 'Unranked',
      division: 'I',
      mainLine: 'Superior',
      secondaryLine: 'Superior',
      mainChamp: ''
    }
  })
  return (
    <Layout>
      <Head>
        <title>Reglamento del grupo | Lol México</title>
        <meta name="title" content="Reglamento del grupo | Lol México" />
        <meta
          name="description"
          content="Reglamento del grupo Lol México, La administración se reserva el derecho de modificar el reglamento acorde a las necesidades y este será aplicado..."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comunidadlolmx.cf/" />
        <meta property="og:title" content="Reglamento del grupo | Lol México" />
        <meta
          property="og:description"
          content="Reglamento del grupo Lol México, La administración se reserva el derecho de modificar el reglamento acorde a las necesidades y este será aplicado..."
        />
        <meta property="og:image" content="/assets/img/LolMxOgImg.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://comunidadlolmx.cf/" />
        <meta
          property="twitter:title"
          content="Reglamento del grupo | Lol México"
        />
        <meta
          property="twitter:description"
          content="Reglamento del grupo Lol México, La administración se reserva el derecho de modificar el reglamento acorde a las necesidades y este será aplicado..."
        />
        <meta property="twitter:image" content="/assets/img/LolMxOgImg.jpg" />
      </Head>
      <h1>Plantilla Buscar Duo</h1>
      <StyledDuoGrid>
        <StyledGridColumn>
          <h2>Vista previa</h2>
          <p>Esta vista previa se actualiza en vivo</p>
          <StyledPosterSpace>
            <DuoToExport reference={simpleRef} {...duoForm.values} />
          </StyledPosterSpace>
        </StyledGridColumn>
        <StyledGridColumn>
          <h2>Datos</h2>
          <DuoForm duoForm={duoForm} />
          <p>En caso de que la opcion de descarga no funcione puedes mostrarla y hacer <strong>Clic derecho {'>'} descargar</strong></p>
          <SyledButonWrappper>
            <StyledButton type="button" onClick={handleDownload}>
              Descargar{' '}
              <FontAwesomeIcon icon={['fas', 'download']} fixedWidth />
            </StyledButton>
            <StyledButton type="button" onClick={handleShow}>
              Mostrar{' '}
              <FontAwesomeIcon icon={['fas', 'image']} fixedWidth />
            </StyledButton>
          </SyledButonWrappper>
        </StyledGridColumn>
        {imgSrc
          ? (
          <StyledPreview>
            <h2>Descarga esta imagen</h2>
            <img src={imgSrc} width="100%" alt="duo" />
          </StyledPreview>
            )
          : null}
      </StyledDuoGrid>
    </Layout>
  )
}

export default duo
