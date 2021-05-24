/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

import { Tabs } from 'antd';

import TabInfoPL from './components/TabInfoPL';
import AssignCharge from './components/AssignCharge';
import Diagram from './components/Diagram';

const { TabPane } = Tabs;

const index = (props) => {

    const { id } = props;

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getInfo = () => {
            const products = JSON.parse(localStorage.getItem('products')) || [];
            if (products.length > 0 && id) {
                let info = products.find(item => item.key === id);
                console.log(info);
                setProduct(info);
            }
        }

        getInfo();
    }, [id])

    return (
        <Tabs type="card">
            <TabPane tab={`Thông tin cơ bản`} key={1}>
                <TabInfoPL product={product} />
            </TabPane>
            <TabPane tab={`Thiết kế chuỗi công việc`} key={2}>
                {/* <div>Thiết kế chuỗi công việc</div> */}
                <div><Diagram /></div>
            </TabPane>
            <TabPane tab={`Phân công phụ trách`} key={3}>
                {/* <div>Phân công phụ trách</div> */}
                <AssignCharge id={id} />
            </TabPane>
        </Tabs>
    );
}

export default index;
