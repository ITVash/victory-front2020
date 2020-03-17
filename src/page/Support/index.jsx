import React, { useEffect } from "react"
import { connect } from "react-redux"

import { Header, Section, Footer } from "../../components"
import { peopleAction } from "../../redux/actions"

import "./style.scss"

const Support = props => {
	const { peopleBase, people } = props
	useEffect(() => {
		people()
	}, [people])
	//const org = peopleBase.filter(item => item.type === 0)
	const gos = peopleBase.filter(item => item.type === 1)
	const media = peopleBase.filter(item => item.type === 2)
	const obsh = peopleBase.filter(item => item.type === 3)
	return (
		<>
			<Header second />
			<Section type='support-cards' color='orange' title='Наша поддержка'>
				{gos &&
					gos.map((item, id) => (
						<div key={id} className='support-card'>
							<div className='support-card__wrapper'>
								<div className='support-card__image-container'>
									<img
                    src={`https://pobeda75.online/upload/${item.avatar}`}
										alt={item.name}
										className='support-card__image'
									/>
								</div>
								<div className='support-card__about'>
									<h3 className='support-card__title'>Описание</h3>
									<div className='support-card__description'>
										{item.desc}
									</div>
								</div>
							</div>
						</div>
					))}
				{media &&
					media.map((item, id) => (
						<div key={id} className='support-card'>
							<div className='support-card__wrapper'>
								<div className='support-card__image-container'>
									<img
                    src={`https://pobeda75.online/upload/${item.avatar}`}
										alt={item.name}
										className='support-card__image'
									/>
								</div>
								<div className='support-card__about'>
									<h3 className='support-card__title'>Описание</h3>
									<div className='support-card__description'>
										{item.desc}
									</div>
								</div>
							</div>
						</div>
					))}
				{obsh &&
					obsh.map((item, id) => (
						<div key={id} className='support-card'>
							<div className='support-card__wrapper'>
								<div className='support-card__image-container'>
									<img
                    src={`https://pobeda75.online/upload/${item.avatar}`}
										alt={item.name}
										className='support-card__image'
									/>
								</div>
								<div className='support-card__about'>
									<h3 className='support-card__title'>Описание</h3>
									<div className='support-card__description'>
										{item.desc}
									</div>
								</div>
							</div>
						</div>
					))}
			</Section>
			<Footer />
		</>
	)
}

export default connect(({ People }) => ({ peopleBase: People.items }), {
	...peopleAction,
})(Support)
