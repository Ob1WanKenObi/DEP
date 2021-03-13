import React from 'react';
import { Layout } from 'antd';
import SiteHeader from '../Header/index';
import Sidebar from '../SideBar/index';

const { Header, Sider, Content } = Layout;

const PageLayout = (props) => {
    return (
        <Layout>
            <Header><SiteHeader /></Header>
            <Layout>
                <Sider><Sidebar /></Sider>
                <Content>{props.children}</Content>
            </Layout>
        </Layout>
    );
}

export default PageLayout;
