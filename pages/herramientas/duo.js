import React, { useRef, useState } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../layout/Layout'
import Button from '../../components/ui/Button'
import DuoToExport from '../../components/content/DuoToExport'
import { lgStart } from '../../helpers/breakPoints'

const StyledDuoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: ${lgStart}) {
    grid-template-columns: 1fr 1fr;
  }
`
const StyledInput = styled.input`
  display: block;
  margin-block: 8px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid var(--color-text);
  width: 100%;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
`
const StyledSelect = styled.select`
  display: block;
  margin-block: 8px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid var(--color-text);
  width: 100%;
  &:active,
  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
`
const StyledPosterSpace = styled.div`
  overflow: scroll;
`
const StyledErrorAlert = styled.p`
  color: var(--color-primary);
`
const duo = () => {
  const [exporting, setExporting] = useState(false)
  const simpleRef = useRef(null)
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
    },
    onSubmit: async () => {
      await setExporting(true)
      const { exportComponentAsJPEG } = require('react-component-export-image')
      await exportComponentAsJPEG(simpleRef, { fileName: 'SolicitudDuo.jpg' })
      setExporting(false)
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
      <p>Usa esta plantilla para conseguir tu duo soñado.</p>
      <StyledDuoGrid>
        <StyledPosterSpace>
          <DuoToExport
            reference={simpleRef}
            exporting={exporting}
            {...duoForm.values}
          />
        </StyledPosterSpace>
        <div>
          <form onSubmit={duoForm.handleSubmit}>
            <div>
              <label htmlFor="userName">
                Nombre de usuario:
                <StyledInput
                  type="text"
                  id="userName"
                  name="userName"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.userName}
                />
              </label>
              {duoForm.errors.userName
                ? (
                <StyledErrorAlert>{duoForm.errors.userName}</StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <label htmlFor="server">
                Servidor:
                <StyledSelect
                  id="server"
                  name="server"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.server}
                >
                  <option value="LAN">LAN</option>
                  <option value="LAS">LAS</option>
                </StyledSelect>
              </label>
              {duoForm.errors.server
                ? (
                <StyledErrorAlert>{duoForm.errors.server}</StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <label htmlFor="league">
                Liga:
                <StyledSelect
                  id="league"
                  name="league"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.league}
                >
                  <option value="Unranked">Unranked</option>
                  <option value="Hierro">Hierro</option>
                  <option value="Bronce">Bronce</option>
                  <option value="Plata">Plata</option>
                  <option value="Oro">Oro</option>
                  <option value="Platino">Platino</option>
                  <option value="Master">Master</option>
                  <option value="GrandMaster">GrandMaster</option>
                  <option value="Challenger">Challenger</option>
                </StyledSelect>
              </label>
              {duoForm.errors.league
                ? (
                <StyledErrorAlert>{duoForm.errors.league}</StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <label htmlFor="division">
                Division:
                <StyledSelect
                  type="text"
                  id="division"
                  name="division"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.division}
                >
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </StyledSelect>
              </label>
              {duoForm.errors.division
                ? (
                <StyledErrorAlert>{duoForm.errors.division}</StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <label htmlFor="mainLine">
                Carril principal:
                <StyledSelect
                  type="text"
                  id="mainLine"
                  name="mainLine"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.mainLine}
                >
                  <option value="Superior">Superior</option>
                  <option value="Central">Central</option>
                  <option value="Inferior">Inferior</option>
                  <option value="Support">Support</option>
                  <option value="Jungla">Jungla</option>
                </StyledSelect>
              </label>
              {duoForm.errors.mainLine
                ? (
                <StyledErrorAlert>{duoForm.errors.mainLine}</StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <label htmlFor="secondaryLine">
                Carril secundario:
                <StyledSelect
                  type="text"
                  id="secondaryLine"
                  name="secondaryLine"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.secondaryLine}
                >
                  <option value="Superior">Superior</option>
                  <option value="Central">Central</option>
                  <option value="Inferior">Inferior</option>
                  <option value="Support">Support</option>
                  <option value="Jungla">Jungla</option>
                </StyledSelect>
              </label>
              {duoForm.errors.secondaryLine
                ? (
                <StyledErrorAlert>
                  {duoForm.errors.secondaryLine}
                </StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <label htmlFor="mainChamp">
                Campeón Main:
                <StyledInput
                  type="text"
                  id="mainChamp"
                  name="mainChamp"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.mainChamp}
                />
              </label>
              {duoForm.errors.mainChamp
                ? (
                <StyledErrorAlert>{duoForm.errors.mainChamp}</StyledErrorAlert>
                  )
                : null}
            </div>
            <div>
              <Button type="submit">
                Descargar{' '}
                <FontAwesomeIcon icon={['fas', 'download']} fixedWidth />
              </Button>
            </div>
          </form>
        </div>
      </StyledDuoGrid>
    </Layout>
  )
}

export default duo
