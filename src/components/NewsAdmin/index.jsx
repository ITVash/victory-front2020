import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Drawer, Input, Icon, Select } from "antd"

import "./style.scss"
const NewsAdmin = props => {
	const { base, def, set, addImages, save, currentID } = props

	const [cities, setCities] = useState(false)

	return (
		<div className='block'>
			<h3>Учасники</h3>
			<Button type='primary' onClick={() => setCities(true)}>
				Добавить новость...
			</Button>
			<Drawer
				title='Добавить/Редактировать Новость'
				width={720}
				onClose={() => setCities(false)}
				visible={cities}
				bodyStyle={{ paddingBottom: 80 }}
				footer={
					<div
						style={{
							textAlign: "right",
						}}
					>
						<Button onClick={() => setCities(false)} style={{ marginRight: 8 }}>
							Отмена
						</Button>
						<Button onClick={() => setCities(false)} type='primary'>
							Сохранить
						</Button>
					</div>
				}
			>
				<div className='create'>
					<div className='create__title'>
						<label htmlFor='title'>Название новости</label>
						<Input
							id='title'
							value={def.title}
							onChange={e => set({ ...def, title: e.target.value })}
						/>
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Текст новости</label>
						<Input.TextArea
							id='text'
							value={def.body}
							onChange={e => set({ ...def, body: e.target.value })}
						/>
					</div>
					<div className='create__slider'>
						<label htmlFor='slider'>Загрузите Фотографии</label>
						<input
							id='slider'
							type='file'
							onChange={e => addImages(e)}
							multiple
						/>
					</div>
					<div className='create__title'>
						<label htmlFor='title'>Ссылка на видео с Youtube</label>
						<Input
							id='title'
							//value={`ссылка`}
							onChange={e => set(prev => ({ ...prev, videos: prev.videos.concat(e.target.value)}))}
						/>
					</div>
					<div className='create__footer'>
						<div
							style={{
								textAlign: "right",
							}}
						>
							<Button
								onClick={() => {
									set({
										title: "Название",
										body: "Текст",
										images: [],
										videos: [],
									})
									setCities(false)
								}}
								style={{ marginRight: 8 }}
							>
								Отмена
							</Button>
							<Button
								onClick={() => {
									save()
									setCities(false)
								}}
								type='primary'
							>
								Сохранить
							</Button>
						</div>
					</div>
				</div>
			</Drawer>
			<div className='block__cities'>
				{base ? (
					base.map((item, id) => {
						return (
							<div className='block__cities-item' key={id}>
								{new Date(item.createdAt).toLocaleDateString("ru-RU")}{" "}
								{new Date(item.createdAt).toLocaleTimeString("ru-RU")}{" "}
								{item.title}{" "}
								<span>
									<Button
										onClick={() => {
											setCities(true)
											currentID(item._id)
											set(item)
										}}
									>
										<Icon theme='outlined' type='edit' />
									</Button>
									<Button>
										<Icon theme='outlined' type='delete' />
									</Button>
								</span>{" "}
							</div>
						)
					})
				) : (
					<span>Нету новостей для отображения </span>
				)}
			</div>
		</div>
	)
}

NewsAdmin.propTypes = {
	base: PropTypes.array || PropTypes.object,
}

export default NewsAdmin
