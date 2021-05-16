import React from 'react';
import { Input, DatePicker, Button } from 'antd';
import { Column } from '@ant-design/charts';
import './CompanyChart.css';
const CompanyChart = () => {
  var data = [
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 01',
      kpi: 18.9,
    },
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 02',
      kpi: 28.8,
    },
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 03',
      kpi: 39.3,
    },
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 04',
      kpi: 81.4,
    },
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 05',
      kpi: 47,
    },
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 06',
      kpi: 20.3,
    },
    {
      name: 'Hệ thống đánh giá',
      team: 'HCI 07',
      kpi: 24,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 01',
      kpi: 18.9,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 02',
      kpi: 28.8,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 03',
      kpi: 39.3,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 04',
      kpi: 81.4,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 05',
      kpi: 47,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 06',
      kpi: 20.3,
    },
    {
      name: 'Tự đánh giá',
      team: 'HCI 07',
      kpi: 24,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 01',
      kpi: 12.4,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 02',
      kpi: 23.2,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 03',
      kpi: 34.5,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 04',
      kpi: 99.7,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 05',
      kpi: 52.6,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 06',
      kpi: 35.5,
    },
    {
      name: 'Quản lí đánh giá',
      team: 'HCI 07',
      kpi: 37.4,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: 'team',
    yField: 'kpi',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return (
    <div className='chart-company'>
      <Input.Group compact>
        <DatePicker style={{ width: '20%', marginBottom: '1rem', float: 'left'}} /><Button type="primary" style={{ width: '10%', marginBottom: '1rem', float: 'left'}}>Chọn tháng</Button>
      </Input.Group>
      <Column {...config} />
    </div>
  );
}

export default CompanyChart;