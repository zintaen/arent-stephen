import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import ScrollToTop from 'components/common/ScrollToTop';

const MainLayout = () => {
    return (
        <Layout>
            <Header />
            <Layout.Content>
                <Outlet />
                <ScrollToTop />
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
