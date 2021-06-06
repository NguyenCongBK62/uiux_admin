import React from 'react';
import './CommandDetail.css';
import CommandChart from './CommandChart';
import {
    Row, 
    Col,
    Form,
    Select,
    InputNumber,
    Input,
} from 'antd';


const CommandDetail = () => {
    return (
        <div className='command-detail'>
            <Row>
                <Col span={13}>
                    <div className='command-detail-title'>Chi tiết lệnh sản xuất</div>
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
                            <Form.Item label="Đơn Vị thực hiện">
                                <Select defaultValue='1' style={{textAlign: 'left'}}>
                                    <Select.Option value="1">HCI_01</Select.Option>
                                    <Select.Option value="demo">HCI_02</Select.Option>
                                    <Select.Option value="demo">HCI_03</Select.Option>
                                    <Select.Option value="demo">HCI_04</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Chọn chuyền">
                                <Select defaultValue='1' style={{textAlign: 'left'}}>
                                    <Select.Option value="1">Khâu cổ áo khoác</Select.Option>
                                    <Select.Option value="demo">Gắn cúc áo sơ mi</Select.Option>
                                    <Select.Option value="demo">May viền tay áo</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Phân xưởng">
                                <Select defaultValue='a' style={{textAlign: 'left'}}>
                                    <Select.Option value="a">A</Select.Option>
                                    <Select.Option value="demo">B</Select.Option>
                                    <Select.Option value="demo">C</Select.Option>
                                    <Select.Option value="demo">D</Select.Option>
                                </Select>
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
                <Col span={11}>
                    <div className='command-state-title'>Các trạng thái tương ứng trên thanh tiến trình</div>
                    <div className='command-state-content'>
                        <div className='state-1'>
                            <div className='color-1'>1</div>
                            <div className='state-content'>Đã hoàn thành lệnh sản xuất</div>
                        </div>
                        <div className='state-2'>
                            <div className='color-2'>2</div>
                            <div className='state-content'>Lệnh sản xuất lỗi</div>
                        </div>
                        <div className='state-3'>
                            <div className='color-3'>3</div>
                            <div className='state-content'>Chuyền đang nhanh hơn so với thiết kế</div>
                        </div>
                        <div className='state-4'>
                            <div className='color-4'>4</div>
                            <div className='state-content'>Lệnh sản xuất đang theo đúng kế hoạch</div>
                        </div>
                        <div className='state-5'>
                            <div className='color-5'>5</div>
                            <div className='state-content'>Chuyền đang chậm hơn so với thiết kế</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='command-chart-table-title'>Tiến độ từng chuyền</div>
            <div className='command-chart-table'>
                <Row>
                    <Col span={12}><CommandChart/></Col>
                    <Col span={12}><CommandChart/></Col>
                </Row>
                <Row>
                    <Col span={12}><CommandChart/></Col>
                    <Col span={12}><CommandChart/></Col>
                </Row>
            </div>
        </div>
    );
}

export default CommandDetail;

