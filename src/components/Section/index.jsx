import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import './style.scss'

const Section = props => {
	const { color, children, title, type, hover } = props
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
				<div className={classNames(`${type}`, {hover: hover})}>{children}
				</div>
			</div>
		</section>
	)
}

Section.propTypes = {
	color: PropTypes.oneOf(["orange", "black"]),
	title: PropTypes.string,
	type: PropTypes.string,
	hover: PropTypes.bool
}

export default Section
