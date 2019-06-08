import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useStore } from '../stores/root';
import { useObserver } from 'mobx-react-lite';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AppBreadcrumb from './AppBreadcrumb';
import TutorsView from './TutorsView';
const { Sider, Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function Body() {
  const store = useStore();

  return useObserver(() => (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <AppBreadcrumb />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Switch>
              <Route exact path="/">
                {() => <p>Home</p>}
              </Route>
              <Route exact path="/tutors">
                <TutorsView />
              </Route>
              <Route>{() => <p>Not found</p>}</Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ));
}

export default Body;
