import React, {Component} from 'react';
import { Table, Row, Col, Input, Button, Space, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { DeleteOutlined, SearchOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

import '../../CommandWork/CommandWork.css';

const data = [
  {
    id: '1',
    group: 'HCI_01',
    name: 'Nguyễn Viết Long',
    state: 'unblock',
    email: 'long_hci_01@gmail.com',
    phone: '0394567891'
  },
  {
    id: '2',
    group: 'HCI_02',
    name: 'Lê Hoàng Anh Trung',
    state: 'unblock',
    email: 'trung_hci_01@gmail.com',
    phone: '0394567882'
  },
  {
    id: '3',
    group: 'HCI_02',
    name: 'Đỗ Thị Hồng Thảo',
    state: 'block',
    email: 'thao_hci_01@gmail.com',
    phone: '0394567782'
  },
  {
    id: '4',
    group: 'HCI_03',
    name: 'Nguyễn Trung	Thành',
    state: 'block',
    email: 'thanh_hci_01@gmail.com',
    phone: '0394567682'
  },
  {
    id: '5',
    group: 'HCI_04',
    name: 'Hồ Khánh Dương',
    state: 'block',
    email: 'duong_hci_04@gmail.com',
    phone: '0394567782'
  },
  {
    id: '6',
    group: 'HCI_05',
    name: 'Hoàng Minh Nguyệt',
    state: 'block',
    email: 'nguyet_hci_05@gmail.com',
    phone: '0394567782'
  },
  {
    id: '7',
    group: 'HCI_07',
    name: 'Nguyễn Văn Công',
    state: 'block',
    email: 'cong_hci_01@gmail.com',
    phone: '0394567782'
  },
  {
    id: '8',
    group: 'HCI_08',
    name: 'Lương Đào Quang Anh',
    state: 'unblock',
    email: 'q.anh_hci_08@gmail.com',
    phone: '0394567782'
  },
  {
    id: '9',
    group: 'HCI_04',
    name: 'Phạm Ngọc Bảo Anh',
    state: 'block',
    email: 'b.anh_hci_01@gmail.com',
    phone: '0394567782'
  },
];

class PersonTable extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  render() {

    const columns = [
      {
        title: 'STT',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Họ tên',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: 'Đơn vị',
        dataIndex: 'group',
        key: 'group',
        ...this.getColumnSearchProps('group'),
      },
      {
        title: 'Trạng thái',
        dataIndex: 'state',
        key: 'state',
        ...this.getColumnSearchProps('state'),
        render: state => {
          let color = 'green';
          if (state === 'block') {
            color = 'red';
          }
          if (state === 'unblock'){
            color = 'green'
          }
          return (
            <Tag color={color} key={state}>
              {state}
            </Tag>
          );
        },
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 120,
        render: () => (
          <Row>
            <Col span={8}>
                <span style={{color: '86eaa0', fontSize: '18px', cursor: 'pointer'}} ><EditOutlined /></span>
            </Col>
            <Col span={8}>
                <span style={{color: '#86eaa0', fontSize: '18px', cursor: 'pointer'}} ><EyeOutlined /></span>
            </Col>
            <Col span={8}>
              <span style={{color: 'red', fontSize: '18px', cursor: 'pointer'}}><DeleteOutlined /></span>
            </Col>
          </Row>
        ),
      },
    ];
    return (
      <div className="table">
        <Row>
            <Col span={12}>
                <h2 style={{float: 'left', fontSize: '30px'}}>Bảng nhân viên</h2>
            </Col>
            <Table style={{width: '100%'}} columns={columns} dataSource={data} />
        </Row>
      </div>
    );
  }
}

export default PersonTable;