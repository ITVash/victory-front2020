import React from 'react'
import PropTypes from 'prop-types'
import { YMaps, Map } from 'react-yandex-maps'
import { Icon } from 'antd'

import './style.scss'

const coord = {
  center: [61.22704, 102.342258],
  zoom: 4,
}
const Maps = props => {
  let interval
  let attemtion = 0
  const handleClick = () => {
    const map = document.querySelector('.map')
    const position = /*map.offsetTop*/ window.pageYOffset
    const height = map.clientHeight + map.offsetTop
    console.log('Текущая позиция', position)
    if ((position + attemtion) < height) {
      window.scrollTo(0, (position + attemtion))
      attemtion += 1
      interval = setTimeout(handleClick,10)
    } else {
      clearTimeout(interval)
      window.scrollTo(0, height)
      attemtion = 0
    }
  }
  
  return (
    <>
      <YMaps>
        <Map defaultState={coord} width='100%' height='100vh' />
      </YMaps>
      <div className="slide" onClick={handleClick}><Icon type="down-circle" /></div>
    </>
  )
}

Maps.propTypes = {

}

export default Maps
