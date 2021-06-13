import React from 'react';

import { Row, Col } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons';

const DetailWork = () => {
    return (
        <div style={{margin: `20px 25px 15px 30px`}}>
            <Row>
                <Col span={12}>
                    <h1 style={{fontSize: 20, textAlign: 'start'}}>Mã hàng: #241</h1>
                    <Row>
                        <Col span={7} offset={1}>Tên công việc</Col>
                        <Col span={7}>{`Xẻ miệng túi bấm góc`}</Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={1}>Thời gian (1sp/giây)</Col>
                        <Col span={7}>{`20 giây`}</Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={1}>Số sản phẩm</Col>
                        <Col span={7}>{`2000 sản phẩm`}</Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={1}>Số sản phẩm 1 bó</Col>
                        <Col span={7}>{`20 sản phẩm`}</Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={1}>Công cụ phụ trợ</Col>
                        <Col span={7}>{`Máy cắt rập, Kéo cắt`}</Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={1}>Nguyên liệu</Col>
                        <Col span={7}>{`Dây kéo, Vải lót`}</Col>
                    </Row>
                    <h1 style={{fontSize: 20, textAlign: 'start', marginTop: '1rem'}}>Tiến độ</h1>
                    <Row>
                        <Col span={9} offset={1}>Độ hoàn thành</Col>
                        <Col span={7}>{0} %</Col>
                    </Row>
                    <Row>
                        <Col span={9} offset={1}>Số sản phẩm hoàn thành</Col>
                        <Col span={7}>{0} sản phẩm</Col>
                    </Row>
                </Col>
                <Col span={10} offset={1}>
                    <h1 style={{fontSize: 20, textAlign: 'start'}}>Vị trí trong chuyền</h1>
                    <Row>
                        <Col span={5} offset={1} className="frame-div">
                            <p style={{fontSize: 12}}>Phía trước</p>
                            <p style={{fontSize: 12}}>Lê Đức Đô</p>
                        </Col>
                        <Col span={1} style={{margin: `20px 2px 20px 2px`}}><ArrowRightOutlined style={{fontSize: 20}} /></Col>
                        <Col span={5} offset={1} className="frame-div">
                            <p style={{fontSize: 12}}>Vị trí bản thân</p>
                            <p style={{fontSize: 12}}>Vị trí 2</p>
                        </Col>
                        <Col span={1} style={{margin: `20px 2px 20px 2px`}}><ArrowRightOutlined style={{fontSize: 20}} /></Col>
                        <Col span={5} offset={1} className="frame-div">
                            <p style={{fontSize: 12}}>Phía sau</p>
                            <p style={{fontSize: 12}}>Nguyễn Văn Công</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default DetailWork;
