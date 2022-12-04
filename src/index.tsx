import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routes from 'routes';

import 'antd/dist/reset.css';
import 'assets/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container as Element);
const queryClient = new QueryClient();

root.render(
    <ConfigProvider
        theme={{
            token: {
                fontFamily: 'Noto Sans JP, Inter',
            },
        }}
    >
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    </ConfigProvider>
);
