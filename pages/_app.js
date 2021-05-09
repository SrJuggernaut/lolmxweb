import React from 'react'
import { Global, css } from '@emotion/react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faHeart,
  faFeatherAlt,
  faLink,
  faCheck,
  faTimes,
  faSquare,
  faChevronRight,
  faGavel,
  faUsers,
  faGlobe,
  faDownload,
  faImage
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faDiscord,
  faGlobe,
  faBars,
  faHeart,
  faFeatherAlt,
  faLink,
  faCheck,
  faTimes,
  faSquare,
  faTwitch,
  faChevronRight,
  faGavel,
  faUsers,
  faDownload,
  faImage
)
config.autoAddCss = false

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }
          :root {
            --color-primary: #ff5555;
            --color-light: #e3e3e3;
            --color-text: #212121;
          }
          body {
            font-family: 'Open Sans', sans-serif;
            background-color: #e3e3e3;
            color: #373737;
          }
          p {
            margin: 1rem 0;
          }
          a {
            text-decoration: none;
            color: var(--color-text);
            font-weight: 700;
          }
          h1,
          h2,
          h3 {
            margin: 1rem 0;
          }
          h1 {
            text-align: center;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: local(''),
              url('/assets/fonts/open-sans-v18-latin-300.woff2') format('woff2'),
              url('/assets/fonts/open-sans-v18-latin-300.woff') format('woff');
          }
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local(''),
              url('/assets/fonts/open-sans-v18-latin-regular.woff2')
                format('woff2'),
              url('/assets/fonts/open-sans-v18-latin-regular.woff')
                format('woff');
          }
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: local(''),
              url('/assets/fonts/open-sans-v18-latin-700.woff2') format('woff2'),
              url('/assets/fonts/open-sans-v18-latin-700.woff') format('woff');
          }
          @font-face {
            font-family: 'Architects Daughter';
            font-style: normal;
            font-weight: 400;
            src: local(''),
              url('/assets/fonts/architects-daughter-v11-latin-regular.woff2')
                format('woff2'),
                url('/assets/fonts/architects-daughter-v11-latin-regular.woff')
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
