import { useRouter } from "next/router";

const LanguageToggle = ({ handleClick }) => {
    const router = useRouter();
    const { locale, pathname, asPath, query } = router;

    const switchLanguage = (newLocale) => {
        handleClick && handleClick();
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div className="flex gap-2 items-center bg-background border border-stroke px-5 py-3 rounded-2xl">
            <i className="fad fa-language text-primary"></i>
            <div className="flex gap-1">
                <button
                    onClick={() => switchLanguage('id')}
                    className={`px-2 py-1 text-sm rounded ${locale === 'id' ? 'bg-primary text-white' : 'text-subtext hover:text-primary'}`}
                >
                    ID
                </button>
                <span className="text-subtext">|</span>
                <button
                    onClick={() => switchLanguage('en')}
                    className={`px-2 py-1 text-sm rounded ${locale === 'en' ? 'bg-primary text-white' : 'text-subtext hover:text-primary'}`}
                >
                    EN
                </button>
            </div>
        </div>
    );
};

export default LanguageToggle;