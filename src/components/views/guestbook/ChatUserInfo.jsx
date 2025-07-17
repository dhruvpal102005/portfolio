import { supabase } from "@/lib/supabase";
import { HiOutlineLogout as SignOutIcon } from "react-icons/hi";

const ChatUserInfo = ({ session, locale }) => {
    const userName = session?.name ?? null;
    const userEmail = session?.email ?? null;
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
    };
    return session ? (
        <div className={`ml-1 flex flex-col items-start gap-2 text-sm md:flex-row md:items-center`}>
            <div className="flex flex-wrap gap-1 text-neutral-500">
                <p>{locale == 'en' ? 'Signed in as' : 'Masuk sebagai'}</p>
                <p className="font-medium">{userName}</p>
                <p>({userEmail})</p>
            </div>
            <>
                <div className="hidden text-neutral-500 md:block">•</div>
                <div
                    onClick={() => signOut()}
                    className="flex cursor-pointer items-center gap-1 font-medium text-red-500"
                    data-umami-event="Sign Out from Chat Page"
                >
                    <SignOutIcon size={16} className="cursor-pointer text-red-500" />
                    <span>{locale == 'en' ? 'Sign Out' : 'Keluar'}</span>
                </div>
            </>
        </div>
    ) : null;
};

export default ChatUserInfo;
