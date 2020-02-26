import React from "react"
import PropTypes from "prop-types"

import { Header, Section, Footer, News as NewsBase } from "../../components"
const News = props => {
	const { view } = props
	return (
		<>
			<Header second />
			{!view && (
				<Section type='description' title='Новостной блог' color='orange'>
					<div className='news'>
						<NewsBase
							date='25.02.2020 10:00'
							title='Севастополь (город-герой), Ялта, Алушта, с. Чистенькое, Бахчисарай'
							link='oiuourwjllj13l12j'
						/>
						<NewsBase
							date='25.02.2020 10:00'
							title='Севастополь (город-герой), Ялта, Алушта, с. Чистенькое, Бахчисарай'
							link='oiuourwjllj13l12j'
						/>
						<NewsBase
							date='25.02.2020 10:00'
							title='Севастополь (город-герой), Ялта, Алушта, с. Чистенькое, Бахчисарай'
							link='oiuourwjllj13l12j'
						/>
						<NewsBase
							date='25.02.2020 10:00'
							title='Севастополь (город-герой), Ялта, Алушта, с. Чистенькое, Бахчисарай'
							link='oiuourwjllj13l12j'
						/>
						<NewsBase
							date='25.02.2020 10:00'
							title='Севастополь (город-герой), Ялта, Алушта, с. Чистенькое, Бахчисарай'
							link='oiuourwjllj13l12j'
						/>
					</div>
				</Section>
			)}
			{view && (
				<>
					<Section
						title='Новостной блог'
						color='orange'
						type='description'
          >
            <div className="news">
              <NewsBase
                date='25.02.2020 10:00'
                title='Севастополь (город-герой), Ялта, Алушта, с. Чистенькое, Бахчисарай'
                content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit autem, corporis doloremque porro similique odio rem totam fugit sit quasi corrupti possimus suscipit accusantium nihil numquam mollitia. Aspernatur asperiores consectetur molestiae consequatur facilis, natus enim recusandae ab aliquam unde sunt delectus aperiam commodi aut! Laudantium repellendus repudiandae molestias odit maiores incidunt obcaecati quidem facere eos aliquam modi, corporis pariatur accusamus magnam tempora nulla, corrupti nihil placeat ducimus illo, consequatur dolorum illum expedita! Praesentium reprehenderit rem, eaque libero sed esse rerum, quia eum quo dolorem accusantium itaque. Fugit doloremque similique temporibus, voluptatibus commodi voluptates. Blanditiis placeat cupiditate sapiente dolore ab! Ex!'
                views
              />
            </div>
          </Section>
					<Section
						title='Фото и видео'
						color='black'
						type='description'
					></Section>
				</>
			)}
			<Footer />
		</>
	)
}

News.propTypes = {
	view: PropTypes.bool,
}

export default News
