import React from 'react';
import './TeamChart.css';
import { Line } from '@ant-design/charts';

const UserChart = () => {
    const data = [
        {name: 'Theo thiết kế', time: `8h`, amount: 100},
        {name: 'Theo thiết kế', time: `9h`, amount: 100},
        {name: 'Theo thiết kế', time: `10h`, amount: 100},
        {name: 'Theo thiết kế', time: `11h`, amount: 100},
        {name: 'Theo thiết kế', time: `12h`, amount: 100},
        {name: 'Theo thiết kế', time: `14h`, amount: 100},
        {name: 'Theo thiết kế', time: `15h`, amount: 100},
        {name: 'Theo thiết kế', time: `16h`, amount: 100},
        {name: 'Theo thiết kế', time: `17h`, amount: 100},
        {name: 'Hôm nay', time: `8h`, amount: 101},
        {name: 'Hôm nay', time: `9h`, amount: 106},
        {name: 'Hôm nay', time: `10h`, amount: 90},
        {name: 'Hôm nay', time: `11h`, amount: 115},
        {name: 'Hôm nay', time: `12h`, amount: 120},
        {name: 'Hôm nay', time: `14h`, amount: 125},
        {name: 'Hôm nay', time: `15h`, amount: 110},
        {name: 'Hôm nay', time: `16h`, amount: 105},
        {name: 'Hôm nay', time: `17h`, amount: 115},
        {name: 'Hôm qua', time: `8h`, amount: 105},
        {name: 'Hôm qua', time: `9h`, amount: 102},
        {name: 'Hôm qua', time: `10h`, amount: 95},
        {name: 'Hôm qua', time: `11h`, amount: 110},
        {name: 'Hôm qua', time: `12h`, amount: 115},
        {name: 'Hôm qua', time: `14h`, amount: 106},
        {name: 'Hôm qua', time: `15h`, amount: 90},
        {name: 'Hôm qua', time: `16h`, amount: 95},
        {name: 'Hôm qua', time: `17h`, amount: 105},
    ]
    var config = {
        data: data,
        height: 400,
        xField: 'time',
        yField: 'amount',
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
        <div className='chart-team'>
            <Line {...config} />
        </div>
    );
}

export default UserChart;
