import React from 'react';

import {
    Row,
    Col,
    Form, 
    Input, 
    Button,
    Select,
} from 'antd';

import {
    prod_units
} from '../../../resources/products.js';

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 12,
    },
};

const index = () => {
    return (
        <div className="table">
            <Row>
                <Col span={12}>
                    <h2 style={{float: 'left', fontSize: '30px'}}>Đăng ký nhân viên</h2>
                </Col>
            </Row>
            <Row>
                <Col span={16} offset={2}>
                    <Form
                        {...layout}
                        name="basic"
                    >
                        <Form.Item
                            label="Họ tên"
                            name="fullname"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                            ]}
                        >
                            <Input placeholder="Nhập họ tên ..." />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input type="email" placeholder="Nhập địa chỉ mail ..." />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập số điện thoại ..." />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password placeholder="Nhập mật khẩu ..." />
                        </Form.Item>

                        <Form.Item
                            label="Đơn vị"
                            name="group"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select your group!',
                                },
                                ]}
                        >
                            <Select
                                showSearch
                                placeholder="Lựa chọn nhóm"
                                optionFilterProp="children"
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
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Đăng ký
                            </Button> {'  '}
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default index;
