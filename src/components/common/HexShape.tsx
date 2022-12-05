import React, { FC } from 'react';
import { Image } from 'antd';

import styles from './HexShape.module.scss';

export interface HexShapeProps {
    icon: string;
    label: string;
}

const HexShape: FC<HexShapeProps> = ({ icon, label }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image className={styles.icon} src={icon} preview={false} />
                <div className={styles.label}>{label}</div>
            </div>
        </div>
    );
};

export default HexShape;
