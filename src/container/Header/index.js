import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import LightBox from "react-image-lightbox"
import Slider from "react-slick"
import ReactPlayer from "react-player"
import { Icon } from "antd"
import { YMaps, Map, Placemark } from "react-yandex-maps"
import "react-image-lightbox/style.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { routeAction, peopleAction } from "../../redux/actions"
import { Header as HeaderBase, Section, CardSlider } from "../../components"

const OrangeLeft = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className='slick-prev'
			style={{ left: 0, zIndex: 110 }}
		>
			<img
				className='card-slider__button card-slider__button_prev'
				src='img/left_orange.png'
				alt=''
				width='30px'
			/>
		</button>
	)
}
const OrangeRight = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className='slick-next'
			style={{ right: 0, zIndex: 110 }}
		>
			<img
				className='card-slider__button card-slider__button_next'
				src='img/right_orange.png'
				alt=''
				width='30px'
			/>
		</button>
	)
}

const Header = props => {
	const { citiesBase, current, currentID, showID, people, peopleBase } = props
	//const [city, setCity] = useState()
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <OrangeLeft />,
		nextArrow: <OrangeRight />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					//dots: false
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
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
			showID(current)
		}
	}, [showID, current])
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	useEffect(() => {
		people()
	}, [people])
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
	const support = peopleBase.filter(item => item.cities === current)
	const filterBase = citiesBase.filter(item => item.city === current)
	return (
		<>
			<HeaderBase city base={filterBase[0]} title={current} />
			<Section color='orange' title='Описание' type='description'>
				{filterBase && filterBase.map(item => item.body)}
			</Section>
			<Section color='black' title='Карта города' type='map'>
				<YMaps>
					{filterBase &&
						filterBase.map(item => {
							return (
								<Map
									key={item._id + 1}
									state={{
										center: [item.lat, item.lng],
										zoom: 12,
										//behaviors: ["nodrag", "scrollZoom"]
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
			{support && support.length > 0 && (
				<Section
					color='orange'
					title='Общественная поддержка города'
					type='description'
				>
					<Slider {...settings}>
						{support.map((item, id) => (
							<a key={id} rel="noopener noreferrer" href={`${item.link}`} target='_blank'>
								<CardSlider
									key={id}
									image={`https://pobeda75.online/upload/${item.avatar}`}
									alt={item.name}
									name={item.name}
									desc={item.desc}
								/>
							</a>
						))}
					</Slider>
				</Section>
			)}

			{filterBase &&
				filterBase.map(item => {
					return item.images.length > 0 && (
						<Section
							key={item._id + 1}
							color='black'
							title='Фото и видео'
							type='gallery'
						>
							{item.videos &&
								item.videos.map((video, id) => (
									<article key={id} className='gallery-card'>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href={`${video}`}
										>
											<div className='gallery-card__wrapper'>
												<div className='gallery-card__img-container'>
													<ReactPlayer
														width='100%'
														height='220px'
														url={`${video}`}
													/>
												</div>
											</div>
										</a>
									</article>
								))}
							{item.images.map((items, id) => {
								return (
									<article key={id} className='gallery-card'>
										<div
											className='gallery-card__wrapper'
											onClick={() => {
												setOpen({
													open: true,
													photo: `https://pobeda75.online/upload/${items}`,
												})
											}}
										>
											<div className='gallery-card__img-container'>
												<img
													src={`https://pobeda75.online/upload/${items}`}
													alt=''
													className='gallery-card__img'
												/>
											</div>
										</div>
									</article>
								)
							})}
							{open.open && (
								<LightBox
									mainSrc={open.photo}
									onCloseRequest={() => setOpen({ open: false })}
								/>
							)}
						</Section>
					)
				})}
		</>
	)
}

export default withRouter(
	connect(
		({ routeMap, People }) => ({
			citiesBase: routeMap.items,
			current: routeMap.currentID,
			peopleBase: People.items,
		}),
		{ ...routeAction, ...peopleAction },
	)(Header),
)
