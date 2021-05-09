import React from 'react'
import styled from '@emotion/styled'

const StyledErrorAlert = styled.p`
  color: var(--color-primary);
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

const DuoForm = ({ duoForm }) => {
  return (
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
          <StyledErrorAlert>{duoForm.errors.secondaryLine}</StyledErrorAlert>
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
    </form>
  )
}

export default DuoForm
