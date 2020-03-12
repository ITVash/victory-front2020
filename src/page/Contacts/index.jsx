import React from "react"

import "./style.scss"

import { Header, Footer, Section } from "../../components"
const Contacts = props => {
	return (
		<>
			<Header second />
			<Section type='description' color='orange' title='Контактная информация'>
				<section className='contact-section contact-section_underline'>
					<div className='wrapper'>
						<h2 className='contact-section__header'>Номера</h2>

						<div className='contact-section__phones'>
							<p>+79950060572 - Whatsapp</p>
							<p>+79950060572 - Viber</p>
						</div>
					</div>
				</section>

				<section className='contact-section contact-section_underline'>
					<div className='wrapper'>
						<h2 className='contact-section__header'>Почта</h2>

						<div className='contact-section__phones'>
							<p className='contact-section__item'>
								nashapobeda75@gmail.com -{" "}
								<span className='contact-section__info'>
									можно вставить краткое описание для чего эта почта
								</span>
							</p>
							<p className='contact-section__item'>
								itdwebcompany@gmail.com -{" "}
								<span className='contact-section__info'>
									можно вставить краткое описание для чего эта почта
								</span>
							</p>
							<p className='contact-section__item'>
								al.al.semenov@mail.ru -{" "}
								<span className='contact-section__info'>
									можно вставить краткое описание для чего эта почта
								</span>
							</p>
						</div>
					</div>
				</section>

				<section className='contact-section'>
					<div className='wrapper'>
						<h2 className='contact-section__header'>Контактные лица</h2>

						<div className='cards'>
							<div className='contact-card'>
								<div className='contact-card__wrapper'>
									<div className='contact-card__image-container'>
										<img
											className='contact-card__image'
											src='img/con1.jpg'
											alt=''
										/>
									</div>
									<div className='contact-card__title'>
										Ельников Алексей Алексеевич
									</div>
									<div className='contact-card__description'>
										Заместитель председателя РОД “Патриотические силы Донбасса”
										(г. Донецк) ДНР
									</div>
									<div className='contact-card__contacts'>
										<div className='contact-card__phones'>
											<div className='contact-card__title'>Номера</div>
											<div className='contact-card__phone'>+79780728789</div>
											<div className='contact-card__phone'>+380713523262</div>
										</div>
										<div className='contact-card__socials'>
											<a
												href='https://vk.com/nezvanniy_alex'
												className='footer__icon'
											>
												<img src='img/vk.png' alt='' />
											</a>
											<a
												href='https://www.instagram.com/nezvanniy01/'
												className='footer__icon'
											>
												<img src='img/insta.png' alt='' />
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className='contact-card'>
								<div className='contact-card__wrapper'>
									<div className='contact-card__image-container'>
										<img
											className='contact-card__image'
											src='img/con2.jpg'
											alt=''
										/>
									</div>
									<div className='contact-card__title'>
										Лисицын Михаил Александрович
									</div>
									<div className='contact-card__description'>
										Заместитель председателя РОД “Патриотические силы Донбасса”
										(г. Донецк) ДНР
									</div>
									<div className='contact-card__contacts'>
										<div className='contact-card__phones'>
											<div className='contact-card__title'>Номера</div>
											<div className='contact-card__phone'>+79064187882</div>
											<div className='contact-card__phone'>+79064187882</div>
										</div>
										<div className='contact-card__socials'>
											<a
												href='https://vk.com/id21931631'
												className='footer__icon'
											>
												<img src='img/vk.png' alt='' />
											</a>
											<a
												href='https://www.instagram.com/mishasem_donetsk/'
												className='footer__icon'
											>
												<img src='img/facebook.png' alt='' />
											</a>							
										</div>
									</div>
								</div>
							</div>

							<div className='contact-card'>
								<div className='contact-card__wrapper'>
									<div className='contact-card__image-container'>
										<img
											className='contact-card__image'
											src='img/org1.png'
											alt=''
										/>
									</div>
									<div className='contact-card__title'>
										Семенов Александр Александрович
									</div>
									<div className='contact-card__description'>
										Заместитель председателя РОД “Патриотические силы Донбасса”
										(г. Донецк) ДНР
									</div>
									<div className='contact-card__contacts'>
										<div className='contact-card__phones'>
											<div className='contact-card__title'>Номера</div>
											<div className='contact-card__phone'>+79296392006</div>
											<div className='contact-card__phone'>+380713344935</div>
										</div>
										<div className='contact-card__socials'>
											<a href='https://vk.com/id390660284' className='footer__icon'>
												<img src='img/vk.png' alt='' />
											</a>
											<a href='https://www.instagram.com/semenov_al_al/' className='footer__icon'>
												<img src='img/facebook.png' alt='' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Section>
			<Footer />
		</>
	)
}

export default Contacts
