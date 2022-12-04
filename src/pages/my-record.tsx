import React from 'react';
import { useQuery } from 'react-query';

import { IExercise, IDiary } from 'types';
import { BASE_API_URL } from 'components/common/constants';
import Button from 'components/common/Button';
import RecommendCard from 'components/my-record/RecommendCard';
import Chart from 'components/common/Chart';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

import RecommendImage1 from 'assets/images/MyRecommend-1.jpg';
import RecommendImage2 from 'assets/images/MyRecommend-2.jpg';
import RecommendImage3 from 'assets/images/MyRecommend-3.jpg';
import styles from './my-record.module.scss';

const MyRecord = () => {
    const {
        isLoading: loadingExercises,
        isError: isErrorExercises,
        error: errorExercises,
        data: dataExercises,
    } = useQuery('exercisesData', () => fetch(`${BASE_API_URL}/exercises`).then((res) => res.json()));

    const {
        isLoading: loadingDiaries,
        isError: isErrorDiaries,
        error: errorDiaries,
        data: dataDiaries,
    } = useQuery('diariesData', () => fetch(`${BASE_API_URL}/diaries`).then((res) => res.json()));

    if (loadingExercises || loadingDiaries) {
        return <Loading />;
    }

    if (isErrorExercises || isErrorDiaries) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return <Error message={errorExercises.message || errorDiaries.message} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.recommendCards}>
                <RecommendCard image={RecommendImage1} title="BODY RECORD" content="自分のカラダの記録" />
                <RecommendCard image={RecommendImage2} title="MY EXERCISE" content="自分の運動の記録" />
                <RecommendCard image={RecommendImage3} title="MY DIARY" content="自分の日記" />
            </div>
            <div className={styles.bodyRecord}>
                <div className={styles.titleWrapper}>
                    <div className={styles.title}>BODY RECORD</div>
                    <div className={styles.datetime}>2021.05.21</div>
                </div>
                <div className={styles.content}>
                    <Chart />
                </div>
            </div>
            <div className={styles.myExercise}>
                <div className={styles.titleWrapper}>
                    <div className={styles.title}>MY EXERCISE</div>
                    <div className={styles.datetime}>2021.05.21</div>
                </div>
                <ul className={styles.content}>
                    {dataExercises.map((exe: IExercise, exeIdx: number) => (
                        <li key={exeIdx} className={styles.exercise}>
                            <div className={styles.title}>
                                <div className={styles.name}>{exe.name}</div>
                                <div className={styles.duration}>{exe.duration}</div>
                            </div>
                            <div className={styles.calories}>{exe.calories}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.myDiaryTitle}>MY DIARY</div>
            <div className={styles.myDiary}>
                {dataDiaries.map((diary: IDiary, diaryIdx: number) => (
                    <div key={diaryIdx} className={styles.diary}>
                        <div className={styles.date}>{diary.date}</div>
                        <div className={styles.time}>{diary.time}</div>
                        <div className={styles.text}>{diary.text}</div>
                    </div>
                ))}
            </div>
            <div className={styles.loadMore}>
                <Button>自分の日記をもっと見る</Button>
            </div>
        </div>
    );
};

export default MyRecord;
