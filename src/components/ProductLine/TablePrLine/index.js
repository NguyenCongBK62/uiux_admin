/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

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

import CrProLine from '../CrProLine';

const columns = [
    {
        title: 'Mã hàng',
        dataIndex: 'code',
        filters: [
            {
                text: 'HCI_01',
                value: 'HCI_01',
            },
            {
                text: 'HCI_02',
                value: 'HCI_02',
            },
            {
                text: 'HCI_05',
                value: 'HCI_05',
            },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.code.indexOf(value) === 0,
    },
    {
        title: 'Tên mặt hàng',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Thời gian hoàn thành (giây)',
        dataIndex: 'time',
        sorter: (a, b) => a.time - b.time,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Số công nhân thực hiện',
        dataIndex: 'num_worker',
        sorter: (a, b) => a.num_worker - b.num_worker,
        sortDirections: ['descend', 'ascend'],
    },
]

const data = [
    {
        key: '1',
        code: 'HCI_01',
        name: 'Áo khoác HANU',
        time: 3603,
        num_worker: 20
    },
    {
        key: '2',
        code: 'HCI_07',
        name: 'Áo cộc bách khoa',
        time: 3609,
        num_worker: 25,
    },
    {
        key: '3',
        code: 'HCI_05',
        name: 'Quần thể dục bách khoa',
        time: 3606,
        num_worker: 30
    }
]

const index = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [dataset, setDataset] = useState(data);
    const [id, setID] = useState(null);

    useEffect(() => {
        const setProductLine = () => {
            localStorage.setItem('products', JSON.stringify(data));
            columns.push(
                {
                    title: 'Hành động',
                    key: 'action',
                    render: (prl) => (
                        <div className="icons-list mx-2">
                            <EyeTwoTone 
                                style={{fontSize: '16px'}} 
                                twoToneColor="#52c41a"
                                onClick={() => { seenProLine(prl.key); }}
                            />&nbsp;&nbsp;
                            <EditTwoTone 
                                style={{fontSize: '16px'}} 
                                twoToneColor="#ffec3d" 
                                onClick={() => { console.log("EyeTwoTone") }}
                            />&nbsp;&nbsp;
                            <DeleteTwoTone 
                                style={{fontSize: '16px'}} 
                                twoToneColor="#ff4d4f"
                                onClick={() => { deleteProLine(prl.key); }}
                            />
                        </div>
                    )
                }
            );
        }
        setProductLine();
    }, []);

    const handleChange = (pagination, sorter) => {
        console.log('Various parameters', pagination, sorter);
    };

    const toggleModal = () => {
        setIsVisible(!isVisible);
    }

    const seenProLine = (id) => {
        setID(id);
        toggleModal();
    }

    const deleteProLine = (id) => {
        const index = data.findIndex(item => item.key === id);
        if (index !== -1) {
            data.splice(index, 1);

            setDataset([...data]);
        }
    }
    
    return (
        <Card 
            title={`Bảng thông tin chuyển`}
            extra={
                <Button 
                    type="primary" shape="round" 
                    icon={<PlusCircleTwoTone />}
                    onClick={toggleModal}
                >Thêm mới</Button>
            } 
        >
            <Table columns={columns} dataSource={dataset} onChange={handleChange} />
            <Modal 
                title="Thêm mới chuyền" 
                visible={isVisible} 
                onOk={toggleModal} 
                onCancel={toggleModal}
                centered
                width={1200}
            >
                <CrProLine id={id} />
            </Modal>
        </Card>
    );
}

export default index;
