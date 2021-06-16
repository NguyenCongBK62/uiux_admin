/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import "../style.css";

import {
    Select
} from 'antd';

import {
    ArrowRightOutlined,
} from '@ant-design/icons';

const { Option } = Select;

const len = [1,2,3,4,5,6,7,8,9,10,11,12];

const Diagram = (props) => {

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

    return (
        <div id="diagram">
            <div className="frame" style={{height: '55vh'}} >
                <div className="in_frame">
                    <div style={{display: 'flex'}}>
                        <div className="circle_1" />
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={1}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={3}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={2}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={4}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={5}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={7}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="circle_2" />
                    </div>
                </div>
                <div className="conveyor" style={{marginTop: '5rem'}}></div>
                <div className="in_frame" style={{marginTop: '10rem'}}>
                    <div style={{display: 'flex'}}>
                        <div className="circle_1" />
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={6}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={8}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={10}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={9}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={11}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="rectangle">
                            <Select 
                                showSearch
                                style={{width: `100%`, height: '100%', border: '0'}}
                                allowClear
                                optionFilterProp="children"
                                defaultValue={12}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    len.map(item=> (
                                        <Option value={item} key={item}><p className="text-p">{`Vị trí ${item}`}</p></Option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="center_me">
                            <ArrowRightOutlined style={{fontSize: '38px'}} />
                        </div>
                        <div className="circle_2" />
                    </div>
                </div>
                <div className="conveyor" style={{marginTop: `15rem`}}></div>
            </div>
        </div>
    );
}

export default Diagram;