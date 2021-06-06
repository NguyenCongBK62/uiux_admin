import React from 'react';
import { Line } from '@ant-design/charts';
import './ChartLine.css';
import { Progress } from 'antd';

const ChartLine = () => {
    const data = [
        {name: 'Theo thiết kế', time: 75, amount: 0},
        {name: 'Theo thiết kế', time: 75, amount: 20},
        {name: 'Theo thiết kế', time: 75, amount: 40},
        {name: 'Theo thiết kế', time: 75, amount: 60},
        {name: 'Theo thiết kế', time: 75, amount: 80},
        {name: 'Theo thiết kế', time: 75, amount: 100},
        {name: 'Theo thiết kế', time: 75, amount: 120},
        {name: 'Theo thiết kế', time: 75, amount: 140},
        {name: 'Theo thiết kế', time: 75, amount: 160},
        {name: 'Theo thiết kế', time: 75, amount: 180},
        {name: 'Theo thiết kế', time: 75, amount: 200},
        {name: 'Theo thiết kế', time: 75, amount: 220},
        {name: 'Tổng sản phẩm', time: 78, amount: 0},
        {name: 'Tổng sản phẩm', time: 80, amount: 20},
        {name: 'Tổng sản phẩm', time: 92, amount: 40},
        {name: 'Tổng sản phẩm', time: 86, amount: 60},
        {name: 'Tổng sản phẩm', time: 83, amount: 80},
        {name: 'Tổng sản phẩm', time: 65, amount: 100},
        {name: 'Tổng sản phẩm', time: 62, amount: 120},
        {name: 'Tổng sản phẩm', time: 70, amount: 140},
        {name: 'Tổng sản phẩm', time: 73, amount: 160},
        {name: 'Tổng sản phẩm', time: 75, amount: 180},
        {name: 'Tổng sản phẩm', time: 78, amount: 200},
        {name: 'Tổng sản phẩm', time: 100, amount: 220},
    ]

    var config = {
        data: data,
        height: 300,
        xField: 'amount',
        yField: 'time',
        seriesField: 'name',
        legend: { position: 'top' },
        animation: {
          appear: {
            animation: 'path-in',
            duration: 5000,
          },
        },
    };
    return (
        <>
            <div className='chart-line'>
                <Line {...config} style={{marginBottom: '1rem'}}/>
                <Progress type="circle" percent={80} />
                <div style={{textAlign: 'center', marginTop: '1rem', marginBottom: '1rem'}}>Đã hoàn thành 220/275</div>
            </div> 
        </>
    );
}

export default ChartLine;
