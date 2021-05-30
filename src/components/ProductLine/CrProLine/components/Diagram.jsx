import React, { useState } from 'react';

import "../style.css";
import {
    Row,
    Col
} from 'antd';

import {
    ArrowRightOutlined
} from '@ant-design/icons';

const Diagram = () => {

    const [inFrame, setInFrame] = useState(null);
    const [index, setIndex] = useState(0);

    const addInFrame = (type) => {
        const frames = inFrame || [];
        let frame = null;
        
        switch (type) {
            case 1:
                frame = (
                    <Col key={index}>
                        <div className="circle_1" />
                    </Col>
                );
                break;
            case 2:
                frame = (
                    <Col style={{display: 'flex'}} key={index}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="circle_2" />
                    </Col>
                );
                break;
            case 3:
                frame = (
                    <Col style={{display: 'flex'}} key={index}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <input type="text" id="rectangle_if" />
                    </Col>
                );
                break;
            default:
                break;
        }

        if (frames.length === 21){
            frame = (
                <Col style={{display: 'flex'}} key={index}>
                    <div className="center_me">
                        <ArrowRightOutlined style={{fontSize: '38px'}} />
                    </div>
                    <div className="circle_2" />
                </Col>
            );
            
            frames.push(frame);
            setIndex(index+1);
            setInFrame(frames);
            return;
        } else if (frames.length === 22){
            return;
        }

        frames.push(frame);
        setIndex(index+1);
        setInFrame(frames);
    }

    return (
        <div id="diagram">
            <div className="table_dia">
                <p style={{fontWeight: 'bold'}} >Khung chọn</p>
                <hr/>
                <div className="circle_1" onClick={() => {addInFrame(1);}} />
                <div className="circle_2" onClick={() => {addInFrame(2);}} />
                <div id="rectangle" onClick={() => {addInFrame(3);}} />
            </div>
            <div className="frame" style={{height: '95%'}} >
                <div className="inner">Khung chuyền</div>
                <div className="vertical-line"></div>
                <Row className="in_frame">
                    {
                        !inFrame? ''
                        :
                        inFrame.map((item) => {
                            return item;
                        })
                    }
                </Row>
            </div>
        </div>
    );
}

export default Diagram;