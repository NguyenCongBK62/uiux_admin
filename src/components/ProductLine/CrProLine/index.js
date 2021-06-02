/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

import { 
    Tabs,
    Modal, 
} from 'antd';

import TabInfoPL from './components/TabInfoPL';
import AssignCharge from './components/AssignCharge';

const { TabPane } = Tabs;

const index = (props) => {

    const { id, isVisibleCR } = props;

    return (
        <div>
            <Modal
                title="Thêm mới chuyền" 
                visible={isVisibleCR} 
                onOk={
                    props.handleSave
                } 
                onCancel={props.closeModal}
                centered
                width={1200}
            >
                <Tabs type="card">
                    <TabPane tab={`Thông tin cơ bản`} key={1}>
                        <TabInfoPL id={id} />
                    </TabPane>
                    <TabPane tab={`Thiết kế chuỗi công việc`} key={2}>
                        <AssignCharge id={id} />
                    </TabPane>
                </Tabs>
            </Modal>
        </div>
    );
}

export default index;
