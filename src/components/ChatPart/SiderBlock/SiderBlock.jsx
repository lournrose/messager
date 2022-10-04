import React, {useEffect, useMemo, useState} from 'react';
import UserIcon from '../../../images/user-icon.svg';
import {Avatar, Input, Modal, Typography} from "antd";
import {SearchOutlined, UserOutlined} from "@ant-design/icons";
import UserItem from "./UserItem";
import UsersService from "../../../API/UsersService";
import useFetching from "../../../hooks/useFetching";
const { Title, Text } = Typography;

const SiderBlock = ({setSelectedUserId}) => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false);
    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const response = await UsersService.getAll();
        setUsers(response.data);
    })
    useEffect(() => {
        fetchUsers();
    }, [])
    const searchedUsers = useMemo(() => {
        return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, users])
    return (
        <>
            <div style={{display: 'flex', height: '64px', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px'}}>
                <UserOutlined onClick={() => setOpen(true)} style={{fontSize: '32px', marginRight: '10px', cursor: 'pointer', color: '#b2b2b2'}} className="primary-color-hover"/>
                <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Поиск..." prefix={<SearchOutlined />} className="input-svg-gray"/>
            </div>
            {users && <div style={{height: 'calc(100vh - 64px)', overflow: 'auto'}}>
                {searchedUsers.map((user, i) => <UserItem key={i} user={user} onClick={() => setSelectedUserId(user.id)}/>)}
            </div>}
            <Modal open={open} footer={false} onCancel={() => setOpen(false)}>
                <Title level={5} style={{textAlign: 'center'}}>Информация</Title>
                <Avatar size={75} icon={<UserOutlined />} style={{margin: '0 auto', display: 'block', marginTop: '25px'}}/>
                <Title level={4} style={{textAlign: 'center', marginTop: '15px'}}>Голышев Александр</Title>
                <div style={{textAlign: 'center'}}>
                    <Text type="secondary" strong style={{fontSize: '17px'}}>+7-960-319-13-60</Text>
                </div>
            </Modal>
        </>
    );
};

export default SiderBlock;