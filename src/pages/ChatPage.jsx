import React, {useState} from 'react';
import {Layout} from "antd";
import SiderBlock from "../components/ChatPart/SiderBlock/SiderBlock";
import HeaderBlock from "../components/ChatPart/HeaderBlock/HeaderBlock";
import Background from '../images/bg-content.jpg';
import ContentBlock from "../components/ChatPart/ContentBlock/ContentBlock";
const { Header, Sider, Content } = Layout;

const ChatPage = () => {
    const [selectedUserId, setSelectedUserId] = useState(1);
    return (
        <Layout>
            <Sider width="546" style={{backgroundColor: 'white', height: '100vh'}}>
                <SiderBlock setSelectedUserId={setSelectedUserId} selectedUserId={selectedUserId}/>
            </Sider>
            <Layout>
                <Header style={{backgroundColor: 'white', borderLeft: '1px solid #b2b2b2', borderBottom: '1px solid #b2b2b2'}}>
                    <HeaderBlock/>
                </Header>
                <Content style={{background: `url(${Background})`}}>
                    <ContentBlock selectedUserId={selectedUserId}/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ChatPage;