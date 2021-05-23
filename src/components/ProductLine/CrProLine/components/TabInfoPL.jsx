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

    const [requiredMark, setRequiredMarkType] = useState('optional');
    const [product, setProduct] = useState({
        name: null,
        time: '',
        workers: '',
        pro_unit: null,
        note: '',
    });

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const onFinish = (values) => {
        console.log(values)
    }

    useEffect(() => {
        if (props.product) {
            console.log(props.product)
            setProduct({
                ...props.product, 
                name: props.product.name,
                time: props.product.time,
                workers: props.product.num_worker,
                pro_unit: props.product.code,
                note: 'Lien he voi quan ly kho'
            });
        }
    }, [props]);

    return (
        <Form onFinish={onFinish} layout="vertical" 
            initialValues={{
                requiredMarkValue: requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
        >
            <Row>
                <Col span={12}>
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
                                type:'number'
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
                                type: 'number'
                            },
                        ]}
                        
                    >
                        <Input 
                            placeholder="Nhập số người cần tham gia" 
                            defaultValue={product.workers}
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
