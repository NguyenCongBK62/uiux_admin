import React from 'react';

import { Tabs } from 'antd';

import GroupMonth from '../components/GroupMonth';

const { TabPane } = Tabs;

const KPIGroup = (props) => {

    return (
        <div className="table">
            <Tabs type="card">
                {/* <TabPane tab={`Theo giờ`} key="1">
                    <GroupHour />
                </TabPane> */}
                <TabPane tab={`Theo tháng`} key="2">
                    <GroupMonth />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default KPIGroup;
