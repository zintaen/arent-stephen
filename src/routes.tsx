import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate, useLocation } from 'react-router-dom';
import { Spin } from 'antd';

import { localS } from 'utils/helpers';
import MainLayout from 'layouts/MainLayout';

const LoginPage = React.lazy(() => import(/* webpackChunkName: "login" */ 'pages/login'));

const ColumnPage = React.lazy(() => import(/* webpackChunkName: "column" */ 'pages/column'));

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const isLoggedIn = localS.get('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

const AppRoutes = () => {
    const privateRoutes = [
        {
            path: '/my-record',
            component: React.lazy(() => import(/* webpackChunkName: "my-record" */ 'pages/my-record')),
            exact: true,
        },
        {
            path: '/challenge',
            component: React.lazy(() => import(/* webpackChunkName: "challenge" */ 'pages/challenge')),
            exact: true,
        },
        {
            path: '*',
            component: React.lazy(() => import(/* webpackChunkName: "not-found" */ 'pages/not-found')),
        },
    ];

    return (
        <Suspense fallback={<Spin />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/column" />} />
                    <Route element={<MainLayout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/column" element={<ColumnPage />} />
                        {privateRoutes.map(({ component: Component, ...rest }) => (
                            <Route
                                key={rest.path}
                                path={rest.path}
                                element={
                                    <RequireAuth>
                                        <Component />
                                    </RequireAuth>
                                }
                            />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoutes;
