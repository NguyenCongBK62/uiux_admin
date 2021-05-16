import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, SnippetsOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import Logo from './logo.jpeg';
import { Avatar } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

ReactDOM.render(
  <Layout id="main">
    <Header id='header-layout'>
      <div className="logo" id='components-layout-demo-top-side-2' >
        <img src={Logo} id='components-layout-demo-top-side-2' className='logo'></img>
      </div>
      
      <Menu theme="dark" mode="horizontal">
        <Avatar src="https://hicksartgallery.com/wp-content/uploads/2019/09/avatar-gai-xinh.jpg" style={{float: 'right', margin: '16px', borderRadius: '100%'}}/>
        <Menu.Item key="1" id='nav-link'><UserOutlined style={{ fontSize: '22px', color: '#fff'}}/></Menu.Item>
        <Menu.Item key="2" id='nav-link'><NotificationOutlined style={{ fontSize: '21px', color: '#fff'}}/></Menu.Item>
      </Menu>
    </Header>
    <Layout style={{ marginTop: '64px' }}>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        width: 200,
        left: 0,
      }} className="site-layout-background" >
        <Router>
          <Menu mode="inline" id='menu' >
            <Menu.Item key="0" icon={<PieChartOutlined />}>
              <Link to='/'>Dash Board</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<SnippetsOutlined />} title="Quản lí công việc">
              <Menu.Item key="1"><Link to='/admin/commandwork'>Lệnh sản xuất</Link></Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Router>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content id='content-layout'>
          <div className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
            <App/>
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
,document.getElementById('root'));
reportWebVitals();
