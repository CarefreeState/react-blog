
import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import logo from '@/assets/logo.png';
import './index.scss';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  }

  return (
    <div className="login">
      <Card className='login-container'>
        <img src={logo} alt="logo" />
        <Form onFinish={onFinish} validateTrigger="onChange">
          <Form.Item name="mobile" rules={[
                // 按顺序校验
                { required: true, message: '请输入用户名' },
                { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
            ]}>
            <Input size='large' placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password size='large' placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size='large'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;