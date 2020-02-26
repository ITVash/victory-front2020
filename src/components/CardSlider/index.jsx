import React from "react"
import PropTypes from "prop-types"

import './style.scss'

const CardSlider = props => {
  const { image, alt, name, desc } = props
	return (
		<article className='card'>
			<div className='card__wrapepr'>
				<div className='card__img-container'>
					<img src={`${image}`} alt={alt} className='card__img' />
				</div>

				<h3 className='card__title'>{name}</h3>

				<p className='card__description'>
					{desc}
				</p>
			</div>
		</article>
	)
}

CardSlider.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
}

export default CardSlider
