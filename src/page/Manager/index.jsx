import React from "react"
import { Tabs } from "antd"
import { withRouter } from 'react-router-dom'

import { Section } from "../../components"
import { Cities, People, News, AdAdmin } from '../../container'
const Manager = props => {
	const { TabPane } = Tabs
	
	return (
		<Section title='Администрирование' color='orange' type='description'>
			<Tabs defaultActiveKey='1' tabPosition='left' style={{ height: "100%" }}>
				<TabPane tab={"Города"} key='1'>
					<Cities />
				</TabPane>
				<TabPane tab={"Реклама"} key='2'>
					<AdAdmin />
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

export default withRouter(Manager)
