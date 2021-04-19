import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ListItem from '../components/ListItem'
import Table from '../components/Table'
import UnordenedList from '../components/UnordenedList'
import Layout from '../layout/Layout'

export default function Home () {
  return (
    <Layout>
      <h1>Reglamento del grupo</h1>
      <h2 id="flexibilidad-de-contenido">Flexibilidad de contenido</h2>
      <UnordenedList>
        <ListItem>
          Las publicaciones de la comunidad siempre son bienvenidas.
        </ListItem>
        <UnordenedList>
          <ListItem>“Esto está pasando en mi vida, denme su consejo”</ListItem>
        </UnordenedList>
        <ListItem>Prohibido todo contenido de tipo:</ListItem>
        <UnordenedList>
          <ListItem>Pornográfico</ListItem>
          <ListItem>Violencia explicita</ListItem>
        </UnordenedList>
        <ListItem>
          Este grupo es de League Of Legends, no se permitirá contenido de otros
          juegos(Exceptuando los juegos de Riot).
        </ListItem>
        <ListItem>
          Ninguna publicación debe romper los{' '}
          <a href="https://www.riotgames.com/es-419/terms-of-service-LATAM">
            Términos de servicio <FontAwesomeIcon icon="link" size="sm" />
          </a>{' '}
          de League of Legends o el{' '}
          <a href="https://lan.leagueoflegends.com/es/featured/summoners-code">
            Código del invocador <FontAwesomeIcon icon="link" size="sm" />
          </a>
          .
        </ListItem>
        <ListItem>
          Toda publicación debe cumplir con las{' '}
          <a href="https://www.facebook.com/communitystandards/introduction">
            normas comunitarias <FontAwesomeIcon icon="link" size="sm" />
          </a>{' '}
          de facebook.
        </ListItem>
      </UnordenedList>
      <h2 id="flexibilidad-de-lenguaje">Flexibilidad en el lenguaje</h2>
      <p>
        El lenguaje vulgar no está prohibido siempre y cuando no atente contra
        la integridad de las demás personas, sean o no miembros del grupo. Si
        algún contenido o comentario es reportado por “Atentar contra la
        integridad” éste será evaluado por la Moderación y/o administración y
        ellos tendrán la última palabra.
      </p>
      <h2>Abuso verbal</h2>
      <p>
        Queda prohibido el abuso verbal, si no estás de acuerdo con algo y
        sientes la necesidad de dar tu opinión hazlo de una manera adecuada sin
        recurrir a los insultos. Recuerda que este grupo es para apoyarnos y
        aprender.
      </p>
      <h2>Eventos</h2>
      <p>
        Está permitido publicar eventos, siempre y cuando estos sean dirigidos
        al disfrute y recreación de la comunidad.
      </p>
      <h2>Streams</h2>
      <UnordenedList>
        <ListItem>
          Los streams serán bienvenidos siempre y cuando cumplan con la{' '}
          <a href="#flexibilidad-de-contenido">Flexibilidad de contenido</a>.
        </ListItem>
        <ListItem>
          En medida de lo posible intentar evitar evitar que varios usuarios
          compartan el mismo stream, podría ser considerado como SPAM.
        </ListItem>
      </UnordenedList>
      <h2>Spam</h2>
      <p>Se considera Spam:</p>
      <UnordenedList>
        <ListItem>Contenido publicado de forma reiterativa.</ListItem>
        <ListItem>
          Streams que no cumplan con la Flexibilidad de contenido.
        </ListItem>
      </UnordenedList>
      <h2>Aplicación del reglamento</h2>
      <p>
        La administración se reserva el derecho de modificar el reglamento
        acorde a las necesidades y este será aplicado igual a sucesos previos o
        posteriores a las modificaciones del mismo. Si quieres saber si está
        bien o no hacer algo usa tu sentido común y/o Pregunta a un Moderador.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Indidencias</th>
            <th>Sanciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1a</td>
            <td rowSpan="2">
              <UnordenedList>
                <ListItem>Eliminar Publicacion</ListItem>
              </UnordenedList>
            </td>
          </tr>
          <tr>
            <td>2a</td>
          </tr>
          <tr>
            <td>3a</td>
            <td rowSpan="2">
              <UnordenedList>
                <ListItem>Eliminar Publicacion</ListItem>
                <ListItem>Silenciado 3 días</ListItem>
              </UnordenedList>
            </td>
          </tr>
          <tr>
            <td>4a</td>
          </tr>
          <tr>
            <td>5a</td>
            <td rowSpan="2">
              <UnordenedList>
                <ListItem>Eliminar Publicacion</ListItem>
                <ListItem>Silenciado 3 días</ListItem>
                <ListItem>Aprobación de publicaciones</ListItem>
              </UnordenedList>
            </td>
          </tr>
          <tr>
            <td>6a</td>
          </tr>
          <tr>
            <td>7a</td>
            <td>
              <UnordenedList>
                <ListItem>Eliminar Publicacion</ListItem>
              </UnordenedList>
            </td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  )
}
