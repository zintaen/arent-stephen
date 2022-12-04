import React, { FC } from 'react';

import styles from './RecommendCard.module.scss';

export interface RecommendCardProps {
    title: string;
    content: string;
}

const RecommendCard: FC<RecommendCardProps> = ({ title, content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <hr className={styles.seperator} />
            <div className={styles.content}>{content}</div>
        </div>
    );
};

export default RecommendCard;
