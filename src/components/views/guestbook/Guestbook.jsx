import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { sendEmailNotification } from '@/services/EmailService';
import { fetcher } from '@/services/fetcher';
import { supabase } from '@/lib/supabase';

import { GuestbookMessages } from './GuestbookMessages';
import ChatInput from './ChatInput';
import ChatAuth from './ChatAuth';
import { ReplyProvider } from '@/context/ReplyContext';

export default function Guestbook({ locale }) {
    const { data: messages } = useSWR('/api/guestbook', fetcher);
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session?.user ?? null);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    // Handle send message
    const handleSendMessage = async (message) => {
        if (!message || !session) return;

        const { data, error } = await supabase
            .from('guestbook')
            .insert([
                {
                    message: message,
                    name: session.user_metadata.name || session.email,
                    email: session.email,
                    avatar: session.user_metadata.avatar_url,
                }
            ]);

        if (error) {
            console.error("Error sending message:", error.message);
        } else {
            // console.log("Message sent");

            // Kirim notifikasi email setelah pesan tersimpan
            session.email != 'dev.dwiwijaya@gmail.com' && await sendEmailNotification({
                name: session.user_metadata.name || session.email,
                message: message,
                email: session.email
            });
        }
    };

    // Handle delete message
    const handleDeleteMessage = async (id) => {
        if (!id) return;

        const { data, error } = await supabase
            .from('guestbook')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting message:", error.message);
        } else {
            // console.log("Message deleted:", data);
        }
    };

    return (
        <ReplyProvider>
            <div className="flex flex-col flex-1">
            <GuestbookMessages
                initialMessages={messages}
                onDeleteMessage={handleDeleteMessage}
                session={session}
                locale={locale}
            />
            {session ? (
                <ChatInput onSendMessage={handleSendMessage} session={session} locale={locale} />
            ) : (
                <ChatAuth />
            )}
            </div>
        </ReplyProvider>
    );
}
