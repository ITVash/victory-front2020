import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import LightBox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { Icon } from 'antd'
import { YMaps, Map, Placemark } from "react-yandex-maps"

import { routeAction } from "../../redux/actions"
import { Header as HeaderBase, Section } from "../../components"
const Header = props => {
	const { citiesBase, current, currentID, showID } = props
	//const [city, setCity] = useState()
	const [open, setOpen] = useState({
		open: false,
		photo: null,
	})

	useEffect(() => {
		const { pathname } = props.location
		const currents = pathname.split("/").pop()
		currentID(currents)
	}, [props.location.pathname, currentID, props.location])

	useEffect(() => {
		if (current) {
			showID(decodeURI(current))
		}
	}, [showID, current])
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
			<HeaderBase city base={citiesBase[0]} title={current} />
			<Section color='orange' title='Описание' type='description'>
				{citiesBase && citiesBase.map(item => item.body)}
			</Section>
			<Section color='black' title='Карта города' type='map'>
				<YMaps>
					{citiesBase &&
						citiesBase.map(item => {
							return (
								<Map
									key={item._id+1}
									state={{
										center: [item.lat, item.lng],
										zoom: 12,
									}}
									width='100%'
									height='100vh'
								>
									<Placemark
										key={item._id}
										geometry={[item.lat, item.lng]}
										modules={["geoObject.addon.hint"]}
										properties={{
											hintContent: `${item.city}`,
										}}
										options={{
											iconLayout: "default#image",
											iconImageHref: item.visited
												? `/img/ico_city1.png`
												: `/img/ico_city2.png`,
											iconImageSize: [40, 40],
											iconImageOffset: [-20, -20],
										}}
									/>
								</Map>
							)
						})}
				</YMaps>
				<div className='slide' onClick={handleClick}>
					<Icon type='down-circle' />
				</div>
			</Section>
			<Section
				color='orange'
				title='Общественная поддержка города'
				type='description'
			>
				тут поддержка города
			</Section>
			<Section color='black' title='Фото и видео' type='gallery'>
				{citiesBase &&
					citiesBase.map(item => {
						return item.images ? (
							item.images.map((items, id) => {
								return (
									<article key={id} className='gallery-card'>
										<div
											className='gallery-card__wrapper'
											onClick={() => {
												setOpen({
													open: true,
													photo: `http://localhost:4000/upload/${items}`,
												})
											}}
										>
											<div className='gallery-card__img-container'>
												<img
													src={`http://localhost:4000/upload/${items}`}
													alt=''
													className='gallery-card__img'
												/>
											</div>
										</div>
									</article>
								)
							})
						) : (
							<span>нету фоток</span>
						)
					})}
				{open.open && (
					<LightBox
						mainSrc={open.photo}
						onCloseRequest={() => setOpen({ open: false })}
					/>
				)}
			</Section>
		</>
	)
}

export default withRouter(
	connect(
		({ routeMap }) => ({
			citiesBase: routeMap.items,
			current: routeMap.currentID,
		}),
		{ ...routeAction },
	)(Header),
)
