import React, { useState, useEffect } from "react"
import { Cities as CitiesBase } from "../../components"
import { connect } from "react-redux"

import { routeAction } from "../../redux/actions"
import { attachments } from "../../api"

const Cities = props => {
	const { citiesBases, cities, addRoute, currentID, current, updateRouteMap } = props
	const [photo, setPhoto] = useState({
		slider: null,
		photo: null
	})
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
	const [video, setVideo] = useState("")
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
		setObj(prev => ({ ...prev, photo: data }))
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
		setObj(prev => ({...prev, images: prev.images.concat(data) }))
		setPhoto(prev => ({ ...prev, images: prev.images.concat(images) }))
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
			updateRouteMap(current, obj)
		} else {
			addRoute(obj)
		}
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
		setPhoto({
			slider: null,
			photo: null
		})
		currentID(null)
		setVideo("")
	}
	useEffect(() => {
		cities()
	}, [cities])

	window.obj = obj
	window.photo = photo
	return (
		<CitiesBase
			base={citiesBases}
			currentID={currentID}
			def={obj}
			set={setObj}
			addSlider={addSlider}
			images={images}
			save={save}
			video={video}
			setVideo={setVideo}
		/>
	)
}

export default connect(({ routeMap }) => ({ citiesBases: routeMap.items, current: routeMap.currentID }), {
	...routeAction,
})(Cities)
