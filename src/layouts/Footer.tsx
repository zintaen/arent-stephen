import React, { FC } from 'react';
import { Layout, Typography } from 'antd';

import styles from 'layouts/Footer.module.scss';

const Footer: FC = () => (
    <Layout.Footer className={styles.footer}>
        <Typography className={styles.link}>会員登録</Typography>
        <Typography className={styles.link}>運営会社</Typography>
        <Typography className={styles.link}>利用規約</Typography>
        <Typography className={styles.link}>個人情報の取扱について録</Typography>
        <Typography className={styles.link}>特定商取引法に基づく表記</Typography>
        <Typography className={styles.link}>お問い合わせ</Typography>
    </Layout.Footer>
);

export default Footer;
