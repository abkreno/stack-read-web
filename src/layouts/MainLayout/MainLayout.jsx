import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';
import Menu from 'antd/lib/menu';
import Layout from 'antd/lib/layout';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const getDefaultSelectedKeysBasedOnRoute = pathname => {
  if (pathname.includes('about')) {
    return ['about'];
  }
  return ['home'];
};

const MainLayout = ({ children, location }) => (
  <Layout className="main-layout">
    <Header>
      <div className="logo" />
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={getDefaultSelectedKeysBasedOnRoute(
          location.pathname
        )}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="my-lists">My Lists</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>

        <SubMenu
          key="sub1"
          className="float-right"
          title={
            <span>
              <Avatar
                className="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <span>Abkreno</span>
            </span>
          }
        >
          <Menu.Item key="sub1_1">Profile</Menu.Item>
          <Menu.Item key="sub1_2">Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
    <Content className="content-container">
      <div className="content">{children}</div>
    </Content>
    <Footer className="text-center">Stack Read ©2018 Created by Abkreno</Footer>
  </Layout>
);

MainLayout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

export default MainLayout;
