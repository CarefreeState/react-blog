
import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import logo from '@/assets/logo.png';
import './index.scss';
import { fetchLogin } from '@/store/AppStore/modules/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    await dispatch(fetchLogin(values))
    navigate('/')
    message.success('登录成功')
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
          <Form.Item name="code" rules={[{ required: true, message: '请输入验证码' }]}>
            <Input size='large' placeholder="请输入验证码" />
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