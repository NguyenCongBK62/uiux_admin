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
import { prod_lines } from '../../../resources/product_lines';

const columns = [
    {
        title: 'Mã hàng',
        dataIndex: 'code',
    },
    {
        title: 'Tên mặt hàng',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Đơn vị thực hiện',
        dataIndex: 'pro_unit',
        key: 'pro_unit',
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
        onFilter: (value, record) => record.pro_unit.indexOf(value) === 0,
        sorter: (a, b) => a.pro_unit.length - b.pro_unit.length,
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
    {
        title: 'Ngày tạo',
        dataIndex: 'date_crd',
        sorter: (a, b) => a.date_crd.length - b.date_crd.length,
        sortDirections: ['descend', 'ascend'],
    },
]

const index = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [dataset, setDataset] = useState(prod_lines);
    const [id, setID] = useState(null);

    useEffect(() => {
        const setProductLine = () => {
            localStorage.setItem('products', JSON.stringify(prod_lines));
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
        const index = prod_lines.findIndex(item => item.key === id);
        if (index !== -1) {
            prod_lines.splice(index, 1);

            setDataset([...prod_lines]);
        }
    }
    
    return (
        <div className="table">
            <Card 
            title={`Bảng thông tin chuyền`}
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
        </div>
    );
}

export default index;
