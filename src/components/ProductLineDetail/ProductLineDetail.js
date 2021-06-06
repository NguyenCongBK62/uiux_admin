import React from 'react';
import './ProductLineDetail.css';
import ChartLine from './ChartLine';
import {
    Row, 
    Col,
    Form,
    InputNumber,
    Input,
} from 'antd';

const ProductLineDetail = () => {
    return (
        <div className='command-detail'>
            <Row>
                <Col span={10}>
                    <div className='command-detail-title'>Thông tin chuyền</div>
                    <div className='command-detail-content'>
                        <Form
                            labelCol={{
                            span: 6,
                            }}
                            wrapperCol={{
                            span: 16,
                            }}
                            layout="horizontal"
                            style={{padding: '2rem 1rem 1rem 1rem'}}
                        >
                            <Form.Item label="Mã chuyền">
                                <Input style={{width: '100%'}} defaultValue='ABC_01'/>
                            </Form.Item>
                            <Form.Item label="Tên chuyền">
                                <Input style={{width: '100%'}} defaultValue='Áo thể dục Bách Khoa'/>
                            </Form.Item>
                            <Form.Item label="Mã đơn vị phụ trách">
                                <Input style={{width: '100%'}} defaultValue='HCI_01'/>
                            </Form.Item>
                            <Form.Item label="Ngày bắt đầu">
                                <Input style={{width: '100%'}} defaultValue='8:00 - 22/1/2014'/>
                            </Form.Item>
                            <Form.Item label="Ngày kết thúc">
                                <Input style={{width: '100%'}} defaultValue='15:00 - 24/1/2014'/>
                            </Form.Item>
                            <Form.Item label="Số lượng">
                                <InputNumber style={{width: '100%'}} defaultValue={50}/>
                            </Form.Item>
                            <Form.Item label="Trạng thái">
                                <Input style={{width: '100%'}} defaultValue='70%'/>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={14}>
                    <div className='command-state-title'>Tiến độ chuyền</div>
                    <div className='command-state-content'>
                        <ChartLine/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductLineDetail;