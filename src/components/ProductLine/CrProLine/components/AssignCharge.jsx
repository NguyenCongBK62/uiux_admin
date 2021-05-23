/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

import {
    Row,
    Col,
    Form,
    Input, 
    Select,
    Tag,
} from 'antd'

import { persons } from '../../../../resources/persons';
import { devices, garment_materials } from '../../../../resources/products';


const { Option } = Select;

const AssignCharge = () => {

    const onFinish = (values) => {
        console.log(values)
    }

    const tagRender = (props) => {
        const { label, closable, onClose } = props;
        const onPreventMouseDown = event => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={'cyan'}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    }

    return (
        <Row>
            <Col span={16}>
                {/* Khung chuoi cong viec */}
            </Col>
            <Col span={1} offset={1}>
                <div className="vertical-line"></div>
            </Col>
            <Col span={6}>
                <h4>Chi tiết công việc</h4>
                <Form onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name='name_work'
                        label={`Tên công việc`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder={`Nhập tên công việc`} defaultValue={``} />
                    </Form.Item>
                    <Form.Item
                        name='time_work'
                        label={`Thời gian (giây)`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder={`Nhập thời gian theo giây`} defaultValue={``} />
                    </Form.Item>
                    <Form.Item
                        name='weight_work'
                        label={`Tải trọng của công việc`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder={`Nhập tải trọng`} defaultValue={``} />
                    </Form.Item>
                    <Form.Item
                        name='person_works'
                        label={`Danh sách người tham gia công việc`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select 
                            showSearch
                            mode="multiple"
                            allowClear
                            showArrow
                            tagRender={tagRender}
                            placeholder="Chọn người tham gia"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            { 
                                persons.map(person => (
                                    <Option value={person.name} key={person.id}>{person.name}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name='device_works'
                        label={`Danh sách dụng cụ`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select 
                            showSearch
                            mode="multiple"
                            allowClear
                            showArrow
                            tagRender={tagRender}
                            placeholder="Chọn dụng cụ"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            { 
                                devices.map(device => (
                                    <Option value={device.name} key={device.id}>{device.name}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name='resource_works'
                        label={`Danh sách nguyên liệu`}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select 
                            showSearch
                            mode="multiple"
                            allowClear
                            showArrow
                            tagRender={tagRender}
                            placeholder="Chọn nguyên liệu"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            { 
                                garment_materials.map(g_m => (
                                    <Option value={g_m.name} key={g_m.id}>{g_m.name}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default AssignCharge;
