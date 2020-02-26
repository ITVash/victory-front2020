import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
const Section = props => {
	const { color, children, title, type } = props
	return (
		<section className='screen-section'>
			<div
				className={classNames(
					"screen-section__title",
					`screen-section__title_${color}`,
				)}
			>
				<h2>{title}</h2>
			</div>
			<div className='wrapper'>
				<div className={`${type}`}>{children}
				{type==='card-sliders' && 
					<><img className="card-slider__button card-slider__button_prev" src="img/left_orange.png" alt="" />
					<img className="card-slider__button card-slider__button_next" src="img/right_orange.png" alt="" /></>
				}
				{type==='card-slider card-slider_big' && 
					<><img className="card-slider__button card-slider__button_prev" src="img/left_black.png" alt="" />
					<img className="card-slider__button card-slider__button_next" src="img/right_black.png" alt="" /></>
				}
				</div>
			</div>
		</section>
	)
}

Section.propTypes = {
	color: PropTypes.oneOf(["orange", "black"]),
	title: PropTypes.string,
	type: PropTypes.string
}

export default Section
