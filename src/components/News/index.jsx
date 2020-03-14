import React from "react"
import PropTypes from "prop-types"
import { Icon } from "antd"
import { Link } from "react-router-dom"

import "./style.scss"
const News = props => {
	const { date, title, link, views, content } = props
	return (
		<>
			{!views && (
				<article className='news__block'>
					<Link to={`/news/${link}`}>
						<div className='news__block-date'>
							<Icon type='calendar' /> {date}
						</div>
						<div className='news__block-title'>
							<h3>{title}</h3>
						</div>
					</Link>
				</article>
			)}
			{views && (
				<div className='news__detail'>
					<div className='news__detail-date'>
						<Icon type='calendar' /> {date}
						<svg
							className='left-line'
							width='350'
							height='3'
							viewBox='0 0 350 3'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<line
								y1='1.5'
								x2='350'
								y2='1.5'
								stroke='url(#paint0_radial)'
								stroke-opacity='0.8'
								stroke-width='3'
							/>
							<defs>
								<radialGradient
									id='paint0_radial'
									cx='0'
									cy='0'
									r='1'
									gradientUnits='userSpaceOnUse'
									gradientTransform='translate(0 3) scale(290.5 74700)'
								>
									<stop stop-color='#1C1C1C' />
									<stop offset='1' stop-color='#1C1C1C' stop-opacity='0' />
								</radialGradient>
							</defs>
						</svg>
					</div>
					<div className='news__detail-title'>
						<h3>{title}</h3>
					</div>
					<div className='news__detail-content'>{content}</div>
				</div>
			)}
		</>
	)
}

News.propTypes = {
	date: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string,
	views: PropTypes.bool,
	content: PropTypes.string,
}

export default News
