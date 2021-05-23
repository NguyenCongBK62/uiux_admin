import React, {Component} from 'react';
import './Commandwork.css';
import { Table, Row, Col, Input, Button, Space, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import AddWork from './AddWork';
import { DeleteOutlined, EyeOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    group: 'HCI_01',
    step: 'Áo khoác đồng phục',
    amount: 50,
    state: 'Hoàn thành',
    factory: 'D',
    dayStart: '22/1/2014',
    dayEnd: '24/1/2014'
  },
  {
    key: '2',
    group: 'HCI_02',
    step: 'Áo khoác đồng phục',
    amount: 50,
    state: '80%',
    factory: 'A',
    dayStart: '22/1/2014',
    dayEnd: '24/1/2014'
  },
  {
    key: '3',
    group: 'HCI_03',
    step: 'Áo khoác đồng phục',
    amount: 50,
    state: '70%',
    factory: 'B',
    dayStart: '22/1/2014',
    dayEnd: '24/1/2014'
  },
  {
    key: '4',
    group: 'HCI_04',
    step: 'Áo khoác đồng phục',
    amount: 50,
    state: 'Lỗi',
    factory: 'C',
    dayStart: '22/1/2014',
    dayEnd: '24/1/2014'
  },
];
class CommandWork extends Component {
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
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Đơn vị thực hiện',
        dataIndex: 'group',
        key: 'group',
        ...this.getColumnSearchProps('group'),
      },
      {
        title: 'Quy trình',
        dataIndex: 'step',
        key: 'step',
        ...this.getColumnSearchProps('step'),
      },
      {
        title: 'Số lượng',
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: 'Phân xưởng',
        dataIndex: 'factory',
        key: 'factory',
        ...this.getColumnSearchProps('factory'),
      },
      {
        title: 'Ngày bắt đầu',
        dataIndex: 'dayStart',
        key: 'dayStart',
        ...this.getColumnSearchProps('dayStart'),
      },
      {
        title: 'Ngày kết thúc',
        dataIndex: 'dayEnd',
        key: 'dayEnd',
        ...this.getColumnSearchProps('dayEnd'),
      },
      {
        title: 'Trạng thái',
        dataIndex: 'state',
        key: 'state',
        ...this.getColumnSearchProps('state'),
        render: state => {
          let color = 'green';
          if (state === 'Lỗi') {
            color = 'red';
          }
          if (state === 'Hoàn thành'){
            color = 'geekblue'
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
              <span style={{color: '86eaa0', fontSize: '18px', cursor: 'pointer'}}><EditOutlined /></span>
            </Col>
            <Col span={8}>
              <span style={{color: '#86eaa0', fontSize: '18px', cursor: 'pointer'}}><EyeOutlined /></span>
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
                <h1 style={{float: 'left', fontSize: '30px'}}>Lệnh sản xuất</h1>
            </Col>
            <Col span={12}>
                <Space style={{float: 'right', marginBottom: '0px'}}>
                  <AddWork/>
                </Space>
            </Col>
            <Table style={{width: '100%'}} columns={columns} dataSource={data} />
        </Row>
      </div>
    );
  }
}

export default CommandWork;