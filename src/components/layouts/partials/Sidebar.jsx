import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { MENU_ITEMS } from '@/constants/data/menu';

import LanguageToggle from '../../toggles/LanguageToggle';
import ThemeToggle from '../../toggles/ThemeToggle';
import LastUpdated from './LastUpdated';
import Footer from './Footer';
import Logo from './Logo';

const Sidebar = ({ className, lastUpdate }) => {
    const [toggle, setToggle] = useState(false);
    const { locale } = useRouter();
    const { theme } = useTheme();
    const pathname = usePathname()
    const t = useTranslations("Sidebar");

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString(locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    };

    useEffect(() => {
        const sidebarElement = document.querySelector('.sidebar');

        const handleClickOutside = (event) => {
            if (sidebarElement && !sidebarElement.contains(event.target)) {
                setToggle(false);
            }
        };

        const handleBodyScroll = () => {
            if (toggle) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setToggle(false); // If the screen width is <= 1024px, close the sidebar
            }
        };

        document.querySelector('.main').classList.toggle('sidebar-expanded', toggle);
        handleBodyScroll();

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = ''; // Reset body overflow when component unmounts
        };
    }, [toggle]);

    const handlersClose = useSwipeable({
        delta: 50,
        trackMouse: true,
        trackTouch: true,
        onSwipedLeft: () => setToggle(false),
        preventScrollOnSwipe: true,
        touchEventOptions: { passive: true },
    });
    const handlersOpen = useSwipeable({
        delta: 24,
        trackMouse: true,
        trackTouch: true,
        onSwipedRight: () => setToggle(true),
        preventScrollOnSwipe: true,
        touchEventOptions: { passive: true },
    });

    return (
        <>
            <div  {...handlersOpen} className="w-6 h-full absolute top-0 left-0 lg:hidden z-10" />
            <aside {...handlersClose} className={`sidebar ${className} ${toggle && '!left-0'} max-h-[100dvh] min-h-[100dvh] scrollbar-hide overflow-x-auto fixed -left-64 lg:left-0 top-0 bg-container border border-stroke pl-0 p-6 w-64 flex flex-col gap-8 justify-between text-center transition-3s z-10 lg:z-0 shadow-sm`}>
                <div className="flex flex-col gap-8">
                    <header className="ml-6 flex flex-col gap-8">
                        <Logo theme={theme} setToggle={setToggle} />
                        <LastUpdated lastUpdate={formatDate(lastUpdate)} t={t} />
                        <div className="flex gap-2 flex-col">
                            <ThemeToggle t={t} />
                            <LanguageToggle handleClick={() => setToggle(false)} />
                        </div>
                    </header>
                    <nav className="nav">
                        <div className="px-6 py-4 bg-background rounded-l-none rounded-2xl">
                            <ul className="flex flex-col items-center">
                                {MENU_ITEMS.map((item, index) => (
                                    <li key={index} className='w-full group py-2'>
                                        <Link prefetch={false} tabIndex={0} aria-label={item.label[locale]} onClick={() => setToggle(false)} href={item.href} title={item.label[locale]} className={`${pathname === item.href ? '!text-primary' : ''} hover:text-primary  text-text   h-full transition-300 flex items-center justify-between`}>
                                            <span className='flex items-center gap-3'><i className={`${item.iconClass} min-w-5 flex justify-center items-center group-hover:-rotate-[8deg] duration-300 transition-all`}></i> {item.label[locale]}</span> {pathname === item.href && <i className="fad fa-arrow-right animate-pulse"></i>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <Footer t={t} />
                <div onClick={() => setToggle(!toggle)} className={`toggle lg:-left-64 left-5 sidebar__toggle ${toggle ? '!left-[17rem]' : ''}`}>
                    <i className="fa-duotone fa-bars text-primary"></i>
                </div>
            </aside>
        </>
    );
};

export default Sidebar
