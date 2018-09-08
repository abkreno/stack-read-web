import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Layout, Menu, Breadcrumb } from 'antd';

import './MainLayout.css';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const MainLayout = ({ children }) => (
  <Layout className="main-layout">
    <Header>
      <div className="logo" />
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">My Lists</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>

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
      <Breadcrumb className="bread-crumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="content">{children}</div>
    </Content>
    <Footer className="text-center">Stack Read ©2018 Created by Abkreno</Footer>
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;
