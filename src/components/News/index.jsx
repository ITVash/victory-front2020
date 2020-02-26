import React from "react"
import PropTypes from "prop-types"
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

import './style.scss'
const News = props => {
	const { date, title, link, views, content } = props
	return (<>
		{!views && <article className='news__block'>
			<Link to={`/news/${link}`}><div className='news__block-date'>
				<Icon type='calendar' /> {date}
			</div>
				<div className='news__block-title'>
					<h3>
						{title}
					</h3>
				</div></Link>
		</article>}
		{views && (
			<div className="news__detail">
				<div className="news__detail-date">
					<Icon type='calendar' /> {date}
				</div>
				<div className='news__detail-title'>
					<h3>
						{title}
					</h3>
				</div>
				<div className="news__detail-content">
					{content}
				</div>
			</div>
		)}
	</>)
}

News.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
	link: PropTypes.string,
	views: PropTypes.bool,
	content: PropTypes.string
}

export default News
