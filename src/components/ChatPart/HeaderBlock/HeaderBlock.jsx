import React, {useState} from 'react';
import {UserAddOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Modal, Typography} from "antd";
const {Title, Text} = Typography;

const HeaderBlock = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div style={{height: '64px', alignItems: 'center', display: 'flex', width: '680px', justifyContent: 'space-between', margin: '0 auto'}}>
                <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => setOpen(true)}>
                    <Avatar size={50} icon={<UserOutlined/>} style={{marginRight: '10px'}}/>
                    <Title level={4} style={{margin: 0}}>Голышев Александр</Title>
                </div>
                <div>
                    <Text strong style={{fontSize: '17px', padding: '3px 5px', border: '1px solid #FF7875', borderRadius: '15px'}} className="main-color">онлайн</Text>
                </div>
            </div>
            <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
                <Avatar size={75} icon={<UserOutlined />} style={{margin: '0 auto', display: 'block', marginTop: '25px'}}/>
                <Title level={4} style={{textAlign: 'center', marginTop: '15px'}}>Голышев Александр</Title>
                <div style={{textAlign: 'center'}}>
                    <Text type="secondary" strong style={{fontSize: '17px'}}>+7-960-319-13-60</Text>
                </div>
                <div style={{borderBottom: '1px solid gray', height: '1px', width: '100%', margin: '15px 0'}}></div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                    <UserAddOutlined style={{fontSize: '24px', marginRight: '5px'}}/>
                    <Text strong style={{fontSize: '15px'}}>Добавить аккаунт</Text>
                </div>
            </Modal>
        </>
    );
};

export default HeaderBlock;