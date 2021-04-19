import React from 'react'
import styled from '@emotion/styled'

const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x:auto;
  table{
    margin: 0 auto;
  }
  td{
    padding: 10px;
    border: 1px solid black;
  }
`

const Table = ({ children }) => {
  return (
    <StyledTableWrapper>
      <table>
        {children}
      </table>
    </StyledTableWrapper>
  )
}

export default Table
