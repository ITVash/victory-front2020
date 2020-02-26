import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Header, Section, Card, Footer, CardSlider, Maps } from "../../components"
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
	
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
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
	return (
		<>
			<Header />
			<Section type='description' title='О проекте' color='orange'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
				tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum
				necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi
				laudantium dolor quo.
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
					tempora aliquam debitis, numquam corporis nemo molestiae aperiam.
					Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis
					excepturi laudantium dolor quo.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
					tempora aliquam debitis, numquam corporis nemo molestiae aperiam.
					Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis
					excepturi laudantium dolor quo.
				</p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
				tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum
				necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi
				laudantium dolor quo.
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
					tempora aliquam debitis, numquam corporis nemo molestiae aperiam.
					Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis
					excepturi laudantium dolor quo.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
					tempora aliquam debitis, numquam corporis nemo molestiae aperiam.
					Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis
					excepturi laudantium dolor quo.
				</p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
				tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum
				necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi
				laudantium dolor quo.
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
					tempora aliquam debitis, numquam corporis nemo molestiae aperiam.
					Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis
					excepturi laudantium dolor quo.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo
					tempora aliquam debitis, numquam corporis nemo molestiae aperiam.
					Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis
					excepturi laudantium dolor quo.
				</p>
			</Section>
			<Section type='map' title='Схема маршрута' color='black'>
				<Maps />
			</Section>
			<Section
				type='description'
				title='Организационный комитет'
				color='orange'
			>
				<Slider {...settingsRowOrg}>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
				</Slider>
			</Section>
			<section className='screen-section'>
				<div className='screen-section__title screen-section__title_black'>
					<h2>Государственная поддержка</h2>
				</div>
				<div className='wrapper'>
					<div className="description">
						<Slider {...settings}>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
						</Slider>
					</div>
				</div>
				<div className='screen-section__title screen-section__title_orange'>
					<h2>Медиа поддержка</h2>
				</div>
				<div className='wrapper'>
					<div className="description">
						<Slider {...settings}>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
							<CardSlider
								image='img/org1.png'
								alt='Тайсаев Казбек Куцукович'
								name='Тайсаев Казбек Куцукович'
								desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
							/>
						</Slider>
					</div>
				</div>
			</section>
			<Section
				color='black'
				title='Общественная поддержка и партнеры'
				type='description'
			>
				<Slider {...settingsRow}>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
					<CardSlider
						image='img/org1.png'
						alt='Тайсаев Казбек Куцукович'
						name='Тайсаев Казбек Куцукович'
						desc='Заместитель Председателя Комитета ГД РФ по делам СНГ, евразийской интеграции и связям с соотечественниками'
					/>
				</Slider>
			</Section>
			<Footer />
		</>
	)
}

Home.propTypes = {}

export default Home
