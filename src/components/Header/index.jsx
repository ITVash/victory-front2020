import React, { useState, useEffect } from "react"
import { Select, Icon } from "antd"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Link, useHistory } from "react-router-dom"
import Slider from "react-slick"
import { connect } from "react-redux"

import "./style.scss"

import { routeAction } from '../../redux/actions'



const Header = props => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 10000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
	}
	const { Option } = Select
	const history = useHistory()
	const onChange = value => {
		currentID(value)
		history.push(`/cities/${value}`)
	}
	const { second, city, base, photo, title, don, cities, baseRoute, currentID } = props
	const [open, setOpen] = useState(false)
	useEffect(() => {
		cities()
	}, [cities])
	const loadScroll = () => {
		const scroll = document.querySelector(".scroll_top")
		if (window.pageYOffset >= 800) {
			scroll.classList.add("show")
		} else {
			scroll.classList.remove("show")
		}
	}
	window.onscroll = loadScroll
	const toTop = () => {
		window.scrollTo(0, 0)
	}
	/**
	 * <span className='lang-switcher__lang lang-switcher__lang_active'>
								Ru
							</span>
							<span className='lang-switcher__lang'>En</span>
	 */
	return (
		<> <div className="scroll_top" onClick={toTop}><Icon type="arrow-up" theme="outlined" /></div>
		<header className={classNames("maim-screen", { second: second })}>
			<div className='nav-wrapper'>
				<div className='nav'>
					<div className='nav__section nav__section_1'>
						<Link to="/"><img src='/img/flag.png' alt='' className='nav__flag' /></Link>

						<div className='seartch-input'>
							<Select
								showSearch
								//className='seartch-input__input'
								placeholder='Выберите ваш город'
								style={{ width: "100vw" }}
								optionFilterProp='children'
								onChange={onChange}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
									0
								}
							>
								{baseRoute && baseRoute.map((item, id) => (
									<Option key={id} value={item.city}>{item.city}</Option>
								))}
							</Select>
						</div>
					</div>

					<div className='nav__section nav__section_2'>
						{!title ? (
							<div alt='' className='nav__orden'></div>
						) : (
							<h1 className='nav__advert-header'>{title}</h1>
						)}
					</div>

					<div className='nav__section nav__section_3'>
						<div className='lang-switcher'>
						<span className='lang-switcher__lang lang-switcher__lang_active'>
								{" "}
							</span>
								<span className='lang-switcher__lang'>{" "}</span>
						</div>

						<div
							className={classNames("overlay", { open: open })}
							onClick={() => {
								setOpen(false)
								const bodyClass = document.querySelector("body")
								bodyClass.classList.remove("locked")
							}}
						>
							<nav className='overlayMenu'>
								<ul role='menu'>
									<li>
										<Link to='/' role='menuitem'>
											Главная
										</Link>
									</li>
									<li>
										<Link to='/about' role='menuitem'>
											О проекте
										</Link>
									</li>
									<li>
										<Link to='/cities' role='menuitem'>
											Города
										</Link>
									</li>
									<li>
										<Link to='/news' role='menuitem'>
											Новостной блог
										</Link>
									</li>
									<li>
										<Link to='/donuzlav' role='menuitem'>
											Лагерь Донузлав
										</Link>
									</li>
									<li>
										<Link to='/support' role='menuitem'>
											Наша поддержка
										</Link>
									</li>
									<li>
										<Link to='/contacts' role='menuitem'>
											Контакты
										</Link>
									</li>
								</ul>
							</nav>
						</div>

						<div
							className={classNames("navBurger", { active: open })}
							role='navigation'
							id='navToggle'
							onClick={() => {
								setOpen(!open)
								const bodyClass = document.querySelector("body")
								bodyClass.classList.toggle("locked")
							}}
						></div>
					</div>
				</div>
			</div>

			<div
				className={classNames(
					{ slider: !city },
					{ slider: !don },
					{ photo: don },
					{ photo: city },
					{ second: second },
				)}
			>
				{photo && (
					<img src='/img/donuzlav.png' alt='Донузлав' className='photo__img' />
				)}
				{!city && !don && (
					<Slider {...settings}>
						<div className='slider'>
							<div className='slider__gradient-overlay'>
								<span>
									Союзный общественно-патриотический <br /> проект <br />
									“НАША ВЕЛИКАЯ ПОБЕДА”
								</span>
							</div>
							<img src='/img/1.jpg' alt='' className='slider__slide' />
						</div>
						<div className='slider'>
							<div className='slider__gradient-overlay'></div>
							<img src='/img/2.jpg' alt='' className='slider__slide' />
						</div>
						<div className='slider'>
							<div className='slider__gradient-overlay'>
								<span>
									Союзный общественно-патриотический
									<br />
									проект <br />
									“НАША ВЕЛИКАЯ ПОБЕДА”
								</span>
							</div>
							<img src='/img/3.png' alt='' className='slider__slide' />
						</div>
					</Slider>
				)}
				{city && (
					<Slider {...settings}>
						{base &&
							base.photo.map((item, id) => {
								return (
									<div className='photo' key={id}>
										<div className='photo__orden'></div>
										<img
											src={`https://pobeda75.online/upload/${item}`}
											alt={base.city}
											className='photo__img'
										/>
									</div>
								)
							})}
					</Slider>
				)}
			</div>
		</header></>
	)
}

Header.propTypes = {
	second: PropTypes.bool,
	city: PropTypes.bool,
	photo: PropTypes.bool,
	title: PropTypes.string,
}

export default connect(({routeMap}) => ({baseRoute: routeMap.items}), {...routeAction})(Header)
