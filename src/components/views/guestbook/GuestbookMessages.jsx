import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { supabase } from "@/lib/supabase";
import ChatItem from "./ChatItem";
import { useReply } from "@/context/ReplyContext";

export const GuestbookMessages = ({ initialMessages, onDeleteMessage, session, locale }) => {
    const [messages, setMessages] = useState(initialMessages || []);
    const scrollableContainerRef = useRef(null);  // Ref untuk container yang di-scroll
    const [activePopup, setActivePopup] = useState(null);
    const handlePopupToggle = (id) => {
        setActivePopup(activePopup === id ? null : id);
    };

    const scrollToBottom = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight;
        }
    };

    const { handleReply } = useReply();

    useLayoutEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Subscribe to changes in the "guestbook" table
    useEffect(() => {
        const subscription = supabase
            .channel('guestbook')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'guestbook' }, (payload) => {
                setMessages((currentMessages) => [...currentMessages, payload.new]);

                // Scroll otomatis jika email user yang login sama dengan email pengirim pesan
                if (payload.new.email === session?.email) {
                    scrollToBottom();
                }
            })
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'guestbook' }, (payload) => {
                setMessages((currentMessages) =>
                    currentMessages.filter((msg) => msg.id !== payload.old.id)
                );
            })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'guestbook' }, (payload) => {
                setMessages((currentMessages) =>
                    currentMessages.map((msg) =>
                        msg.id === payload.new.id ? payload.new : msg
                    )
                );
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [session]);

    const maxHeightSection = 130 + 36 + 40 + 40 + 92; // Padding section + title + subtitle + divider + footer
    const maxHeight = `calc(100svh - ${maxHeightSection}px)`;

    return (
        <div className="rounded-lg px-1">
            <ol
                ref={scrollableContainerRef}
                className="space-y-5 overflow-y-auto pb-4 overflow-auto pr-2"
                style={{ maxHeight }}
            >
                {messages.map((msg, index) => (
                    <ChatItem
                        key={index}
                        locale={locale}
                        onDelete={onDeleteMessage}
                        onReply={handleReply}
                        {...msg}
                        session={session}
                        onPopupToggle={handlePopupToggle}
                        isActivePopup={activePopup === msg.id}
                    />
                ))}
            </ol>
        </div>
    );

};
