import React from "react"
import ReactPlayer from 'react-player'

import { Header, Section, Footer } from "../../components"
const Donuzlav = props => {
	return (
		<>
			<Header photo title='Донузлав' don />
			<section className='screen-section'>
				<div className='screen-section__title screen-section__title_orange'>
					<h2>Описание</h2>
				</div>
				<div className='wrapper'>
					<div className='description'>
						Комитетом по молодежной политике Ростовской области при поддержке
						Федерального агентства по делам молодежи (Росмолодежь) запланировано
						проведение молодежного образовательного форума Южного федерального
						округа «Ростов» и федеральной площадки «Молодые аграрии»,
						участниками которого станут более 1000 молодых людей, включая
						студентов высших учебных заведений Ростовской области. В работе
						форума примет участие молодежь в возрасте от 18 до 30 лет
					</div>
				</div>

				<div className='screen-section__title screen-section__title_black'>
					<h2>Социальные сети</h2>
				</div>

				<div className='wrapper'>
					<div className='organistors'>
						<article className='card'>
							<div className='card__wrapepr'>
								<div className='card__img-container'>
									<img src='./img/03.png' alt='' className='card__img' />
								</div>

								<h3 className='card__title'>Виктор Дерябкин</h3>

								<p className='card__description'>
									Депутат Государственной Думы Федерального Собрания РФ
								</p>
							</div>
						</article>

						<article className='card'>
							<div className='card__wrapepr'>
								<div className='card__img-container'>
									<img src='./img/05.png' alt='' className='card__img' />
								</div>

								<h3 className='card__title'>Виктор Дерябкин</h3>

								<p className='card__description'>
									Депутат Государственной Думы Федерального Собрания РФ
								</p>
							</div>
						</article>

						<article className='card'>
							<div className='card__wrapepr'>
								<div className='card__img-container'>
									<img src='./img/02.png' alt='' className='card__img' />
								</div>

								<h3 className='card__title'>Виктор Дерябкин</h3>

								<p className='card__description'>
									Депутат Государственной Думы Федерального Собрания РФ
								</p>
							</div>
						</article>

						<article className='card'>
							<div className='card__wrapepr'>
								<div className='card__img-container'>
									<img src='./img/01.png' alt='' className='card__img' />
								</div>

								<h3 className='card__title'>Виктор Дерябкин</h3>

								<p className='card__description'>
									Депутат Государственной Думы Федерального Собрания РФ
								</p>
							</div>
						</article>

						<article className='card'>
							<div className='card__wrapepr'>
								<div className='card__img-container'>
									<img src='./img/04.png' alt='vk' className='card__img' />
								</div>

								<h3 className='card__title'>Виктор Дерябкин</h3>

								<p className='card__description'>
									Депутат Государственной Думы Федерального Собрания РФ
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>
			<Section type='gallery' title='Фото и видео' color='orange'>
			<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=Lip1_ci4PA0&feature=emb_logo'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<ReactPlayer width='100%' height='200px' url='https://www.youtube.com/watch?v=Lip1_ci4PA0&feature=emb_logo' />
						</div>
					</div></a>
				</article>
				<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://vk.com/album-38844336_257010845'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<img
								src='https://sun9-19.userapi.com/c850336/v850336413/2a60d/sfOJL4Xw8Ok.jpg'
								alt=''
								className='gallery-card__img'
							/>
						</div>
					</div></a>
				</article>
				<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://vk.com/album-38844336_248179446'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<img
								src='https://sun9-19.userapi.com/c639220/v639220945/453cb/7hU0bJjDWfU.jpg'
								alt=''
								className='gallery-card__img'
							/>
						</div>
					</div></a>
				</article>
				<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://vk.com/album-38844336_235639831'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<img
								src='https://sun9-30.userapi.com/c636631/v636631771/209a2/kuZXcoyc40g.jpg'
								alt=''
								className='gallery-card__img'
							/>
						</div>
					</div></a>
				</article>
				<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://vk.com/album-38844336_219532738'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<img
								src='https://sun9-14.userapi.com/c627823/v627823573/1435f/yKBfL3gFeUU.jpg'
								alt=''
								className='gallery-card__img'
							/>
						</div>
					</div></a>
				</article>
				<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://vk.com/album-38844336_219442930'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<img
								src='https://sun9-43.userapi.com/c627823/v627823573/12fad/jKchU_Ew3mk.jpg'
								alt=''
								className='gallery-card__img'
							/>
						</div>
					</div></a>
				</article>
				<article className='gallery-card'>
					<a target="_blank" rel="noopener noreferrer" href='https://vk.com/album-38844336_200324080'><div className='gallery-card__wrapper'>
						<div className='gallery-card__img-container'>
							<img
								src='https://sun2.48276.userapi.com/fUrp5WEJ12bZQ_1Is4hkv4qqbwSrKapGJO6oQw/84ZTLm1C9Es.jpg'
								alt=''
								className='gallery-card__img'
							/>
						</div>
					</div></a>
				</article>
			</Section>
			<Footer />
		</>
	)
}

export default Donuzlav
