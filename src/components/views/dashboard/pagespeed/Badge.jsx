import { useRouter } from 'next/router';
import clsx from 'clsx'

import { MENU_ITEMS } from '@/constants/data/menu'

export default function BadgeSection({ active, refetch }) {
    const { locale } = useRouter();
    const routes = MENU_ITEMS
    return (
        <ol className='flex gap-2 mb-3 overflow-y-hidden scrollbar-hide'>
            {routes.map(route => (
                <li key={route.href}>
                    <button 
                        data-umami-event={`Click Pagespeed - ${route.label[locale]}`}
                        className={clsx(
                            'badge !px-4',
                            active === route.href
                                ? '!text-green-500'
                                : ''
                        )}
                        onClick={() => refetch(route.href)}
                    >
                        <i className={route.iconClass}></i>
                        {route.label[locale]}
                    </button>
                </li>
            ))}
        </ol>
    )
}
