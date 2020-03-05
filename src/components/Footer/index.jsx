import React from "react"

import "./style.scss"

const Footer = () => {
	let fb =
		"https://www.facebook.com/75-%D0%BB%D0%B5%D1%82-%D0%9D%D0%B0%D1%88%D0%B0-%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F-%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0-106156270982734/"
	let vk = "https://vk.com/pobeda75_online"
	let you = "https://www.youtube.com/channel/UCt6uIg3k24yoeq9EmQpn9Gg"
	let mail = "mailto:nashapobeda75@gmail.com"
	let phone = "tel:+380173679656"

	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__section footer__section_1'>
					<a href={phone} className='footer__icon'>
						<img src='/img/whatsapp.png' alt='' />
					</a>
					<a href={mail} className='footer__icon'>
						<img src='/img/mail.png' alt='' />
					</a>
				</div>

				<div className='footer__section footer__section_2'>© ITD company</div>

				<div className='footer__section footer__section_3'>
					<a href={vk} className='footer__icon'>
						<img src='/img/vk.png' alt='' />
					</a>
					<a href={fb} className='footer__icon'>
						<img src='/img/facebook.png' alt='' />
					</a>
					<a href={fb} className='footer__icon'>
						<img src='/img/insta.png' alt='' />
					</a>
					<a href={you} className='footer__icon'>
						<img src='/img/youtube.png' alt='' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
