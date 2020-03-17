import React from "react"
import PropTypes from "prop-types"
import { YMaps, Map, Placemark } from "react-yandex-maps"
import { Icon } from "antd"
import { useHistory } from "react-router-dom"

import "./style.scss"

const Maps = props => {
	const history = useHistory()
	const { base, currentID, coords } = props
	const coord = {
		center: [57.62704, 37.342258],
		zoom: 4,
		//behaviors: ["nodrag", "scrollZoom"]
	}
	let interval
	let attemtion = 0
	const handleClick = () => {
		const map = document.querySelector(".map")
		const position = /*map.offsetTop*/ window.pageYOffset
		const height = map.clientHeight + map.offsetTop
		if (position + attemtion < height) {
			window.scrollTo(0, position + attemtion)
			attemtion += 1
			interval = setTimeout(handleClick, 10)
		} else {
			clearTimeout(interval)
			window.scrollTo(0, height)
			attemtion = 0
		}
	}

	return (
		<>
			<YMaps>
				<Map defaultState={coord} state={coords && {center:[coords[0], coords[1]], zoom: 12}} width='100%' height='100vh'>
					{base.map((item, id) => {
						return (
							<Placemark
								key={id}
								geometry={[item.lat, item.lng]}
								modules={["geoObject.addon.hint"]}
								properties={{
									hintContent: `${item.city}`,
								}}
								options={{
									iconLayout: 'default#image',
									iconImageHref: item.visited ? `/img/ico_city1.png` : `/img/ico_city2.png`,
									iconImageSize: [20, 20],
									iconImageOffset: [-10, -10],
								}}
								onClick={() => {
									currentID(item.city)
									history.push(`/cities/${item.city}`)
								}}
							/>
						)
					})}
				</Map>
			</YMaps>
			<div className='slide' onClick={handleClick}>
				<Icon type='down-circle' />
			</div>
		</>
	)
}

Maps.propTypes = {
	base: PropTypes.array,
}

export default Maps
