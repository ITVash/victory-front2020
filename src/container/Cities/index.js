import React, { useState, useEffect } from "react"
import { Cities as CitiesBase } from "../../components"
import { connect } from "react-redux"

import { routeAction } from "../../redux/actions"
import { attachments } from "../../api"

const Cities = props => {
	const { citiesBases, cities, addRoute } = props
	const [photo, setPhoto] = useState()
	const [obj, setObj] = useState({
		city: "Город",
		photo: [],
		body: "Текст",
		lat: 0,
		lng: 0,
		visited: false,
		images: [],
		videos: [],
	})
	const addSlider = e => {
		const files = e.target.files
		const data = []
		const photo = []
		let items
		for (let i = 0; i < files.length; i++) {
			items = files[i]
			data.push(items.name)
			photo.push(items)
		}
		setObj({ ...obj, photo: data })
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
		if (photo.slider) {
			photo.slider.map(i => {
				data.append("file", i)
			})
		}
		if (photo.images) {
			photo.images.map(i => {
				data.append("file", i)
			})
		}
		attachments.add(data)
		addRoute(obj)
		setObj({
			city: "Город",
			photo: [],
			body: "Текст",
			lat: 0,
			lng: 0,
			visited: false,
			images: [],
			videos: [],
		})
		setPhoto({})
	}
	useEffect(() => {
		cities()
	}, [cities])

	window.obj = obj
	window.photo = photo
	return (
		<CitiesBase
			base={citiesBases}
			def={obj}
			set={setObj}
			addSlider={addSlider}
			images={images}
			save={save}
		/>
	)
}

export default connect(({ routeMap }) => ({ citiesBases: routeMap.items }), {
	...routeAction,
})(Cities)
