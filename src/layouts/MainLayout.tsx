import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, FloatButton } from 'antd';

import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

const MainLayout = () => {
    return (
        <Layout>
            <Header />
            <Layout.Content>
                <Outlet />
                <FloatButton.BackTop style={{ right: 20, bottom: 20 }} />
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
