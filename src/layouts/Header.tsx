import React, { FC, MouseEvent } from 'react';
import { Link, useLocation, useNavigate, NavigateFunction } from 'react-router-dom';
import { Layout, notification, Badge, Image } from 'antd';

import { localS } from 'utils/helpers';
import cn from 'classnames';

import HambugerMenu from 'components/layouts/HambugerMenu';

import Logo from 'assets/images/logo.png';
import MenuMyRecordIcon from 'assets/images/menu_my_record.png';
import MenuChallengeIcon from 'assets/images/menu_challenge.png';
import MenuNewsIcon from 'assets/images/menu_news.png';

import styles from 'layouts/Header.module.scss';

export interface MenuItemProps {
    icon: string;
    to: string;
    text: string;
    active: boolean;
    badge?: string | number;
    navigate: NavigateFunction;
}

const MenuItem: FC<MenuItemProps> = ({ icon, to, text, active, badge, navigate }) => {
    const _handleNavigate = (e: MouseEvent<HTMLAnchorElement>) => {
        const isLoggedIn = localS.get('isLoggedIn') === 'true';

        if (!isLoggedIn) {
            e.preventDefault();
            navigate('/login');
        }
    };

    return (
        <Link
            className={cn(styles.menuItemLink, {
                [styles.active]: active,
            })}
            to={to}
            onClick={_handleNavigate}
        >
            <div className={styles.menuItemIcon}>
                <Badge className={styles.menuItemBadge} count={badge} offset={[0, 5]} color="#ff963c">
                    <Image src={icon} preview={false} />
                </Badge>
            </div>
            {text}
        </Link>
    );
};

const Header: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <Layout.Header className={styles.header}>
            <Image className={styles.logo} src={Logo} preview={false} />
            <div className={styles.menu}>
                <MenuItem
                    icon={MenuMyRecordIcon}
                    to="/my-record"
                    text="自分の記録"
                    active={pathname === '/my-record'}
                    navigate={navigate}
                />
                <MenuItem
                    icon={MenuChallengeIcon}
                    to="/challenge"
                    text="チャレンジ"
                    active={pathname === '/challenge'}
                    navigate={navigate}
                />
                <MenuItem
                    icon={MenuNewsIcon}
                    to="/news"
                    text="お知らせ"
                    active={pathname === '/news'}
                    badge="1"
                    navigate={navigate}
                />
                <HambugerMenu
                    items={[
                        { text: '自分の記録', onClick: () => {} },
                        { text: '体重グラフ', onClick: () => {} },
                        { text: '目標', onClick: () => {} },
                        { text: '選択中のコース', onClick: () => {} },
                        { text: 'コラム一覧', onClick: () => {} },
                        { text: '設定', onClick: () => {} },
                        {
                            text: 'ログアウト',
                            onClick: () => {
                                localS.set('isLoggedIn', false);
                                notification.success({ message: 'Logged out successfully.' });
                                if (pathname !== '/column') {
                                    navigate('/login');
                                }
                            },
                        },
                    ]}
                />
            </div>
        </Layout.Header>
    );
};

export default Header;
