import React from 'react';
import {CheckOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Typography} from "antd";

const {Title, Text} = Typography;

const UserItem = ({user, ...props}) => {
    return (
        <div style={{
            display: 'flex',
            padding: '10px 10px',
            position: 'relative',
            borderRadius: '0 17px 17px 0',
            marginRight: '15px',
            cursor: 'pointer'
        }} className="message-hover" {...props}>
            <div style={{position: 'absolute', right: '10px', top: '5px'}}>
                <CheckOutlined style={{color: '#FF7875', marginRight: '4px'}}/>
                <Text strong type="secondary">22.07.14</Text>
            </div>
            <Avatar size={50} icon={<UserOutlined/>} style={{marginRight: '10px'}}/>
            <div style={{lineHeight: '1.2'}}>
                <Title level={4} style={{margin: 0}}>{user.name}</Title>
                <Text type="secondary" strong>{user.email}</Text>
            </div>
        </div>
    );
};

export default UserItem;