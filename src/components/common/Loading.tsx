import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import cn from 'classnames';

import styles from 'components/common/Loading.module.scss';

const Loading = ({ global = false }: { global?: boolean }) => {
    return (
        <div
            className={cn(styles.loading, {
                [styles.global]: global,
            })}
        >
            <Spin indicator={<LoadingOutlined spin className={styles.loadingIcon} />} tip="Loading..." />
        </div>
    );
};

export default Loading;
