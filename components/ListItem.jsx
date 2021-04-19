import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = ({ children, icon }) => {
  return <li><span className="fa-li"><FontAwesomeIcon icon={icon || 'square'} size="xs" /></span>{ children }</li>
}

export default ListItem
