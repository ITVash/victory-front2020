import React, { useState } from "react"
import Slider from "react-slick"
import LightBox from "react-image-lightbox"

import { Header, Section, Footer } from "../../components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-image-lightbox/style.css"
import "./style.scss"

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

const About = props => {
	const settings = {
		className: "center",
		centerMode: true,
		//infinite: true,
		centerPadding: "40px",
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		arrows: true,
		prevArrow: <OrangeLeft />,
		nextArrow: <OrangeRight />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					centerPadding: "0px",
					//infinite: true,
					//dots: false
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "100px",
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "90px",
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "40px",
				},
			},
		],
	}
	const [photo, setPhoto] = useState({
		open: false,
		photo: null,
	})
	return (
		<>
			<Header second />
			<Section type='description' title='О проекте' color='orange'>
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
			<section className='screen-section'>
				<div className='wrapper'>
					<div className='description about-slider'>
						<Slider {...settings}>
							<div
								onClick={() => {
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0001.jpg",
									})
								}}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0001.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0002.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0002.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0003.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0003.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0004.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0004.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0005.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0005.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0006.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0006.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0007.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0007.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0008.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0008.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0009.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0009.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0010.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0010.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0011.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0011.jpg'
									alt='0001'
								/>
							</div>
							<div
								onClick={() =>
									setPhoto({
										open: true,
										photo:
											"/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0012.jpg",
									})
								}
							>
								<img
									className='about-clider__img'
									src='/polozhenie/Polozhenie_Proekta_NVP_2020 (1)_page-0012.jpg'
									alt='0001'
								/>
							</div>
						</Slider>
						{photo.open && (
							<LightBox
								mainSrc={photo.photo}
								onCloseRequest={() => setPhoto({ open: false })}
							/>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default About
