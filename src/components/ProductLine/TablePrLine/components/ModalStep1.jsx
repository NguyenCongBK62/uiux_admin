import React, { useState }from 'react';

import {
    Form, 
    Select ,
    Input, 
    Row,
    Col,
    Modal,
    Button
} from 'antd';

import {
    products,
    prod_units
} from '../../../../resources/products';

const { Option } = Select;

const ModalStep1 = (props) => {

    const [product, setProduct] = useState({
        code: '',
        name: null,
        time: '',
        date_crd: '',
        num_worker: null,
        pro_unit: null,
        note: '',
    });

    const handleFinish = () => {
        var date = new Date();
        let item = product;

        item = {...item, date_crd: date.toJSON()};

        setProduct({
            code: '',
            name: null,
            time: '',
            date_crd: '',
            num_worker: null,
            pro_unit: null,
            note: '',
        });

        props.handleSave(item);
    }

    return (
        <div>
            <Modal
                title="Thêm mới chuyền" 
                visible={props.isVisibleStep1} 
                onOk={
                    props.handleSave
                } 
                onCancel={props.handleCancel}
                centered
                width={1200}
                footer={[
                    <Button key="back" type="danger" onClick={props.handleCancel}>
                        Huỷ
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleFinish}>
                        Tiếp theo
                    </Button>,
                ]}
            >
                <Form layout="vertical" onFinish={props.handleSave} >
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
                                    onChange={(event) => { 
                                        setProduct({...product, code: event.target.value});
                                    }}
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
                                    onChange={(value)=>{ setProduct({...product, name: value}); }}
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
                                    onChange={(event) => { 
                                        setProduct({...product, time: event.target.value});
                                    }}
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
                                    onChange={(event) => { 
                                        setProduct({...product, num_worker: event.target.value});
                                    }}
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
                                    onChange={(value)=>{ setProduct({...product, pro_unit: value}); }}
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
                                    onChange={(event) => { setProduct({...product, note: event.target.value}); }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
}

export default ModalStep1;
