import React, { FunctionComponent } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { localS } from 'utils/helpers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import loginVideo from 'assets/videos/login.mp4';
import logo from 'assets/images/logo.png';
import styles from './login.module.scss';

const Login: FunctionComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { from: Location };
    const from = state ? state.from.pathname : '/';

    const _handleFinish = () => {
        localS.set('isLoggedIn', true);
        notification.success({ message: 'Logged In Successfully.' });
        navigate(from === '/' ? '/my-record' : from, {
            replace: true,
        });
    };

    return (
        <>
            <video className={styles.backgroundVideo} autoPlay loop muted>
                <source src={loginVideo} type="video/mp4" />
            </video>
            <div className={styles.form}>
                <div className={styles.logo}>
                    <img alt="logo" src={logo} />
                </div>
                <Form
                    className={styles.login}
                    name="basic"
                    initialValues={{ remember_me: true }}
                    onFinish={_handleFinish}
                >
                    <Form.Item
                        name="identify"
                        rules={[{ required: true, message: 'Username is required!' }]}
                        hasFeedback
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Password is required!' }]}
                        hasFeedback
                    >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>

                    <Form.Item name="remember_me" valuePropName="checked">
                        <Checkbox className={styles.rememberMe}>Remember Me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button className={styles.loginBtn} type="primary" htmlType="submit">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Login;
