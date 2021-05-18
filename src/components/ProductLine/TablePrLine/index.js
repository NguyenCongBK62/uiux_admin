/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import { 
    Table, 
    Card,
    Button,
    Modal
} from 'antd'

import {
    EyeTwoTone,
    EditTwoTone,
    DeleteTwoTone,
    PlusCircleTwoTone
} from '@ant-design/icons'

const data = [
    {
        _key: '1',
        _code: 'HCI_01',
        _name: 'Áo khoác bách khoa',
        _time: 3606,
        _num_worker: 20
    },
    {
        _key: '2',
        _code: 'HCI_07',
        _name: 'Áo cộc bách khoa',
        _time: 3606,
        _num_worker: 20,
    },
    {
        _key: '3',
        _code: 'HCI_05',
        _name: 'Quần thể dục bách khoa',
        _time: 3606,
        _num_worker: 20
    }
]

const index = () => {
    const [sortedInfo, setSortedInfo] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    const handleChange = (pagination, sorter) => {
        console.log('Various parameters', pagination, sorter);
        setSortedInfo(sorter);
    };

    const toggleModal = () => {
        setIsVisible(!isVisible);
    }
    
    const columns = [
        {
            title: 'Mã hàng',
            dataIndex: '_code',
            key: '_code',
            sorter: (a, b) => a._code.length - b._code.length,
            sortOrder: sortedInfo.columnKey === '_code' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Tên mặt hàng',
            dataIndex: '_name',
            key: '_name',
            sorter: (a, b) => a._name.length - b._name.length,
            sortOrder: sortedInfo.columnKey === '_name' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Thời gian hoàn thành (giây)',
            dataIndex: '_time',
            key: '_time',
            sorter: (a, b) => a._time - b._time,
            sortOrder: sortedInfo.columnKey === '_time' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Số công nhân thực hiện',
            dataIndex: '_num_worker',
            key: '_num_worker',
            sorter: (a, b) => a._num_worker - b._num_worker,
            sortOrder: sortedInfo.columnKey === '_num_worker' && sortedInfo.order,
            ellipsis: true,
        },
        {
            title: 'Hành động',
            key: 'action',
            render: () => (
                <div className="icons-list mx-2">
                    <EyeTwoTone 
                        style={{fontSize: '16px'}} 
                        twoToneColor="#52c41a"
                        onClick={() => { console.log("EyeTwoTone") }}
                    />&nbsp;&nbsp;
                    <EditTwoTone 
                        style={{fontSize: '16px'}} 
                        twoToneColor="#ffec3d" 
                        onClick={() => { console.log("EyeTwoTone") }}
                    />&nbsp;&nbsp;
                    <DeleteTwoTone 
                        style={{fontSize: '16px'}} 
                        twoToneColor="#ff4d4f"
                        onClick={() => { console.log("EyeTwoTone") }}
                    />
                </div>
            )
        }
    ]

    return (
        <div>
            <Card title="Bảng thông tin chuyền" 
                extra={
                    <Button 
                        type="primary" shape="round" 
                        icon={<PlusCircleTwoTone />}
                        onClick={toggleModal}
                    >Thêm mới</Button>
                } 
            >
                <Table columns={columns} dataSource={data} onChange={handleChange} />
            </Card>
            <Modal title="Thêm mới chuyền" visible={isVisible} onOk={toggleModal} onCancel={toggleModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
}

export default index;
