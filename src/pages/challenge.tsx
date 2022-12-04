import React from 'react';
import { Progress } from 'antd';
import { useQuery } from 'react-query';

import { IHistory } from 'types';
import { BASE_API_URL } from 'components/common/constants';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import Chart from 'components/common/Chart';
import HexShape from 'components/common/HexShape';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

import Challenge1 from 'assets/images/d01.jpg';
import IconKnife from 'assets/images/icon_knife.png';
import IconCup from 'assets/images/icon_cup.png';

import styles from './challenge.module.scss';

const historyImageMapper: { [key: string]: string } = {
    history1: 'm01',
    history2: 'l03',
    history3: 'd01',
    history4: 'l01',
    history5: 'm01',
    history6: 'l02',
    history7: 'd02',
    history8: 's01',
};

const Challenge = () => {
    const {
        isLoading: loadingHistories,
        isError: isErrorHistories,
        error: errorHistories,
        data: dataHistories,
    } = useQuery('historiesData', () => fetch(`${BASE_API_URL}/histories`).then((res) => res.json()));

    if (loadingHistories) {
        return <Loading />;
    }

    if (isErrorHistories) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return <Error message={errorHistories.message} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.achievement}>
                <div className={styles.rate}>
                    <div className={styles.image} style={{ backgroundImage: `url(${Challenge1})` }} />
                    <Progress
                        className={styles.percent}
                        width={181}
                        strokeColor="#ffffff"
                        strokeWidth={3}
                        type="circle"
                        percent={75}
                        format={(percent) => <div className={styles.label}>05/21 {percent}%</div>}
                    />
                </div>
                <div className={styles.bodyWeight}>
                    <Chart />
                </div>
            </div>
            <div className={styles.inputs}>
                <HexShape icon={IconKnife} label="Morning" />
                <HexShape icon={IconKnife} label="Lunch" />
                <HexShape icon={IconKnife} label="Dinner" />
                <HexShape icon={IconCup} label="Snack" />
            </div>
            <div className={styles.history}>
                {dataHistories.map((history: IHistory, historyIdx: number) => (
                    <Card
                        key={historyIdx}
                        square={true}
                        image={require(`assets/images/${historyImageMapper[`history${historyIdx + 1}`]}.jpg`)}
                        datetime={history.datetime}
                    />
                ))}
            </div>
            <div className={styles.loadMore}>
                <Button>記録をもっと見る</Button>
            </div>
        </div>
    );
};

export default Challenge;
