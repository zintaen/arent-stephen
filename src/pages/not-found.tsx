import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="This page not exist."
            extra={
                <Button type="primary" onClick={() => navigate('/home')}>
                    Back to homepage
                </Button>
            }
        />
    );
};

export default NotFound;
