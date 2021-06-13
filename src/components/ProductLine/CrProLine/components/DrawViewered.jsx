/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import "../style.css";
import {
    Row,
    Col
} from 'antd';

import {
    ArrowRightOutlined
} from '@ant-design/icons';

const Diagram = (props) => {

    const [inFrame, setInFrame] = useState(null);
    const [index, setIndex] = useState(0);
    const [works, setWorks] = useState([]);

    const handleChange = (index, value) => {
        let list = works;

        if (list.length === 0) {
            list.push({ index: index, value: value });
        } else {
            const obs = list.findIndex(item => item.index === index);
            if (obs !== -1) {
                list[obs] = {
                    ...list[obs],
                    value: value,
                }
            } else {
                list.push({ index: index, value: value });
            }
        }
        
        setWorks(list);

        props.onChange(list);
    }

    const addInFrame = (type, inValue) => {
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
                        <input type="text" id="rectangle_if" value={inValue} onChange={(event)=>{handleChange(index, event.target.value)}} />
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
            <div className="frame" style={{height: '55vh'}} >
                <div className="inner">Khung chuyền</div>
                <div className="vertical-line"></div>
                <Row className="in_frame">
                  <Col key={1}>
                    <div className="circle_1" />
                  </Col>
                  <Col style={{display: 'flex'}} key={2}>
                    <div className="center_me">
                        <ArrowRightOutlined style={{fontSize: '38px'}} />
                    </div>
                    <input type="text" id="rectangle_if" value={`Cắt vải`} disabled={true} />
                  </Col>
                  <Col style={{display: 'flex'}} key={3}>
                    <div className="center_me">
                        <ArrowRightOutlined style={{fontSize: '38px'}} />
                    </div>
                    <input type="text" id="rectangle_if" value={`May ống quần`} disabled={true} />
                  </Col>
                  <Col style={{display: 'flex'}} key={4}>
                    <div className="center_me">
                        <ArrowRightOutlined style={{fontSize: '38px'}} />
                    </div>
                    <input type="text" id="rectangle_if" value={`May đai quần`} disabled={true} />
                  </Col>
                  <Col style={{display: 'flex'}} key={5}>
                    <div className="center_me">
                        <ArrowRightOutlined style={{fontSize: '38px'}} />
                    </div>
                    <div className="circle_2" />
                  </Col>
                </Row>
            </div>
        </div>
    );
}

export default Diagram;