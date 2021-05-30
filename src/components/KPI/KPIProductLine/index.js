/* eslint-disable array-callback-return */
import React, { useState } from 'react';

import { Input, Button, Select, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';

import { kpi_prdline } from '../../../resources/kpi';
import { prod_lines } from '../../../resources/product_lines';

const { Option } = Select;

const GroupHour = () => {

    const [config, setConfig] = useState(null);
    const [code, setCode] = useState(null);
    const [error, setError] = useState(null);
    const [prd, setPrd] = useState(null);


    const setForm = () => {
        const err = {};

        const prl = kpi_prdline.find((item) => {
            if (item.code === code ) {
                return item;
            }
        });

        const product = prod_lines.find((item) => item.code === code);

        if (!prl) {
            err.line = "Không có KPI cho lựa chọn này";
            setError(err);
            setConfig(null);
            return;
        }

        var cfg = {
            data: prl.data,
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
        setPrd(product);
        setError(null);
    }

    return (
        <div  className="table" style={{marginBottom: '10px'}}>
            <Row>
                <Col span={10}>
                    <Input.Group compact>
                        <p style={{float: 'left', paddingTop: '3px', fontSize: '16px', marginRight: '7px'}}>Chọn mã chuyền: </p>
                        <Select 
                            style={{ width: '40%', marginBottom: '1rem', float: 'left'}}
                            placeholder="Select a code"
                            optionFilterProp="children"
                            showSearch
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            onChange={(value)=>{setCode(value)}}
                        >
                            {prod_lines.map(item => (<Option value={item.code} key={item.key}>{item.code}</Option>))}
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
            {
                !prd? '' : (
                    <Row style={{marginBottom: '10px'}}>
                        <Col span={6} offset={1}>
                            <h5>Tên mặt hàng:</h5>
                            <p>{prd.name}</p>
                        </Col>
                        <Col span={6} offset={1}>
                            <h5>Đơn vị thực hiện:</h5>
                            <p>{prd.pro_unit}</p>
                        </Col>
                        <Col span={6} offset={1}>
                            <h5>Thời gian hoàn thành:</h5>
                            <p>{`${prd.time} giây`}</p>
                        </Col>
                    </Row>
                )
            }
            {!config? (error?.line? <p style={{fontSize: '20px'}}>{error.line}</p> : '') : <Line {...config} /> }
        </div>
    );
}

export default GroupHour;
