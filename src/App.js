import React, { useEffect, useState } from "react"
//import { post } from 'axios'
import moment from "moment"
import { Switch, Route } from 'react-router-dom'
//import 'moment-countdown'
import "moment/locale/ru"

import { Home, About, Cities, News, Donuzlav } from './page'
moment.locale("ru")

const App = () => {
	/*const [timer, setTimer] = useState({
		dd: 0,
		hh: 0,
		mm: 0,
  })
  console.log(timer)*/
	//const [file, setFile] = useState(null)
	/*const handleChange = e => {
    const files = e.target.files
    const data = []
    let items
    for (let i = 0; i < files.length; i++) {
      items = files[i]
      data.push({
        items,
        clientID:'5e48fa7a55f0b81e382728b4'
      })
    }
    setFile(data)
    console.log('object', e.target.files)
  }
  const handleClick = () => {
    const datas = new FormData()
    file.map(item => {
      datas.append('file', item.items)
    })
    datas.append('clientID', '5e48fa7a55f0b81e382728b4')
    post(`http://localhost:4000/api/attachments`, datas)
      .then(({ data }) => { console.log('data', data) })
    
  }
  window.filezzz = file*/
	/**
   * <h1>Начало работы!</h1>
      <input type="file" multiple onChange={e => handleChange(e)} />
      <button onClick={ handleClick }>ЗАГРУЗИТЬ</button>
   */

	//let time

	/*const timer = () => {
    const now = new Date()
    const auto = '2020-03-15 08:00:00'
    time = moment(now).countdown(auto).toString()
    //setInterval(()=>{timer()}, 500)
  }*/
	/*useEffect(() => {
		const now = moment()
		const auto = "2020-03-15 08:00:00"
		setInterval(() => {
			const till = moment(auto)
			const countdown = moment(till - now)
			const dd = countdown.format("D")
			const hh = countdown.format("HH")
			const mm = countdown.format("mm")
			setTimer({ dd, hh, mm })
		}, 500)
	}, [])*/
	/*const ofDay = h => {
		if (h <= 20 && h >= 5) return "дней"
		if (h >= 2 && h <= 4) return "дня"
		if (h === 1) return "день"
		if (h === 0) return "дней"
	}
	const ofHour = h => {
		if (h <= 20 && h >= 5) return "часов"
		if (h >= 2 && h <= 4) return "часа"
		if (h >= 22 && h <= 24) return "часа"
		if (h === 1 || h === 21) return "час"
		if (h === 0) return "часов"
  }
  const ofMinuts = h => {
    if (h === 1 || h === 21 || h === 31 || h === 41 || h === 51) return 'минуту'
    if (h >= 2 && h <= 4) return 'минуты'
    if (h >= 22 && h <= 24) return 'минуты'
    if (h >= 32 && h <= 34) return 'минуты'
    if (h >= 42 && h <= 44) return 'минуты'
    if (h >= 52 && h <= 54) return 'минуты'
    if (h >= 5 && h <= 59) return 'минут'
	}*/
  /**
   * <div>
				<span>
					Старт приложения через {timer.dd}{" "}
          {ofDay(timer.dd)} {timer.hh} {ofHour(timer.hh)} {timer.mm} {ofMinuts(timer.mm)}!
				</span>
			</div>
   */
	return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/:id" render={() => <News view />} />
        <Route exact path="/donuzlav" component={Donuzlav} />
      </Switch>
		</div>
	)
}

export default App
