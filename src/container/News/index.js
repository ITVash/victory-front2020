import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { newsAction } from "../../redux/actions"
import { attachments } from "../../api"
import { NewsAdmin } from "../../components"

const News = props => {
  const { baseNews, current, currentIDN, news, updateNews, addNews } = props
  const [images, setImages] = useState({images:[]})
  const [ videos, setVideos] = useState(null)
	const [obj, setObj] = useState({
		title: "Название",
		body: "Текст",
		images: [],
		videos: [],
	})
	useEffect(() => {
		news()
	}, [news])
  const addImages = e => {
    const files = e.target.files
    const photo = []
    const data = []
    console.log('files', files)
    for (let i = 0; i < files.length; i++) {
      const item = files[i];
      data.push(item.name)
      photo.push(item)
    }
    setObj(prev => ({ ...prev, images: prev.images.concat(data) }))
    setImages(prev => ({ ...prev, images: prev.images.concat(photo) }))
  }
  window.obj = images
  const save = () => {
    const data = new FormData()
    if (images.images.length > 0) {
      images.images.map(item => {
        data.append('file', item)
      })
      attachments.add(data)
    }
    if (current === obj._id) {
			updateNews(current, obj)
		} else {
			addNews(obj)
		}
    setObj({
      title: "Название",
      body: "Текст",
      images: [],
      videos: [],
    })
    setImages({images:[]})
  }
	return (
		<NewsAdmin
			base={baseNews}
			currentID={currentIDN}
			current={current}
			def={obj}
			set={setObj}
      save={save}
      addImages={addImages}
		/>
	)
}

export default connect(
	({ News }) => ({ baseNews: News.items, current: News.currentID }),
	{ ...newsAction },
)(News)
