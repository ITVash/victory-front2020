import React, { useState } from "react"
import { Select } from "antd"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./style.scss"

const { Option } = Select

const Header = props => {
	const { second } = props
	const [open, setOpen] = useState(false)
	return (
		<header className={classNames('maim-screen', {'second': second})}>
			<div className='nav-wrapper'>
				<div className='nav'>
					<div className='nav__section nav__section_1'>
						<img src='img/flag.png' alt='' className='nav__flag' />

						<div className='seartch-input'>
							<input
								type='input'
								name=''
								className='seartch-input__input'
								placeholder='Выберите ваш город'
							/>
							<button className='seartch-input__button'></button>
						</div>
					</div>

					<div className='nav__section nav__section_2'>
						<div alt='' className='nav__orden'></div>
					</div>

					<div className='nav__section nav__section_3'>
						<div className='lang-switcher'>
							<span className='lang-switcher__lang lang-switcher__lang_active'>
								Ru
							</span>
							<span className='lang-switcher__lang'>En</span>
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

			<div className={classNames('slider', {'second': second})}>
				<img src='img/slide.png' alt='' className='slider__slide' />

				<div className='slider-buttons'>
					<span className='slider-buttons__button slider-buttons__button_active'></span>
					<span className='slider-buttons__button'></span>
					<span className='slider-buttons__button'></span>
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {
	second: PropTypes.bool
}

export default Header
