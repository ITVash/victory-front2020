import React, { useState } from "react"
import PropTypes from "prop-types"
import { Tabs, Button, Drawer, Input, Upload } from "antd"
import { UploadOutlined } from "@ant-design/icons-svg"

import { Section } from "../../components"
import { Cities, People, News } from '../../container'
const Manager = props => {
	const { TabPane } = Tabs
	
	return (
		<Section title='Администрирование' color='orange' type='description'>
			<Tabs defaultActiveKey='1' tabPosition='left' style={{ height: "100%" }}>
				<TabPane tab={"Города"} key='1'>
					<Cities />
				</TabPane>
				<TabPane tab={"Реклама"} key='2'>
					Реклама
				</TabPane>
				<TabPane tab={"Учасники"} key='3'>
					<People />
				</TabPane>
				<TabPane tab={"Новости"} key='4'>
					<News />
				</TabPane>
				<TabPane tab={"Стримы"} key='5'>
					Стримы
				</TabPane>
			</Tabs>
		</Section>
	)
}

Manager.propTypes = {}

export default Manager
