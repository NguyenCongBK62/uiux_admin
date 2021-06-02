/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

import { 
    Table, 
    Card,
    Button,
} from 'antd'

import {
    EyeTwoTone,
    EditTwoTone,
    DeleteTwoTone,
    PlusCircleTwoTone
} from '@ant-design/icons'

import CrProLine from '../CrProLine';
import ModalStep1 from './components/ModalStep1';
import ModalStep2 from './components/ModalStep2';
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

    const [isVisibleStep1, setIsVisibleStep1] = useState(false);
    const [isVisibleStep2, setIsVisibleStep2] = useState(false);
    const [isVisibleCR, setIsVisibleCR] = useState(false);
    const [dataset, setDataset] = useState(prod_lines);
    const [maxKey, setMaxKey] = useState(prod_lines[prod_lines.length-1].key);
    const [productItem, setProduct] = useState(null);
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

    const handleSave = (product) => {
        product = {...product, key: maxKey +1};
        setProduct(product);
        setIsVisibleStep1(false);
        setIsVisibleStep2(true);
    }

    const handleSaveStep2 = (works) => {
        let work = {...works};
        work = {...works, prd_id: productItem.key};

        const listWork = [];
        const products = dataset;

        listWork.push(work);
        products.push(productItem);

        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('listWork', JSON.stringify(listWork));

        setMaxKey(maxKey + 1);
        setDataset([...products]);
        setIsVisibleStep2(false);
    }

    const handleChange = (pagination, sorter) => {
        console.log('Various parameters', pagination, sorter);
    };

    const toggleModal = () => {
        setIsVisibleStep1(!isVisibleStep1);
    }

    const toggleModalStep2 = () => {
        setIsVisibleStep2(!isVisibleStep2);

    }

    const toggleModalCR = () => {
        setIsVisibleCR(!isVisibleCR);
    }

    const seenProLine = (id) => {
        setID(id);
        setIsVisibleCR(true);
    }

    const deleteProLine = (id) => {
        const index = prod_lines.findIndex(item => item.key === id);
        if (index !== -1) {
            prod_lines.splice(index, 1);

            localStorage.setItem('products', JSON.stringify(prod_lines));
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
            <ModalStep1 isVisibleStep1={isVisibleStep1} handleSave={handleSave} handleCancel={toggleModal} />
            <ModalStep2 isVisibleStep2={isVisibleStep2} handleSaveStep2={handleSaveStep2} handleCancelStep2={toggleModalStep2} />
            <CrProLine isVisibleCR={isVisibleCR} id={id} closeModal={toggleModalCR} />
        </Card>
        </div>
    );
}

export default index;
