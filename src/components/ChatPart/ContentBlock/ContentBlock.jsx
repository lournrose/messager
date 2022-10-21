import React, {useEffect, useRef, useState} from 'react';
import MessageItem from "./MessageItem";
import {Input, Typography} from "antd";
import {LoadingOutlined, MailOutlined, SmileOutlined} from "@ant-design/icons";
import letterIcon from '../../../images/letter-icon.svg';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import clsx from "clsx";
import useFetching from "../../../hooks/useFetching";
import UsersService from "../../../API/UsersService";
import MessagesService from "../../../API/MessagesService";

const {Title, Text} = Typography;

const ContentBlock = ({selectedUserId}) => {
    const content_block = useRef(null)
    const [messages, setMessages] = useState([])
    const [messageSend, setMessageSend] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const [fetchMessages, isLoading, error] = useFetching(async () => {
        const response = await MessagesService.getAll(10, selectedUserId);
        setMessages(response.data);
    })
    useEffect(() => {
        content_block.current.scrollTo(0, content_block.current.scrollHeight)
    })
    useEffect(() => {
        fetchMessages();
    }, [selectedUserId])
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setMessageSend(messageSend + emoji);
    }
    const sendMessage = () => {
        if(messageSend) {
            messages.push({body: messageSend, my: true});
            setMessageSend('');
            setShowEmojis(false);
        }
    }
    return (
        <div style={{padding: '0 10px', marginTop: '15px', position: 'relative'}}>
            <div style={{position: 'absolute', zIndex: 99999, left: '50%', transform: 'translate(-50%, 0)', top: '10px'}}>
                <Text style={{backgroundColor:  'rgba(0,0,0,40%)', padding: '7px 13px', borderRadius: '25px', backdropFilter: 'blur(5px)', color: 'white', fontSize: '16px'}}>Сегодня</Text>
            </div>
            <div style={{height: '772px', overflow: isLoading ? 'hidden' : 'auto', width: '100%', position: 'relative'}} className="chat-scroll" ref={content_block}>
                <div style={{width: '680px', margin: '0 auto', height: '100%'}}>
                    {isLoading ?
                        <LoadingOutlined style={{color: '#FF7875', fontSize: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}/>
                        :
                        messages.map((message, index) => <MessageItem name={message?.title} message={message.body} my={message?.my} key={index}/>)
                    }
                </div>
            </div>
            <div style={{
                marginTop: '26px',
                width: '680px',
                margin: '15px auto',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative'
            }}>
                <Input value={messageSend} onChange={e => setMessageSend(e.target.value)}
                       suffix={<SmileOutlined style={{fontSize: '22px', color: '#b2b2b2', cursor: 'pointer'}}
                                              onClick={() => setShowEmojis(!showEmojis)}/>}
                       style={{height: '60px', borderRadius: '23px 23px 0 23px', fontSize: '18px'}}
                       placeholder="Написать сообщение"/>
                {showEmojis && <div style={{position: 'absolute', right: '73px', top: '-438px'}}>
                    <Picker perLine="9" emojiSize="18" locale="ru" data={data} onEmojiSelect={addEmoji}/>
                </div>}
                <div style={{
                    height: '60px',
                    width: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    marginLeft: '20px',
                    cursor: 'pointer'
                }} onClick={sendMessage} className="send-message">
                    <img src={letterIcon} alt="Send" style={{width: '30px'}}/>
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;