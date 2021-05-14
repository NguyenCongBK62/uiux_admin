import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Layout, Menu, Breadcrumb } from 'antd';
import { PieChartOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import Logo from './logo.jpeg';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

ReactDOM.render(
  <Layout id="main">
    <Header id='header-layout'>
      <div className="logo" id='components-layout-demo-top-side-2' >
        <img src={Logo} id='components-layout-demo-top-side-2' className='logo'></img>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" id='nav-link'>nav 1</Menu.Item>
        <Menu.Item key="2" id='nav-link'>nav 2</Menu.Item>
        <Menu.Item key="3" id='nav-link'>nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout style={{ marginTop: '64px' }}>
      <Sider width={200} className="site-layout-background" >
        <Router>
          <Menu mode="inline" id='menu' >
            <Menu.Item key="0" icon={<PieChartOutlined />}>
              <Link to='/home/dashboard'>Option 1</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1"><Link to='/home/option1'>Option 1</Link></Menu.Item>
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
      <Layout id='content-layout'>
        <Content className="site-layout-background" id='content'>
          <App/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
,document.getElementById('root'));
reportWebVitals();
