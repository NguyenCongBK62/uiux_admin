/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import { Input, Select, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';

import { kpi_actors } from '../../../resources/kpi';
import { persons } from '../../../resources/persons';

const { Option } = Select;

const GroupHour = () => {

    const [config, setConfig] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setForm(1);
    }, []);

    const setForm = (id) => {
        const err = {};

        const prl = kpi_actors.find((item) => {
            if (item.user_id === id ) {
                return item;
            }
        });

        if (!prl) {
            err.line = "Không có KPI cho lựa chọn này";
            setError(err);
            setConfig(null);
            return;
        }

        var cfg = {
            data: prl.data,
            height: 400,
            xField: 'month',
            yField: 'amount',
            yAxis: {
                label: {
                  formatter: function formatter(v) {
                    return ''.concat(v, ' Chiếc');
                  },
                },
            },
            legend: { position: 'top' },
            smooth: true,
            animation: {
              appear: {
                animation: 'path-in',
                duration: 5000,
              },
            },
        };
        setConfig(cfg);
        setError(null);
    }

    return (
        <div  className="table" style={{marginBottom: '10px'}}>
            <Row style={{marginBottom: '10px'}}>
                <Col span={10}>
                    <Input.Group compact>
                        <p style={{float: 'left', paddingTop: '3px', fontSize: '16px', marginRight: '7px'}}>Chọn nhân viên: </p>
                        <Select 
                            style={{ width: '60%', marginBottom: '1rem', float: 'left'}}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            showSearch
                            defaultValue={1}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            onChange={(value)=>{setForm(value)}}
                        >
                            {persons.map(item => (<Option value={item.id} key={item.id}>{item.name}</Option>))}
                        </Select>
                        <p style={{paddingTop: '3px', fontSize: '12px', marginRight: '7px', color: 'red'}}>{error?.group? error.group : '' }</p>
                    </Input.Group>
                </Col>
            </Row>
            {!config? (error?.line? <p style={{fontSize: '20px'}}>{error.line}</p> : '') : <Line {...config} /> }
        </div>
    );
}

export default GroupHour;
