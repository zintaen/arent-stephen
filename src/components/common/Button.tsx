import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';
import cn from 'classnames';

import styles from './Button.module.scss';

const Button = ({ className, ...rest }: ButtonProps) => {
    return <AntButton className={cn(styles.container, className)} {...rest} />;
};

export default Button;
