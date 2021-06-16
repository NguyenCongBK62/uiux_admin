import React from 'react';

import {
    Card, 
    Row, 
    Col
} from 'antd'

const CardDashboard = () => {
    return (
        <Row>
            <Col span={6} offset={1}>
                <Card id="card-person">
                    <div className="d-flex">
                        <h3>Công nhân</h3>
                    </div>
                    <h5>33 Người</h5>
                </Card>
            </Col>
            <Col span={6} offset={1}>
                <Card id="card-prline">
                    <div className="d-flex">
                        <h3>Dây chuyền(tháng)</h3>
                    </div>
                    <h5>3 Chuyền</h5>
                </Card>
            </Col>
            <Col span={6} offset={1}>
                <Card id="card-product">
                    <div className="d-flex">
                        <h3>Sản phẩm trong kho</h3>
                    </div>
                    <h5>33 Sản phẩm</h5>
                </Card>
            </Col>
        </Row>
    );
}

export default CardDashboard;
