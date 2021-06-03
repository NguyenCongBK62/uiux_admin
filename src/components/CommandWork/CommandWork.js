import React, {Component} from 'react';
import './CommandWork.css';
import { Table, Row, Col, Input, Button, Space, Tag, Progress } from 'antd';
import Highlighter from 'react-highlight-words';
import AddWork from './AddWork';
import FixWork from './FixWork';
import { DeleteOutlined, SearchOutlined, EyeOutlined } from '@ant-design/icons';
import StateCommand from './StateCommand';
import { Link } from 'react-router-dom';



const data = [
  {
    key: '1',
    group: 'HCI_01',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 100,
    factory: 'D',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '2',
    group: 'HCI_02',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 80,
    factory: 'A',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '3',
    group: 'HCI_03',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 70,
    factory: 'B',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '4',
    group: 'HCI_04',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 30,
    factory: 'C',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '5',
    group: 'HCI_05',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 72,
    factory: 'C',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '6',
    group: 'HCI_06',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 77,
    factory: 'C',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '7',
    group: 'HCI_07',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 92,
    factory: 'C',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '8',
    group: 'HCI_08',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 62,
    factory: 'C',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
  },
  {
    key: '9',
    group: 'HCI_09',
    step: 'Áo khoác đồng phục',
    amount: 50,
    proccess: 77,
    factory: 'C',
    dayStart: '8:00-22/1/2014',
    dayEnd: '15:00-24/1/2014'
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
        title: 'Đơn vị',
        dataIndex: 'group',
        key: 'group',
        width: 80,
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
        width: 80,
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
        dataIndex: 'proccess',
        key: 'proccess',
        ...this.getColumnSearchProps('proccess'),
        render: proccess => {
          let status = 'default';
          let color = '#1890ff';
          if (proccess === 100) {
            color = '#52c41a'
          }
          if (proccess <= 50) {
            status = 'exception';
            color = 'red'
          }
          if (proccess > 50 && proccess < 70){
            status = 'active'
            color = 'yellow'
          }
          return (
            <Progress percent={proccess} size="small" status={status} strokeColor={color}/>
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
              <FixWork/>
            </Col>
            <Col span={8}>
            <span style={{color: '#86eaa0', fontSize: '18px', cursor: 'pointer'}}><Link to='/commanddetail'><EyeOutlined /></Link></span>
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
        </Row>
        <StateCommand/>
        <Table style={{width: '100%'}} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default CommandWork;