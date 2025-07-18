import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = ({ t }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex gap-2 items-center bg-background border border-stroke px-5 py-3 rounded-2xl">
                <i className="fad fa-palette text-primary"></i>
                <span>Loading...</span>
            </div>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex gap-2 items-center bg-background border border-stroke px-5 py-3 rounded-2xl hover:border-primary transition-3s"
            aria-label="Toggle theme"
        >
            <i className={`fad ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-primary`}></i>
            <span>{theme === 'dark' ? t('lightMode') : t('darkMode')}</span>
        </button>
    );
};

export default ThemeToggle;