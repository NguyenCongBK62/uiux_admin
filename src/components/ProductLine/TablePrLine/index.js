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
import { prod_lines, listWork } from '../../../resources/product_lines';

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
    const [diagram, setDiagram] = useState(null);

    const [product, setProductt] = useState({
        code: '',
        name: null,
        time: '',
        date_crd: '',
        num_worker: null,
        pro_unit: null,
        note: '',
    });

    useEffect(() => {
        const setProductLine = () => {
            localStorage.setItem('products', JSON.stringify(prod_lines));
            localStorage.setItem('listWork', JSON.stringify(listWork));
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
                                onClick={() => {
                                    seenProLineEdit(prl.key)
                                }}
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
        setProductt(null);
        setDiagram(null);
        setIsVisibleStep1(!isVisibleStep1);
    }

    const toggleModalStep2 = () => {
        setProductt(null);
        setDiagram(null);
        setIsVisibleStep2(!isVisibleStep2);
    }

    const toggleModalCR = () => {
        setProductt(null);
        setDiagram(null);
        setIsVisibleCR(!isVisibleCR);
    }

    const seenProLine = (id) => {
        setIsVisibleCR(true);
    }

    const seenProLineEdit = (id) => {
        const list = JSON.parse(localStorage.getItem('products')) || [];
            if (list.length > 0 && id) {
                const productItem = list.find(item => item.key === id);
                setProductt({
                    key: productItem.key,
                    code: productItem.code,
                    name: productItem.name,
                    time: productItem.time,
                    date_crd: productItem.date_crd,
                    num_worker: productItem.num_worker,
                    pro_unit: productItem.pro_unit,
                    note: productItem.note,
                });
            }
        setIsVisibleStep1(true);
    }

    const editProductLine = (product_edit) => {
        const list = JSON.parse(localStorage.getItem('products')) || [];
        if (list.length > 0 && product.code) {
            const index = list.findIndex(item => item.key === product_edit.key);
            if (index !== -1) {
                list[index] = {...product_edit};

                setDataset([...list]);

                localStorage.setItem('products', JSON.stringify(list));
            }
        }

        const listWork = JSON.parse(localStorage.getItem('listWork')) || [];

        if (listWork.length > 0) {
            const dia = listWork.find(item => item.prd_id === 10);

            setDiagram({...dia});
        }
        setIsVisibleStep1(false);
        setIsVisibleStep2(true);
    }

    const editDiagram = (works) => {
        const listWork = JSON.parse(localStorage.getItem('listWork')) || [];

        if (listWork.length > 0 && diagram.prd_id) {
            const index = listWork.findIndex(item => item.prd_id === 10);
            if (index !== -1) {
                listWork[index] = {...works};

                localStorage.setItem('listWork', JSON.stringify(listWork));
            }
        }

        setIsVisibleStep2(false);
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
            {
                isVisibleStep1? <ModalStep1 isVisibleStep1={isVisibleStep1} handleEdit={editProductLine} handleSave={handleSave} handleCancel={toggleModal} product={product} /> :''
            }
            {isVisibleStep2?<ModalStep2 isVisibleStep2={isVisibleStep2} handleEdit={editDiagram} handleSaveStep2={handleSaveStep2} handleCancelStep2={toggleModalStep2} diagram={diagram} />:''}
            {isVisibleCR?<CrProLine isVisibleCR={isVisibleCR} closeModal={toggleModalCR} />:''}
        </Card>
        </div>
    );
}

export default index;
