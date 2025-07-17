import Link from "next/link";
import { useTranslations } from "next-intl";
import { HiOutlineLogin as SignInIcon } from "react-icons/hi";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

import { supabase } from "@/lib/supabase";


const Providers = [
    {
        id: "google",
        icon: <GoogleIcon size={18} />,
        bgColor: "!bg-white",
        iconColor: "text-black",
        textColor: "text-black",
        label: "Login with Google",
    },
    {
        id: "github",
        icon: <GithubIcon size={18} />,
        bgColor: "!bg-white",
        iconColor: "!text-black",
        textColor: "text-black",
        label: "Login with Github",
    },
];
const signIn = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider, options: {
            redirectTo: `${window.location.origin}/guestbook`, // pastikan ini menuju ke halaman guestbook
        },
    });
};
const ChatAuth = () => {
    const t = useTranslations("Guestbook");
    return (
        <div className="flex flex-col border-t border-stroke">
            <div className="space-y-5 pt-3 text-start text-neutral-700 dark:text-neutral-400">
                <p className="text-xs sm:text-sm ml-1">
                    <span className="inline-block align-middle">
                        <SignInIcon size={16} className="min-w-4 text-start mr-[2px] mb-[2px]" />
                    </span>
                    <span className="">
                        {t('signInMessage')}  <Link className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer" href="/privacy-policy">{t('privacyPolicy')}</Link>.
                    </span>
                </p>

                <div className={`flex items-start sm:items-center justify-start gap-2 sm:gap-4 !mt-3`}>
                    {Providers?.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => signIn(button.id)}
                            className={`btn flex justify-center whitespace-nowrap text-sm xs:text-base flex-1 xs:flex-none !p-2 outline outline-stroke outline-1 !border-none ${button.bgColor} ${button.iconColor} `}
                            data-umami-event={`Sign In to Chat: ${button.label}`}
                        >
                            {button.icon}
                            <span className={button.textColor}>{button.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatAuth;
