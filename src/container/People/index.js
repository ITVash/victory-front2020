import React, { useState, useEffect } from "react"

import { People as PeopleBase } from "../../components"
import { connect } from "react-redux"

import { routeAction, peopleAction } from "../../redux/actions"
import { attachments } from "../../api"

const People = props => {
	const {
		citiesBases,
		cities,
		currentIDP,
		current,
		addPeople,
		updatePeople,
		peopleBase,
		people,
	} = props
	const [photo, setPhoto] = useState()
	const [obj, setObj] = useState({
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
	const addSlider = e => {
		const files = e.target.files
		const data = []
		const photo = []
		let items
		for (let i = 0; i < files.length; i++) {
			items = files[i]
			//data.push(items.name)
			setObj({ ...obj, avatar:items.name })
			photo.push(items)
		}
		setPhoto({ ...photo, slider: photo })
	}
	const images = e => {
		const files = e.target.files
		const data = []
		const images = []
		let items
		for (let i = 0; i < files.length; i++) {
			items = files[i]
			data.push(items.name)
			images.push(items)
		}
		setObj({ ...obj, images: data })
		setPhoto({ ...photo, images: images })
	}
	const save = () => {
		const data = new FormData()
		if (photo && photo.slider) {
			photo.slider.map(i => {
				data.append("file", i)
			})
		}
		if (photo && photo.images) {
			photo.images.map(i => {
				data.append("file", i)
			})
		}
		if (photo && photo.images || photo && photo.slider) {
			attachments.add(data)
		}
		if (current === obj._id) {
			updatePeople(current, obj)
		} else {
			addPeople(obj)
		}
		setObj({
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
		setPhoto(null)
		currentIDP(null)
	}
	useEffect(() => {
		cities()
		people()
	}, [cities, people])

	window.obj = obj
	window.photo = photo
	return (
		<PeopleBase
			base={peopleBase}
			city={citiesBases}
			currentID={currentIDP}
			def={obj}
			set={setObj}
			addSlider={addSlider}
			images={images}
			save={save}
		/>
	)
}

export default connect(
	({ routeMap, People }) => ({
		citiesBases: routeMap.items,
		current: People.currentID,
		peopleBase: People.items,
	}),
	{
		...routeAction, ...peopleAction
	},
)(People)
