import React from 'react';
import './StateCommand.css';
import {Row, Col} from 'antd';

const StateCommand = () => {
    return (
        <div className='state-command'>
            <div className='command-state-title'>Các trạng thái biểu thị</div>
            <div className='command-state-content'>
            <Row style={{marginBottom: 0}}>
                <Col span={8}>
                    <div className='state'>
                        <div className='square1'></div>
                        <div className='state-content1'>Đã hoàn thành lệnh sản xuất</div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='state'>
                        <div className='square2'></div>
                        <div className='state-content1'>Lệnh sản xuất lỗi</div>
                    </div>
                </Col>
                <Col span={7}>
                    <div className='state'>
                        <div className='square3'></div>
                        <div className='state-content1'>Chuyền đang nhanh hơn so với thiết kế</div>
                    </div>
                </Col>         
            </Row>
            <Row style={{marginBottom: '1rem'}}>
                <Col offset={4} span={8}>
                    <div className='state'>
                        <div className='square4'></div>
                        <div className='state-content1'>Lệnh sản xuất đang theo đúng kế hoạch</div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='state'>
                        <div className='square5'></div>
                        <div className='state-content1'>Chuyền đang chậm hơn so với thiết kế</div>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    );
}

export default StateCommand;