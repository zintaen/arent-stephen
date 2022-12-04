import React, { FC } from 'react';

import styles from './RecommendCard.module.scss';

export interface RecommendCardProps {
    image: string;
    title: string;
    content: string;
}

const RecommendCard: FC<RecommendCardProps> = ({ image, title, content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <div className={styles.description}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
            </div>
        </div>
    );
};

export default RecommendCard;
