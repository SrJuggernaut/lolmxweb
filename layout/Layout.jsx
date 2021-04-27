import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Header from './header/Header'
import Footer from './footer/Footer'

const StyledMain = styled.main`
  flex: 1;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        lang
        <title>Lol Mexico</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/assets/fonts/open-sans-v18-latin-regular.woff2"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Lol Mexico es una comunidad de jugadores cuyo principal objetivo es que la comunidad disfrute del juego"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lol Mexico" />
        <meta property="og:site_name" content="Lol Mexico" />
        <meta property="og:url" content="https://comunidadlolmx.cf" />
        <meta
          property="og:description"
          content="Lol México es una comunidad de jugadores cuyo principal objetivo es que la comunidad disfrute del juego"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/img/LolMxOgImg.jpg" />
      </Head>
      <Header />
      <StyledMain>
        {children}
      </StyledMain>
      <Footer />
    </>
  )
}

export default Layout
