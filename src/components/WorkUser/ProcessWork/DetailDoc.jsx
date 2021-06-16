import React from 'react';

import {
    Modal,
    Button,
    Row,
    Col,
    Typography,
} from 'antd';

const { Title } = Typography;

const DetailDoc = (props) => {

    React.useEffect(()=>{
        console.log(props);
    },[props]);

    return (
        <div>
            <Modal 
                title="Tổng hợp báo cáo"
                visible={props.visible}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                width={900}
                footer={[
                    <Button key="back" onClick={props.handleCancel}>Huỷ</Button>,
                    <Button key="submit" type="primary" onClick={props.handleOk}>Báo cáo</Button>
                ]}
            >
                <Row>
                    <Col span={12} offset={6}>
                        <Title level={4} style={{marginLeft: 100}}>Báo cáo kết thúc công việc</Title>
                    </Col>
                    <Col span={16} offset={4} style={{marginBottom: '10px'}}>
                        <Title level={5}># CHI TIẾT CÔNG VIỆC</Title>
                        <Row>
                            <Col span={8}>Mã hàng</Col>
                            <Col span={16}>241</Col>
                            <Col span={8}>Tên công việc</Col>
                            <Col span={16}>{`Xẻ miệng túi bấm góc`}</Col>
                            <Col span={8}>Thời gian 1(sp/giây)</Col>
                            <Col span={16}>{`20 giây`}</Col>
                            <Col span={8}>Thời gian 1(bó/phút)</Col>
                            <Col span={16}>{`25 phút`}</Col>
                            <Col span={8}>Số sản phẩm yêu cầu</Col>
                            <Col span={16}>{`2000 sản phẩm`}</Col>
                            <Col span={8}>Số sản phẩm 1 bó</Col>
                            <Col span={16}>{`20 sản phẩm`}</Col>
                            <Col span={8}>Công cụ phụ trợ</Col>
                            <Col span={16}>{`Máy cắt rập, Kéo cắt`}</Col>
                            <Col span={8}>Nguyên liệu</Col>
                            <Col span={16}>{`Dây kéo, Vải lót`}</Col>
                        </Row>
                    </Col>
                    <Col span={16} offset={4}>
                        <Title level={5}># CHI TIẾT THỰC HIỆN (Tổng)</Title>
                        <Row>
                            <Col span={8}>Số bó hoàn thành</Col>
                            {/* <Col span={16}>{count} bó</Col> */}
                            <Col span={8}>Số sản phẩm tốt</Col>
                            {/* <Col span={16}>{good_product} sản phẩm</Col> */}
                            <Col span={8}>Số sản phẩm lỗi</Col>
                            {/* <Col span={16}>{bad_product} sản phẩm</Col> */}
                            <Col span={8}>Số sản phẩm lỗi đầu vào</Col>
                            {/* <Col span={16}>{bad_in} sản phẩm</Col> */}
                            <Col span={8}>Thời gian hoàn thành</Col>
                            {/* <Col span={16}>{time} Phút</Col> */}
                        </Row>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}

export default DetailDoc;
