/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    Modal,
    Form,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';
const dateFormat = 'DD-MM-YYYY';


const FixWork = () => {
    const [form] = Form.useForm();
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
        <span style={{color: '86eaa0', fontSize: '18px', cursor: 'pointer'}} onClick={showModal}><EditOutlined /></span>
        <Modal title="Sửa lệnh" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                labelCol={{
                span: 6,
                }}
                wrapperCol={{
                span: 16,
                }}
                layout="horizontal"
            >
                <Form.Item label="Đơn Vị thực hiện">
                    <Select defaultValue='hci1'>
                        <Select.Option value="hci1">HCI_01</Select.Option>
                        <Select.Option value="demo">HCI_02</Select.Option>
                        <Select.Option value="demo">HCI_03</Select.Option>
                        <Select.Option value="demo">HCI_04</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Chọn chuyền">
                    <Select defaultValue='khau'>
                        <Select.Option value="khau">Khâu cổ áo khoác</Select.Option>
                        <Select.Option value="demo">Gắn cúc áo sơ mi</Select.Option>
                        <Select.Option value="demo">May viền tay áo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Phân xưởng">
                    <Select defaultValue='A'>
                        <Select.Option value="A">A</Select.Option>
                        <Select.Option value="demo">B</Select.Option>
                        <Select.Option value="demo">C</Select.Option>
                        <Select.Option value="demo">D</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Ngày bắt đầu">
                    <DatePicker defaultValue={moment('05-06-2021', dateFormat)}/>
                </Form.Item>
                <Form.Item label="Ngày kết thúc">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Số lượng">
                    <InputNumber/>
                </Form.Item>
            </Form>
        </Modal>
        </>
    );
};

export default FixWork;