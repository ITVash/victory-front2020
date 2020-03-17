import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { AdAdmin as AdAdminBase } from "../../components"
import { adAction, routeAction } from "../../redux/actions"
import { attachments } from "../../api"

const AdAdmin = props => {
	const { showAd, adBase, updateAd, addAd, deleteAd, cities, city, current, currentIDA } = props
	const [logo, setLogo] = useState({ logo: [] })
	const [obj, setObj] = useState({
		logo: "Логотип",
		title: "Название",
		type: "Тип",
		city: "Город",
		body: "Текст",
		lat: 0,
		lng: 0,
		link: "Ссылка",
	})
	const addLogo = e => {
		const files = e.target.files
		const photo = []
		const data = []
		for (let i = 0; i < files.length; i++) {
			const item = files[i]
			data.push(item.name)
			photo.push(item)
		}
		setObj(prev => ({ ...prev, logo: data[0] }))
		setLogo(prev => ({ ...prev, logo: photo }))
	}
	
  useEffect(() => {
		cities()
		showAd()
  }, [showAd, cities])
  
	const save = () => {
		const data = new FormData()
		if (logo.logo.length > 0) {
			logo.logo.map(item => data.append("file", item))
			attachments.add(data)
		}
		if (current === obj._id) {
			//debugger
			updateAd(current, obj)
		} else {
			addAd(obj)
		}
		setLogo({ logo: [] })
		currentIDA(null)
		setObj({
			logo: "Логотип",
			title: "Название",
			type: "Тип",
			city: "Город",
			body: "Текст",
			lat: 0,
			lng: 0,
			link: "Ссылка",
		})
	}
	
	return (
		<AdAdminBase
			def={obj}
			set={setObj}
			save={save}
			base={adBase}
			city={city}
      addLogo={addLogo}
      deleteAd={deleteAd}
      currentID={currentIDA}
		/>
	)
}

export default connect(
	({ Ad, routeMap }) => ({ adBase: Ad.items, city: routeMap.items, current: Ad.currentID }),
	{ ...adAction, ...routeAction },
)(AdAdmin)
