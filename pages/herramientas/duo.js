import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import Layout from '../../layout/Layout'
import DuoToExport from '../../components/content/DuoToExport'
import { useFormik } from 'formik'
import { lgStart } from '../../helpers/breakPoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
const StyledButton = styled.button`
  display: inline-block;
  background-color: var(--color-primary);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 0.35em 1.2em;
  font-weight: 700;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
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
const duo = () => {
  const [exporting, setExporting] = useState(false)
  const simpleRef = useRef(null)
  const duoForm = useFormik({
    initialValues: {
      userName: '',
      server: '',
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
      <h1>Plantilla Buscar Duo</h1>
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
                User name:
                <StyledInput
                  type="text"
                  id="userName"
                  name="userName"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.userName}
                />
              </label>
            </div>
            <div>
              <label htmlFor="server">
                Servidor:
                <StyledInput
                  type="text"
                  id="server"
                  name="server"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.server}
                />
              </label>
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
            </div>
            <div>
              <label htmlFor="mainChamp">
                CampeonMain:
                <StyledInput
                  type="text"
                  id="mainChamp"
                  name="mainChamp"
                  onChange={duoForm.handleChange}
                  value={duoForm.values.mainChamp}
                />
              </label>
            </div>
            <div>
              <StyledButton type="submit">
                Descargar{' '}
                <FontAwesomeIcon icon={['fas', 'download']} fixedWidth />
              </StyledButton>
            </div>
          </form>
        </div>
      </StyledDuoGrid>
    </Layout>
  )
}

export default duo
