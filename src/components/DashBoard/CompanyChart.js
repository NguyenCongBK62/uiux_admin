import React from 'react';
import './CompanyChart.css';
import { Input, DatePicker, Button } from 'antd';
import { Line } from '@ant-design/charts';

const CompanyChart = () => {
    const data = [
        {name: "Công", hour: '8h', amount: 0},
        {name: "Công", hour: '9h', amount: 23},
        {name: "Công", hour: '10h', amount: 24},
        {name: "Công", hour: '11h', amount: 22},
        {name: "Công", hour: '12h', amount: 25},
        {name: "Công", hour: '14h', amount: 21},
        {name: "Công", hour: '15h', amount: 24},
        {name: "Công", hour: '16h', amount: 22},
        {name: "Công", hour: '17h', amount: 21},
        {name: "Luật", hour: '8h', amount: 0},
        {name: "Luật", hour: '9h', amount: 20},
        {name: "Luật", hour: '10h', amount: 21},
        {name: "Luật", hour: '11h', amount: 17},
        {name: "Luật", hour: '12h', amount: 12},
        {name: "Luật", hour: '14h', amount: 22},
        {name: "Luật", hour: '15h', amount: 20},
        {name: "Luật", hour: '16h', amount: 23},
        {name: "Luật", hour: '17h', amount: 21},
        {name: "Hiếu", hour: '8h', amount: 0},
        {name: "Hiếu", hour: '9h', amount: 18},
        {name: "Hiếu", hour: '10h', amount: 22},
        {name: "Hiếu", hour: '11h', amount: 24},
        {name: "Hiếu", hour: '12h', amount: 19},
        {name: "Hiếu", hour: '14h', amount: 12},
        {name: "Hiếu", hour: '15h', amount: 24},
        {name: "Hiếu", hour: '16h', amount: 20},
        {name: "Hiếu", hour: '17h', amount: 21},
        {name: "Đô", hour: '8h', amount: 0},
        {name: "Đô", hour: '9h', amount: 19},
        {name: "Đô", hour: '10h', amount: 21},
        {name: "Đô", hour: '11h', amount: 22},
        {name: "Đô", hour: '12h', amount: 23},
        {name: "Đô", hour: '14h', amount: 19},
        {name: "Đô", hour: '15h', amount: 25},
        {name: "Đô", hour: '16h', amount: 22},
        {name: "Đô", hour: '17h', amount: 20},
    ];
    var config = {
        data: data,
        eight: 400,
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
    return (
        <div className='chart-company'>
            <Input.Group compact>
            <DatePicker style={{ width: '20%', marginBottom: '1rem'}} /><Button type="primary">Chọn ngày</Button>
            </Input.Group>
            <Line {...config} />
        </div>
    );
}

export default CompanyChart;