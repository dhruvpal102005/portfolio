import { useEffect, useRef, useState } from "react";
import { FiSend as SendIcon } from "react-icons/fi";

import ChatUserInfo from "./ChatUserInfo";
import { useReply } from "@/context/ReplyContext";
import Image from "next/image";

const ChatInput = ({ onSendMessage, session, locale }) => {
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const { replyTo, setReplyTo } = useReply();
    const inputRef = useRef();

    useEffect(() => {
        if (replyTo && inputRef.current) {
            inputRef.current.value = replyTo;
            inputRef.current.focus();
        }
    }, [replyTo]);

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);

        try {
            await onSendMessage(message);
            setMessage("");
        } catch (error) {
            // console.error('Error sending message:', error);
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <form className="flex items-center gap-x-3 border-t border-stroke pb-3 pt-4">
                <Image src={session.user_metadata.avatar_url} alt={session.user_metadata.name} width={40} height={40} className="rounded-full" />
                <textarea
                    rows={1}
                    type="text"
                    ref={inputRef}
                    value={message}
                    onChange={handleChange}
                    placeholder={locale == "en" ? "Drop your thoughts here..." : "Tulis kesanmu di sini..."}
                    className="flex-grow bg-container rounded-md border p-2 focus:outline-none dark:border-stroke"
                    disabled={isSending}
                    autoFocus
                />
                <button
                    type="submit"
                    onClick={handleSendMessage}
                    className={
                        `rounded-md btn !p-[.65rem] ${!message.trim() && "!bg-container !border-stroke !text-subtext cursor-not-allowed "}`
                    }
                    disabled={isSending || !message.trim()}
                    data-umami-event="Chat Widget: Send Chat"
                >
                    <SendIcon size={18} />
                </button>
            </form>
            <ChatUserInfo session={session} locale={locale} />
        </>
    );
};

export default ChatInput;
