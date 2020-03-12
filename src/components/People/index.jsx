import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Drawer, Input, Icon, Select } from "antd"

import "./style.scss"
const People = props => {
	const { base, def, set, addSlider, save, currentID, city } = props

	const [cities, setCities] = useState(false)
	const { Option } = Select
	const types = [
		"Организационный комитет",
		"Государственная поддержка",
		"Медиа поддержка",
		"Общественная поддержка и партнеры",
		"Общественная поддержка города",
	]
	return (
		<div className='block'>
			<h3>Учасники</h3>
			<Button type='primary' onClick={() => setCities(true)}>
				Добавить учасника...
			</Button>
			<Drawer
				title='Добавить/Редактировать Учасника'
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
						<label htmlFor='title'>Имя учасника</label>
						<Input
							id='title'
							value={def.name}
							onChange={e => set({ ...def, name: e.target.value })}
						/>
					</div>
					<div className='create__desc'>
						<label htmlFor='desc'>Описание</label>
						<Input
							id='desc'
							value={def.desc}
							onChange={e => set({ ...def, desc: e.target.value })}
						/>
					</div>
					<div className='create__slider'>
						<label htmlFor='slider'>Загрузите Аватар</label>
						<input id='slider' type='file' onChange={e => addSlider(e)} />
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Тип</label>
						<Select
							style={{ width: "100%" }}
							defaultValue='Выберете тип!'
							value={types[def.type]}
							//value={def.type}
							onChange={e => set({ ...def, type: e })}
						>
							<Option value='0'>Организационный комитет</Option>
							<Option value='1'>Государственная поддержка</Option>
							<Option value='2'>Медиа поддержка</Option>
							<Option value='3'>Общественная поддержка и партнеры</Option>
							<Option value='4'>Общественная поддержка города</Option>
						</Select>
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Город</label>
						<Select
							style={{ width: "100%" }}
							defaultValue='Выберете город!'
							value={def.cities}
							onChange={e => set({ ...def, cities: e })}
						>
							{city &&
								city.map((item, id) => {
									return (
										<Option key={id} value={item.city}>
											{item.city}
										</Option>
									)
								})}
						</Select>
					</div>
					<div className='create__text'>
						<label htmlFor='text'>Информация</label>
						<Input.TextArea
							id='text'
							value={def.body}
							onChange={e => set({ ...def, body: e.target.value })}
						/>
					</div>
					<div className='create__link'>
						<label htmlFor='link'>Ссылка</label>
						<Input
							id='link'
							value={def.link}
							onChange={e => set({ ...def, link: e.target.value })}
						/>
					</div>
					<div className='create__soc'>
						<label htmlFor=''>Соц. сети</label> <br/>
						<label htmlFor='vk'>VK</label>
						<Input
							id='vk'
							value={def.soc.vk}
							placeholder='VK'
							onChange={e => set({ ...def, soc: {...def.soc, vk: e.target.value } })}
						/>
						<label htmlFor='fb'>Facebook</label>
						<Input
							id='fb'
							value={def.soc.fb}
							placeholder='Facebook'
							onChange={e => set({ ...def, soc: {...def.soc, fb: e.target.value} })}
						/>
						<label htmlFor='ins'>Instagram</label>
						<Input
							id='ins'
							value={def.soc.ins}
							placeholder='Instagram'
							onChange={e => set({ ...def, soc: {...def.soc, ins: e.target.value} })}
						/>
						<label htmlFor='site'>Сайт</label>
						<Input
							id='site'
							value={def.soc.site}
							placeholder='Сайт'
							onChange={e => set({ ...def, soc: { ...def.soc, site: e.target.value } })}
						/>
						<label htmlFor='tw'>Twitter</label>
						<Input
							id='tw'
							value={def.soc.tw}
							placeholder='Twitter'
							onChange={e => set({ ...def, soc: {...def.soc, tw: e.target.value} })}
						/>
						<label htmlFor='you'>Youtube</label>
						<Input
							id='you'
							value={def.soc.you}
							placeholder='Youtube'
							onChange={e => set({ ...def, soc: {...def.soc, you: e.target.value} })}
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
										avatar: "",
										type: 0,
										cities: "",
										name: "Имя",
										desc: "Описание",
										body: "Текст",
										link: "Ссылка",
										soc: {
											vk: "Ссылка",
											fb: "Ссылка",
											ins: "Ссылка",
											site: "Ссылка",
											you: "Ссылка",
											tw: "Ссылка",
										}
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
								<img
									src={`http://localhost:4000/upload/${item.avatar}`}
									alt={`${item.name}`}
								/>
								{item.name}{" "}
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
					<span>Нету людей для отображения </span>
				)}
			</div>
		</div>
	)
}

People.propTypes = {
	base: PropTypes.array || PropTypes.object,
}

export default People
