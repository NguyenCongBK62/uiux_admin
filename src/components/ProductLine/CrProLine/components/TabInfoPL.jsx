/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import {  
    Form, 
    Select ,
    Input, 
    Row,
    Col
} from 'antd';

import {
    products,
    prod_units
} from '../../../../resources/products';

const { Option } = Select;

const TabInfoPL = (props) => {

    const [product, setProduct] = useState({
        key: 4,
        code: '1248v24',
        name: 'Quần thể dục bách khoa',
        time: 3500,
        pro_unit: 'HCI_08',
        date_crd: '29-05-2021',
        num_worker: 10,
        note: 'Nhớ xem hướng dẫn'
    });
    
    useEffect(() => {
        const getInfo = () => {
        }

        getInfo();
    }, []);

    return (
        <Form layout="vertical" >
            <Row>
                <Col span={12}>
                <Form.Item
                        name={`code`}
                        label={`Mã cho chuyền`}
                        rules={[
                            {
                                required: true,
                                type:'string'
                            },
                        ]}
                        
                    >
                        <Input 
                            placeholder="Nhập mã cho dây chuyền" 
                            defaultValue={product.code}
                        />
                    </Form.Item>
                    <Form.Item
                        name={`name`}
                        label={`Sản phẩm`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Lựa chọn sản phẩm"
                            optionFilterProp="children"
                            defaultValue={product.name}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                products.map((item) => {
                                    return (
                                        <Option value={item.name} key={item.id}>{item.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={`time`}
                        label={`Thời gian hoàn thành một sản phẩm (theo giây)`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        
                    >
                        <Input 
                            placeholder="Nhập số thời gian bằng giây" 
                            defaultValue={product.time}
                        />
                    </Form.Item>
                    <Form.Item
                        name={`workers`}
                        label={`Số công nhận cần tham gia (người)`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        
                    >
                        <Input 
                            placeholder="Nhập số người cần tham gia" 
                            defaultValue={product.num_worker}
                        />
                    </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                    <div className="vertical-line"></div>
                </Col>
                <Col span={10}>
                    <Form.Item
                        name={`pro_unit`}
                        label={`Nhóm sản xuất`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Lựa chọn nhóm"
                            optionFilterProp="children"
                            defaultValue={product.pro_unit}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                prod_units.map((item) => {
                                    return (
                                        <Option value={item.name} key={item.id}>{item.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={`note`}
                        label={`Ghi chú`}
                        rules={[
                            {
                                type:'string'
                            },
                        ]}
                    >
                        <Input.TextArea 
                            rows={12} 
                            defaultValue={product.note}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default TabInfoPL;
