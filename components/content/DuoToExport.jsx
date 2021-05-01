import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const StyledDuoToExport = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1200px;
  height: 630px;
  position: relative;
  font-size: 32px;
  font-weight: 700;
  transform-origin: left top;
  padding: 16px;
  color: var(--color-light);
  background-image: linear-gradient(
    to right top,
    #6671bf,
    #647cc6,
    #6487cb,
    #6691d0,
    #6a9bd4,
    #6793c9,
    #638cbd,
    #6084b2,
    #526b96,
    #44527a,
    #353b5f,
    #262645
  );
  span {
    font-family: 'Architects Daughter';
    color: var(--color-text);
  }
  #EntGamers {
    opacity: 80%;
    width: 128px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-size: 24px;
    img {
      width: 128px;
    }
  }
  #LolMx {
    opacity: 80%;
    width: 128px;
    position: absolute;
    bottom: 16px;
    right: calc(128px + 32px);
    font-size: 24px;
    img {
      width: 128px;
    }
  }
  #rank {
    width: 128px;
    position: absolute;
    top: 16px;
    right: 16px;
    img {
      width: 128px;
    }
  }
  h3 {
    font-size: 60px;
    text-align: center;
  }
`

const DuoToExport = ({
  reference,
  exporting,
  userName,
  server,
  league,
  mainLine,
  secondaryLine,
  mainChamp,
  division
}) => {
  const [src, setSrc] = useState('/assets/img/rank/Unranked.png')
  useEffect(() => {
    switch (league) {
      case 'Hierro':
        setSrc('/assets/img/rank/Iron.png')
        break
      case 'Bronce':
        setSrc('/assets/img/rank/Bronze.png')
        break
      case 'Plata':
        setSrc('/assets/img/rank/Silver.png')
        break
      case 'Oro':
        setSrc('/assets/img/rank/Gold.png')
        break
      case 'Platino':
        setSrc('/assets/img/rank/Platinum.png')
        break
      case 'Master':
        setSrc('/assets/img/rank/Master.png')
        break
      case 'GrandMaster':
        setSrc('/assets/img/rank/Grandmaster.png')
        break
      case 'Challenger':
        setSrc('/assets/img/rank/Challenger.png')
        break
      case 'Unranked':
      default:
        setSrc('/assets/img/rank/Unranked.png')
        break
    }
  }, [league])
  return (
    <StyledDuoToExport ref={reference} exporting={exporting}>
      <h3>Solicitud de Duo</h3>
      <p>
        Nombre de Usuario: <span>{userName}</span>
      </p>
      <p>
        Servidor: <span>{server}</span>
      </p>
      <p>
        Liga: <span>{league}</span> <span>{division}</span>
      </p>
      <p>
        Linea Principal: <span>{mainLine}</span>
      </p>
      <p>
        Linea Secundaria: <span>{secondaryLine}</span>
      </p>
      <p>
        Main: <span>{mainChamp}</span>
      </p>
      <div id="EntGamers">
        <img src="/assets/img/EntGamersLogo.png" alt="EntGamersLogo" />
        <p>EntGamers</p>
      </div>
      <div id="LolMx">
        <img src="/assets/img/LogoLolMx.png" alt="LolMxLogo" />
        <p>Lol Mexico</p>
      </div>
      <div id="rank">
        <img src={src} alt="lolmxLiga" />
      </div>
    </StyledDuoToExport>
  )
}

export default DuoToExport
