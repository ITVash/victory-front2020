import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { routeAction } from "../../redux/actions"
import { Header as HeaderBase, Section, Maps } from "../../components"
const Header = props => {
	const { citiesBase, current, currentID, showID } = props
  const [city, setCity] = useState()

	useEffect(() => {
		const { pathname } = props.location
		const currents = pathname.split("/").pop()
		currentID(currents)
  }, [props.location.pathname, currentID])
  
	useEffect(() => {
		if (current) {
			showID(decodeURI(current))
    }
  }, [showID, current])
  
	return (
		<>
			<HeaderBase city base={citiesBase[0]} title={current} />
      <Section color='orange' title='Описание' type='description'>
        {citiesBase && (citiesBase.map(item => item.body ))}
      </Section>
      <Section color='black' title='Карта города' type='map'>
        <Maps base={citiesBase} coords={[citiesBase.map(item => item.lat), citiesBase.map(item => item.lng)]} />
      </Section>
      <Section color='orange' title='Общественная поддержка города' type='description'>
        тут поддержка города
      </Section>
      <Section color='black' title='Фото и видео' type='description'>
        тут фотки
      </Section>
		</>
	)
}

export default withRouter(
	connect(
		({ routeMap }) => ({
			citiesBase: routeMap.items,
			current: routeMap.currentID,
		}),
		{ ...routeAction },
	)(Header),
)
