import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import LightBox from "react-image-lightbox"

import { newsAction } from "../../redux/actions"
import { Header, Section, Footer, News as NewsBase } from "../../components"

const News = props => {
	const { view, news, baseNews, currentIDN, current } = props
	const [open, setOpen] = useState({
		open: false,
		photo: null,
	})
	useEffect(() => {
		news()
	}, [news])
	useEffect(() => {
		const { pathname } = props.location
		const current = pathname.split("/").pop()
		currentIDN(current)
	}, [props.location.pathname, currentIDN, props.location])
	const fullNews = baseNews.filter(item => item._id === current)
	window.full = fullNews
	return (
		<>
			<Header second />
			{!view && (
				<Section type='description' title='Новостной блог' color='orange'>
					<div className='news'>
						{baseNews &&
							baseNews.map((item, id) => (
								<NewsBase
									key={id}
									date={`${new Date(item.createdAt).toLocaleDateString(
										"ru-RU",
									)} ${new Date(item.createdAt).toLocaleTimeString("ru-RU")}`}
									title={item.title}
									link={item._id}
								/>
							))}
					</div>
				</Section>
			)}
			{view && (
				<>
					<Section title='Новостной блог' color='orange' type='description'>
						<div className='news'>
							{fullNews &&
								fullNews.map(item => (
									<NewsBase
										key={item._id}
										date={`${new Date(item.createdAt).toLocaleDateString(
											"ru-RU",
										)} ${new Date(item.createdAt).toLocaleTimeString("ru-RU")}`}
										title={item.title}
										content={item.body}
										views
									/>
								))}
						</div>
					</Section>
					<Section title='Фото и видео' color='black' type='gallery'>
						{fullNews &&
							fullNews.map(item => {
								return item.images ? (
									item.images.map((items, id) => (
										<article key={id} className='gallery-card'>
											<div
												className='gallery-card__wrapper'
												onClick={() => {
													setOpen({
														open: true,
														photo: `http://localhost:4000/upload/${items}`,
													})
												}}
											>
												<div className='gallery-card__img-container'>
													<img
														src={`http://localhost:4000/upload/${items}`}
														alt=''
														className='gallery-card__img'
													/>
												</div>
											</div>
										</article>
									))
								) : (
									<span>Нет фото для показа</span>
								)
							})}
						{open.open && (
							<LightBox
								mainSrc={open.photo}
								onCloseRequest={() => setOpen({ open: false })}
							/>
						)}
					</Section>
				</>
			)}
			<Footer />
		</>
	)
}

News.propTypes = {
	view: PropTypes.bool,
}

export default withRouter(
	connect(({ News }) => ({ baseNews: News.items, current: News.currentID }), {
		...newsAction,
	})(News),
)
