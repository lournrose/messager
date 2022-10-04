import React from 'react';
import Background from '../images/bg-content.jpg';
import {Button, Form, Input, Typography} from "antd";
import {Link} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../utils/consts";
import AuthStore from "../store/AuthStore";
const { Title, Text } = Typography;

const AuthPage = () => {
    const onFinish = () => {
        AuthStore.auth = true;
    }
    return (
        <div style={{height: '100vh', width: '100%', background: `url(${Background})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '300px', width: '382px', backgroundColor: 'white', borderRadius: '20px', padding: '25px 25px'}}>
                <div>
                    <div>
                        <Title level={3} style={{textAlign: 'center', marginBottom: '22px'}}>Войди в аккаунт</Title>
                    </div>
                    <Form onFinish={onFinish}>
                        <Form.Item name="username" rules={[
                            {
                                required: true,
                                message: 'Пожалуйса, введи свой никнейм',
                            },
                        ]}>
                            <Input style={{backgroundColor: '#EEF0F0', border: 'none', height: '40px'}} placeholder="Введи свой никнейм"/>
                        </Form.Item>
                        <Form.Item name="password" rules={[
                            {
                                required: true,
                                message: 'Пожалуйса, введи свой пароль',
                            },
                        ]}>
                            <Input style={{backgroundColor: '#EEF0F0', border: 'none', height: '40px'}} placeholder="И придумай пароль"/>
                        </Form.Item>
                        <div style={{width: '250px', margin: '0 auto'}}>
                            <Button type="primary" size="large" block htmlType="submit">Войти</Button>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px'}}>
                                <Text type="secondary" strong>Нет аккаунта?<Link to={REGISTRATION_ROUTE}><Text type="danger" strong style={{cursor: 'pointer'}}> Зарегистрируйся</Text></Link></Text>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;