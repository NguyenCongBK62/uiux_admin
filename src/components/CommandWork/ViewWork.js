/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CrProLine from '../../components/ProductLine/CrProLine';
import {
    Modal,
    Form,
} from 'antd';
import { EyeOutlined } from '@ant-design/icons';



const ViewWork = () => {
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
        <span style={{color: '#86eaa0', fontSize: '18px', cursor: 'pointer'}} onClick={showModal}><EyeOutlined /></span>
        <Modal title="Sửa chuyền" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1500}>
            <CrProLine/>
        </Modal>
        </>
    );
};

export default ViewWork;