import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { routeAction } from '../../redux/actions'
import { Maps as MapsBase } from '../../components'

const Maps = props => {
  const { citiesBase, cities, currentID } = props
  useEffect(() => {
    cities()
  }, [cities])
  return (
    <MapsBase base={ citiesBase } currentID={currentID} />
  )
}

export default connect(({routeMap})=>({citiesBase: routeMap.items}), {...routeAction})(Maps)
