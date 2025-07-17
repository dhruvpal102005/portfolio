import { format, formatDistanceToNow, isToday } from 'date-fns';
import { id, enUS } from 'date-fns/locale';
import { useEffect, useState } from 'react';

const ChatTime = ({ locale, datetime }) => {
    const currentLocale = locale === 'id' ? id : enUS;
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        const date = new Date(datetime);

        const updateTime = () => {
            setFormattedTime(
                formatDistanceToNow(date, { addSuffix: true, locale: currentLocale })
            );
        };

        updateTime(); // initial update
        const interval = setInterval(updateTime, 60000); // update every minute

        return () => clearInterval(interval);
    }, [currentLocale, datetime]);

    const dateObj = new Date(datetime);

    return (
        <div className="text-xs text-neutral-500">
            {isToday(dateObj)
                ? formattedTime
                : format(dateObj, 'dd MMMM yyyy, HH:mm', { locale: currentLocale })}
        </div>
    );
};

export default ChatTime;
