import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Drawer, Input, Icon } from "antd"

import './style.scss'
const Cities = props => {
	const { base, def, set, addSlider, images, save } = props

	const [cities, setCities] = useState(false)
	console.log('base', base)
	return (
		<div className='block'>
			<h3>Города</h3>
			<Button type='primary' onClick={() => setCities(true)}>
				Добавить город...
			</Button>
			<Drawer
				title='Добавить/Редактировать город'
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
						<label htmlFor='title'>Название города</label>
						<Input id='title' value={def.city} onChange={e=> set({...def, city: e.target.value})} />
					</div>
					<div className='create__slider'>
						<label htmlFor='slider'>Загрузите картинки для слайдера</label>
						<input
							id='slider'
							type='file'
							multiple
							onChange={e => addSlider(e)}
						/>
					</div>
					<div className='create__lat'>
						<label htmlFor='lat'>Широта</label>
						<Input id='lat' value={def.lat} onChange={e=> set({...def, lat: e.target.value})} />
					</div>
					<div className='create__lng'>
						<label htmlFor='lng'>Долгота</label>
						<Input id='lng' value={def.lng} onChange={e=> set({...def, lng: e.target.value})} />
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Информация</label>
						<Input.TextArea id='text' value={def.body} onChange={e=> set({...def, body: e.target.value})} />
					</div>
					<div className='create__photo'>
						<label htmlFor='photo'>Загрузите фотографии</label>
						<input
							id='photo'
							type='file'
							multiple
							onChange={e => images(e)}
						/>
					</div>
					<div className="create__footer">
					<div
						style={{
							textAlign: "right",
						}}
					>
						<Button onClick={() => setCities(false)} style={{ marginRight: 8 }}>
							Отмена
						</Button>
							<Button onClick={() => { save(); setCities(false) }} type='primary'>
							Сохранить
						</Button>
					</div>
					</div>
				</div>
			</Drawer>
			<div className='block__cities'>
				{base ? base.map((item, id) => {
					return (<div className='block__cities-item' key={id}><img src={`http://localhost:4000/upload/${item.photo[0]}`} alt={`${item.city}`} />{item.city}</div>)
				}) : <span>Нету городов для отображения </span>}
			</div>
		</div>
	)
}

Cities.propTypes = {
	base: PropTypes.array || PropTypes.object
}

export default Cities
