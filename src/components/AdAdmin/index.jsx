import React, { useState } from "react"
import { Button, Drawer, Input, Icon, Select } from "antd"

import "./style.scss"
const AdAdmin = props => {
	const { base, def, set, addLogo, save, deleteAd, city, currentID } = props

	const [cities, setCities] = useState(false)
	const { Option } = Select

	return (
		<div className='block'>
			<h3>Рекламный блок</h3>
			<Button type='primary' onClick={() => setCities(true)}>
				Добавить рекламу...
			</Button>
			<Drawer
				title='Добавить/Редактировать Рекламу'
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
							Сохранитьmm
						</Button>
					</div>
				}
			>
				<div className='create'>
					<div className='create__title'>
						<label htmlFor='title'>Название Компании</label>
						<Input
							id='title'
							value={def.title}
							onChange={e => set({ ...def, title: e.target.value })}
						/>
					</div>
					<div className='create__slider'>
						<label htmlFor='slider'>Загрузите Логотип</label>
						<input
							id='slider'
							type='file'
							onChange={e => addLogo(e)}		
						/>
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Тип</label>
						<Select
							id='text'
							value={def.type}
							onChange={e => set({ ...def, type: e })}
							style={{width:'100%'}}
						>
							<Option value="Тип">Выберете Тип</Option>
							<Option value="Kofe">Кафе</Option>
							<Option value="Apteka">Аптека</Option>
							<Option value="Nedvij">Недвижимость</Option>
							<Option value="Park">Парк</Option>
							<Option value="Restorany">Ресторан</Option>
							<Option value="Sport">Спортзал</Option>
							<Option value="Stroitelstvo">Строительная компания</Option>
							<Option value="Urist">Юрист</Option>
							<Option value="Zapravka">Заправка</Option>
						</Select>
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Город</label>
						<Select
							id='text'
							value={def.city}
							onChange={e => set({ ...def, city: e })}
							style={{ width: '100%' }}
							showSearch
						>
							<Option value="Город">Выберете Город</Option>
							{city && city.map((item, id) => (
								<Option key={id} value={item.city}>{item.city}</Option>
							))}
						</Select>
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Текст</label>
						<Input.TextArea
							id='text'
							value={def.body}
							onChange={e => set({ ...def, body: e.target.value })}
						/>
					</div>
					<div className='create__title'>
						<label htmlFor='title'>Широта</label>
						<Input
							id='title'
							value={def.lat}
							onChange={e => set({...def, lat: e.target.value})}
						/>
					</div>
					<div className='create__title'>
						<label htmlFor='title'>Долгота</label>
						<Input
							id='title'
							value={def.lng}
							onChange={e => set({...def, lng: e.target.value})}
						/>
					</div>
					<div className='create__title'>
						<label htmlFor='title'>Ссылка</label>
						<Input
							id='title'
							value={def.link}
							onChange={e => set({...def, link: e.target.value})}
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
										logo: "Логотип",
										title: "Название",
										type: "Тип",
										city: "Город",
										body: "Текст",
										lat: 0,
										lng: 0,
										link: "Ссылка",
									})
									setCities(false)
								}}
								style={{ marginRight: 8 }}
							>
								Отмена
							</Button>
							<Button
								onClick={() => {
									//addVideo()
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
								
								{item.title}{" "}{item.type}{" "}{item.city}
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
									<Button onClick={() => deleteAd(item._id)}>
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

export default AdAdmin