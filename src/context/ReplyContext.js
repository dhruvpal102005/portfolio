import React, { createContext, useContext, useState } from 'react';

const ReplyContext = createContext();

export const useReply = () => useContext(ReplyContext);

export const ReplyProvider = ({ children }) => {
    const [replyTo, setReplyTo] = useState('');

    // function biar bisa dipanggil kaya onReply(name)
    const handleReply = (name) => {
        setReplyTo(`@${name}: `); // nanti muncul di input
    };

    return (
        <ReplyContext.Provider value={{ replyTo, handleReply, setReplyTo }}>
            {children}
        </ReplyContext.Provider>
    );
};