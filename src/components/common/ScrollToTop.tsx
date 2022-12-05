import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './ScrollToTop.module.scss';

type ScrollToTopProps = React.ComponentPropsWithoutRef<'button'> & {
    top?: number;
    smooth?: boolean;
    svgPath?: string;
    viewBox?: string;
    component?: any;
    width?: string;
    height?: string;
};

function _handleScrollToTop(smooth = false) {
    if (smooth) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    } else {
        document.documentElement.scrollTop = 0;
    }
}

const ScrollToTop: FC<ScrollToTopProps> = ({
    top = 20,
    className = '',
    color = 'black',
    smooth = false,
    component = '',
    viewBox = '0 0 16 16',
    svgPath = 'M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z',
    width = '24',
    height = '24',
    ...props
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(document.documentElement.scrollTop >= top);
        };
        onScroll();
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [top]);

    return (
        <>
            {visible && (
                <button
                    className={cn(styles.scrollToTop, className)}
                    onClick={() => _handleScrollToTop(smooth)}
                    aria-label="Scroll to top"
                    {...props}
                >
                    {component || (
                        <svg width={width} height={height} fill={color} viewBox={viewBox}>
                            <path d={svgPath} />
                        </svg>
                    )}
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
