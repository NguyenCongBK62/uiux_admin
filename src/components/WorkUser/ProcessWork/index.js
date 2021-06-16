import React from 'react';

import { Tabs } from 'antd';
import './style.css';

import DetailWork from './DetailWork';
import Progress from './Process';

const { TabPane } = Tabs;

const index = () => {
    return (
        <div style={{marginBottom: '10px', paddingTop: '3.2rem', marginLeft: '15px'}}>
            <Tabs defaultActiveKey={1} >
                <TabPane tab={`Chi tiết công việc`} key={1}>
                    <DetailWork />
                </TabPane>
                <TabPane tab={`Thực hiện công việc`} key={2}>
                    <Progress />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
