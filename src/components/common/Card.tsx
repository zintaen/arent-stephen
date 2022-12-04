import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Card.module.scss';

export interface CardProps {
    image: string;
    datetime: string;
    title?: string;
    tags?: string[];
    square?: boolean;
}

const Card: FC<CardProps> = ({ square = false, image, datetime, title, tags }) => {
    return (
        <div
            className={cn(styles.container, {
                [styles.square]: square,
            })}
        >
            <div className={styles.imageWrapper} style={{ backgroundImage: `url(${image})` }}>
                <div className={styles.datetime}>{datetime}</div>
            </div>
            {title && <div className={styles.title}>{title}</div>}
            {tags && tags.length > 0 && (
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <div className={styles.tag} key={tag}>
                            {tag}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
