import React, { useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

import { IBlog } from 'types';
import { getRandomInt } from 'utils/helpers';
import { BASE_API_URL } from 'components/common/constants';
import Button from 'components/common/Button';
import RecommendCard from 'components/column/RecommendCard';
import Card from 'components/common/Card';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

import styles from './column.module.scss';

const Column = () => {
    const [page, setPage] = useState(0);
    const {
        isFetching: loadingBlogs,
        isError: isErrorBlogs,
        error: errorBlogs,
        data: dataBlogs,
        fetchNextPage: fetchNextPageBlogs,
    } = useInfiniteQuery('blogsData', async ({ pageParam = 0 }) => {
        return fetch(`${BASE_API_URL}/blogs?_page=${pageParam}&_limit=8`).then((res) => res.json());
    });

    useEffect(() => {
        fetchNextPageBlogs({ pageParam: page });
    }, [fetchNextPageBlogs, page]);

    if (loadingBlogs) {
        return <Loading />;
    }

    if (isErrorBlogs) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return <Error message={errorBlogs.message} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.recommendCards}>
                <RecommendCard title="RECOMMENDED COLUMN" content="オススメ" />
                <RecommendCard title="RECOMMENDED DIET" content="ダイエット" />
                <RecommendCard title="RECOMMENDED BEAUTY" content="美容" />
                <RecommendCard title="RECOMMENDED HEALTH" content="健康" />
            </div>
            <div className={styles.cards}>
                {dataBlogs?.pages.map((blogList: IBlog[], page: number) => {
                    return (
                        <React.Fragment key={`page-${page + 1}`}>
                            {blogList.map((blog: IBlog, blogIdx: number) => (
                                <Card
                                    key={blogIdx}
                                    image={require(`assets/images/column-${getRandomInt(1, 8)}.jpg`)}
                                    datetime={blog.datetime}
                                    title={blog.title}
                                    tags={blog.tags}
                                />
                            ))}
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={styles.loadMore}>
                <Button onClick={() => setPage(page + 1)}>コラムをもっと見る</Button>
            </div>
        </div>
    );
};

export default Column;
