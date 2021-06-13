import React from 'react';

import {  Table } from 'antd';

const TableUser = () => {
    const data = [
        {
          id: '1',
          name: 'Nguyễn Văn Công',
          amount: 2032,
          group: 'HCI_07',
          level: '4'
        },
        {
          id: '2',
          name: 'Đỗ Thị Hồng Thảo',
          amount: 1442,
          group: 'HCI_02',
          level: '3'
        },
        {
          id: '3',
          name: 'Joe Black',
          amount: 1332,
          group: 'HCI_02',
          level: '2'
        },
    ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => {
                if (text === 'Đỗ Thị Hồng Thảo') {
                    return <p style={{fontSize: 13, textAlign: 'start', color: '#00bfff'}}>{text}</p>;
                }
                return <p style={{fontSize: 13, textAlign: 'start'}}>{text}</p>;
            }
        },
        {
            title: 'Đơn vị',
            dataIndex: 'group',
            key: 'group',
            render: text => <p style={{fontSize: 13, textAlign: 'start'}}>{text}</p>
        },
        {
            title: 'Bậc thợ',
            dataIndex: 'level',
            key: 'level',
            render: text => <p style={{fontSize: 13, textAlign: 'start'}}>{text}</p>
        },
        {
            title: 'Số sản phẩm',
            dataIndex: 'amount',
            key: 'amount',
            render: text => <p style={{fontSize: 13, textAlign: 'start'}}>{text}</p>
        }
    ]
    return (
        <div className="table-user">
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default TableUser;
