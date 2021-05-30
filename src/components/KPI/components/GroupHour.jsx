/* eslint-disable array-callback-return */
import React, { useState } from 'react';

import { Input, DatePicker, Button, Select, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';

import { kpi_group_hours } from '../../../resources/kpi';

const { Option } = Select;

const GroupHour = () => {

    const [config, setConfig] = useState(null);
    const [group, setGroup] = useState(null);
    const [date, setDate] = useState(null);
    const [error, setError] = useState(null);


    const setForm = () => {
        const err = {};

        if (!date && !group) {
            err.date = "Phải chọn thời gian";
            err.group = "Phải chọn đơn vị";
        } else if (!date) {
            
            err.date = "Phải chọn thời gian";
        } else if (!group) {

            err.group = "Phải chọn đơn vị";
        }
        
        if (err.date || err.group) {
            setError(err);
            return;
        }
        
        const gr_hour = kpi_group_hours.find((item) => {
            if (item.group === group && item.date === date) {
                return item;
            }
        });

        if (!gr_hour) {
            err.line = "Không có KPI cho lựa chọn này";
            setError(err);
            setConfig(null);
            return;
        }

        var cfg = {
            data: gr_hour.data,
            height: 400,
            xField: 'hour',
            yField: 'amount',
            seriesField: 'name',
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
        <div style={{marginBottom: '10px'}}>
            <Row>
                <Col span={10}>
                    <Input.Group compact>
                        <p style={{float: 'left', paddingTop: '3px', fontSize: '16px', marginRight: '7px'}}>Chọn ngày:  </p>
                        <DatePicker style={{ width: '40%', float: 'left'}} onChange={(date, dateString)=>{setDate(dateString)}} />
                        <p style={{paddingTop: '3px', fontSize: '12px', marginRight: '7px', color:'red'}}>{error?.date? error.date : '' }</p>
                    </Input.Group>
                </Col>
                <Col span={10}>
                    <Input.Group compact>
                        <p style={{float: 'left', paddingTop: '3px', fontSize: '16px', marginRight: '7px'}}>Chọn đơn vị:</p>
                        <Select 
                            style={{ width: '40%', marginBottom: '1rem', float: 'left'}}
                            placeholder="Select a group"
                            optionFilterProp="children"
                            showSearch
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            onChange={(value)=>{setGroup(value)}}
                        >
                            <Option value="HCI_01">HCI_01</Option>
                            <Option value="HCI_02">HCI_02</Option>
                            <Option value="HCI_03">HCI_03</Option>
                            <Option value="HCI_04">HCI_04</Option>
                            <Option value="HCI_05">HCI_05</Option>
                            <Option value="HCI_06">HCI_06</Option>
                            <Option value="HCI_07">HCI_07</Option>
                            <Option value="HCI_08">HCI_08</Option>
                        </Select>
                        <p style={{paddingTop: '3px', fontSize: '12px', marginRight: '7px', color: 'red'}}>{error?.group? error.group : '' }</p>
                    </Input.Group>
                </Col>
                <Col span={4}>
                <Input.Group compact>
                    <Button 
                        type="primary"
                        onClick={setForm}
                    >
                        Duyệt
                    </Button>
                </Input.Group>
                </Col>
            </Row>
            {!config? (error?.line? <p style={{fontSize: '20px'}}>{error.line}</p> : '') : <Line {...config} /> }
        </div>
    );
}

export default GroupHour;
