import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Employee from './employee';
import Setting from './setting';
import './App.css';

const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  console.log(match,'match');
  
  let defaultKey = match.url.replace('/', '') || 'employee';
  // let defaultKey =  'employee';
  return <ConfigProvider locale={zh_CN}>
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[defaultKey]}
          className="menu"
        >
          <Menu.Item key="employee"><Link to="/employee">员工管理</Link></Menu.Item>
          {/* <Menu.Item key="employee">员工管理</Menu.Item> */}
          <Menu.Item key="setting"><Link to="/setting">系统设置</Link></Menu.Item>
          {/* <Menu.Item key="setting">系统设置</Menu.Item> */}
        </Menu>
      </Header>
      <Content className="contentWrap">
        <div className="content">
            {/* <Employee/> */}

          <Route path="/" exact component={Employee} />
          <Route path="/employee" component={Employee} />
          <Route path="/setting" component={Setting} />
        </div>
      </Content>
      <Footer className="footer">TypeScript in Action</Footer>
    </Layout>
  </ConfigProvider>
}

export default App;
