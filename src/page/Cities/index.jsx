import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

import "./style.scss"

import { routeAction } from "../../redux/actions"
import { Header, Section, Footer } from "../../components"
const Cities = props => {
	const { cities, baseCity } = props

	useEffect(() => {
		cities()
	}, [cities])
	return (
		<>
			<Header second />
			<Section type='' title='Города' color='orange'>
				<ol className='cities'>
					{baseCity &&
						baseCity.map((item, id) => (
							<li key={id} className='cities__item-container'>
								<Link to={`/cities/${item.city}`} className='cities__item'>
									{item.city}
								</Link>
							</li>
						))}
				</ol>
			</Section>
			<Footer />
		</>
	)
}

export default connect(({ routeMap }) => ({ baseCity: routeMap.items }), {
	...routeAction,
})(Cities)
