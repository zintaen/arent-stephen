import React from 'react';
import { Alert } from 'antd';

const Error = ({ message }: { message: string }) => <Alert type="error" message={message} />;

export default Error;
