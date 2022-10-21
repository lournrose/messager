import React from 'react';
import {CheckOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Typography} from "antd";
import clsx from "clsx";

const {Title, Text} = Typography;

const UserItem = ({user, selectedUserId, ...props}) => {
    return (
        <div style={{
            display: 'flex',
            padding: '10px 10px',
            position: 'relative',
            borderRadius: '0 17px 17px 0',
            marginRight: '15px',
            cursor: 'pointer',
        }} className={clsx(selectedUserId === user.id ? 'main-bg' : 'message-hover')} {...props}>
            <div style={{position: 'absolute', right: '10px', top: '5px'}}>
                <CheckOutlined style={{marginRight: '4px'}} className={clsx(selectedUserId === user.id ? 'white-font' : 'main-font')}/>
                <Text strong style={{color: selectedUserId === user.id ? 'white' : 'darkgray'}}>22.07.14</Text>
            </div>
            <Avatar size={50} icon={<UserOutlined/>} style={{marginRight: '10px'}}/>
            <div style={{lineHeight: '1.2'}}>
                <Title level={4} style={{margin: 0, color: selectedUserId === user.id ? 'white' : 'black'}}>{user.name}</Title>
                <Text style={{color: selectedUserId === user.id ? 'white' : 'darkgray'}} strong>{user.email}</Text>
            </div>
        </div>
    );
};

export default UserItem;