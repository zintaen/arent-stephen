import React, { FC, useState, useRef } from 'react';
import { Image } from 'antd';
import cn from 'classnames';

import { useOnClickOutside } from 'utils/hooks';
import MenuHambugerIcon from 'assets/images/menu_hambuger.png';
import MenuHambugerCloseIcon from 'assets/images/menu_hambuger_close.png';
import styles from './HambugerMenu.module.scss';

export interface IHambuber {
    text: string;
    onClick: () => void;
}

export interface HambugerMenuProps {
    items: IHambuber[];
}

const HambugerMenu: FC<HambugerMenuProps> = ({ items }) => {
    const hambugerRef = useRef<HTMLDivElement>(null);
    const [collapsed, setCollapsed] = useState(true);

    const _toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    useOnClickOutside(hambugerRef, () => setCollapsed(true));

    return (
        <div className={styles.hambugerMenuWrapper} ref={hambugerRef}>
            {collapsed ? (
                <Image
                    className={styles.hambugerMenuToogle}
                    src={MenuHambugerIcon}
                    preview={false}
                    onClick={_toggleCollapse}
                />
            ) : (
                <Image
                    className={styles.hambugerMenuToogle}
                    src={MenuHambugerCloseIcon}
                    preview={false}
                    onClick={_toggleCollapse}
                />
            )}
            <div
                className={cn(styles.hambugerMenu, {
                    [styles.show]: !collapsed,
                })}
            >
                {items.map(({ text, onClick }) => (
                    <div className={styles.hambugerMenuItem} key={text} onClick={onClick}>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HambugerMenu;
