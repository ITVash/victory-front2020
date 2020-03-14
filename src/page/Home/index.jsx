import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import { connect } from "react-redux"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Header, Section, Footer, CardSlider } from "../../components"
import { Maps } from "../../container"
import { peopleAction } from "../../redux/actions"
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
const BlackLeft = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className='slick-prev'
			style={{ left: 0, zIndex: 110 }}
		>
			<img
				className='card-slider__button card-slider__button_prev'
				src='img/left_black.png'
				alt=''
				width='30px'
			/>
		</button>
	)
}
const BlackRight = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className='slick-next'
			style={{ right: 0, zIndex: 110 }}
		>
			<img
				className='card-slider__button card-slider__button_next'
				src='img/right_black.png'
				alt=''
				width='30px'
			/>
		</button>
	)
}
const Home = props => {
	const { people, basePeople } = props

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
	const settingsRow = {
		//className: "center",
		//centerMode: true,
		infinite: true,
		arrows: true,
		prevArrow: <BlackLeft />,
		nextArrow: <BlackRight />,
		//centerPadding: "60px",
		slidesToShow: 5,
		rows: 3,
		slidesPerRow: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					rows: 3,
					slidesPerRow: 1,
					infinite: true,
					//dots: false
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					rows: 2,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					rows: 2,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					rows: 2,
					slidesPerRow: 1,
				},
			},
		],
	}
	const settingsRowOrg = {
		infinite: true,
		arrows: true,
		prevArrow: <BlackLeft />,
		nextArrow: <BlackRight />,
		slidesToShow: 5,
		rows: 3,
		slidesPerRow: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					rows: 3,
					slidesPerRow: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					rows: 2,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					rows: 1,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					rows: 1,
					slidesPerRow: 1,
				},
			},
		],
	}

	useEffect(() => {
		people()
	}, [people])

	const org = basePeople.filter(item => item.type === 0)
	const media = basePeople.filter(item => item.type === 2)
	const gos = basePeople.filter(item => item.type === 1)
	const obsh = basePeople.filter(item => item.type === 3)
	//const org2 = basePeople.filter(item => item.type === 4)

	return (
		<>
			<Header />
			<Section type='description' title='О проекте' color='orange' hover>
				<p>Проект «Наша Великая Победа» начал свое развитие с 2012 года.</p>
				<p>
					Зародился проект у активистов русских организаций Крыма, которые
					предложили весной 2012 года проводить ежегодно, в формате
					союзно-патриотической акции, - в период с 17 марта (дата Всесоюзного
					референдума 1991 года) по 9 мая, - эстафету памятных торжественных
					мероприятий, посвященных Победе Советского народа над
					немецко-фашистскими захватчиками.
				</p>
				<p>
					В 2012 – 2013 гг. Проект проводился при поддержке Комитета
					Государственной Думы Российской Федерации по делам СНГ и связями с
					соотечественниками. В 2014 – 2015 гг. проект поддержал Комитет Совета
					Федерации по обороне и безопасности. Также поддержку проекта
					осуществляли: Международный союз «Боевое Братство», Всероссийское
					созидательное движение «Русский Лад», КПРФ, Партия «Единая Россия»,
					Партия Регионов, Компартия Украины, Компартия Беларуси, Союз городов
					воинской славы.
				</p>
				<p>
					Весной 2020 года эстафету памятных торжественных мероприятий проекта
					«Наша Великая Победа» будет проходить в рамках организации масштабного
					союзно-патриотического автомобильного марша-эстафеты, с протяженностью
					около 25 тыс. км. По традиции,17 марта старт проекта начнется в
					городе-герое Севастополе, у подножья величественного монумента –
					«Памятника Солдату и Матросу».
				</p>
				<p>
					Каждый город – участник союзного проекта, символическим образом
					передает «эстафету памяти» следующему городу по маршруту следования.
				</p>
				<p>
					Марш-эстафета будет проходить в 110 городах, расположенных на
					территории России, Республики Беларусь, Донецкой и Луганской народных
					республик, Республики Абхазия, Республики Южная Осетия,
					Приднестровской Молдавской Республики, Республики Казахстан,
					Азербайджанской Республики.
				</p>
				<p>
					Марш-эстафета проекта закончится на XIV Союзном патриотическом
					лагере-форуме "Молодая Гвардия. Крым. Донузлав - 2020" 16 июля - 12
					августа 2020 года.
				</p>
			</Section>
			<Section type='map' title='Схема маршрута' color='black'>
				<Maps />
			</Section>
			{org && org.length > 0 && (
				<Section
					type='description'
					title='Организационный комитет'
					color='orange'
				>
					<Slider {...settingsRowOrg}>
						{org.map((item, id) => (
							<CardSlider
								key={id}
								image={`https://pobeda75.online/upload/${item.avatar}`}
								alt={item.name}
								name={item.name}
								desc={item.desc}
							/>
						))}
					</Slider>
				</Section>
			)}
			<section className='screen-section'>
				{gos && gos.length > 0 && (
					<>
						<div className='screen-section__title screen-section__title_black'>
							<h2>Государственная поддержка</h2>
						</div>
						<div className='wrapper'>
							<div className='description'>
								<Slider {...settings}>
									{gos.map((item, id) => {
										return (
											<CardSlider
												key={id}
												image={`https://pobeda75.online/upload/${item.avatar}`}
												alt={item.name}
												name={item.name}
												desc={item.desc}
											/>
										)
									})}
								</Slider>
							</div>
						</div>
					</>
				)}
				{media && media.length > 0 && (
					<>
						<div className='screen-section__title screen-section__title_orange'>
							<h2>Медиа поддержка</h2>
						</div>
						<div className='wrapper'>
							<div className='description'>
								<Slider {...settings}>
									{media.map((item, id) => {
										return (
											<a key={id} href={`${item.link}`} target="_blank" rel="noopener noreferrer"><CardSlider												
												image={`https://pobeda75.online/upload/${item.avatar}`}
												alt={item.name}
												name={item.name}
												desc={item.desc}
											/></a>
										)
									})}
								</Slider>
							</div>
						</div>
					</>
				)}
			</section>
			{obsh && obsh.length > 0 && (
				<Section
					color='black'
					title='Общественная поддержка и партнеры'
					type='description'
				>
					<Slider {...settingsRow}>
						{obsh.map((item, id) => {
							return (
								<CardSlider
									key={id}
									image={`https://pobeda75.online/upload/${item.avatar}`}
									alt={item.name}
									name={item.name}
									desc={item.desc}
								/>
							)
						})}
					</Slider>
				</Section>
			)}
			<Footer />
		</>
	)
}

Home.propTypes = {
	base: PropTypes.array,
}

export default connect(({ People }) => ({ basePeople: People.items }), {
	...peopleAction,
})(Home)
