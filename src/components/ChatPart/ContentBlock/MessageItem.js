import React from 'react';
import clsx from "clsx";
import {Typography} from "antd";

const {Title, Text} = Typography;

const MessageItem = ({name, message, time, my}) => {
    return (
        <div style={{
            minWidth: '263px',
            maxWidth: '394px',
            minHeight: '74px',
            width: 'fit-content',
            padding: '5px 10px',
            position: 'relative',
            marginBottom: '15px'
        }} className={clsx(my ? 'my-message' : 'from-message')}>
            {!my && <div>
                <div style={{
                    fontSize: '15px',
                    maxWidth: '358px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: 'bold'
                }} className={clsx(!my && 'main-color')}>
                    {name}
                </div>
            </div>}
            <div style={{paddingBottom: '16px'}}>
                <Text style={{fontSize: '15px', maxWidth: '394px'}} className={clsx(my && 'white-font')}>{message}</Text>
            </div>
            <div style={{position: 'absolute', right: '9px', bottom: '0px'}}>
                <Text strong type="secondary" style={{fontSize: '15px'}}>18:00</Text>
            </div>
        </div>
    );
};

export default MessageItem;