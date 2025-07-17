import { useState, useEffect } from 'react';
import { BiCalendar } from 'react-icons/bi';

const WorkDuration = ({ startMonth, endMonth, locale }) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const calculateDuration = () => {
            const start = new Date(startMonth);
            const end = endMonth ? new Date(endMonth) : new Date();

            let yearDiff = end.getFullYear() - start.getFullYear();
            let monthDiff = end.getMonth() - start.getMonth();

            yearDiff = monthDiff < 0 && yearDiff != 0 ? yearDiff - 1 : yearDiff;
            monthDiff = monthDiff < 0 ? 12 + monthDiff : monthDiff;

            const yearLabel = locale === "en" ? "Year" + (yearDiff > 1 ? 's' : '') : "Tahun";
            const monthLabel = locale === "en" ? "Month" + (monthDiff > 1 ? 's' : '') : "Bulan";

            if (yearDiff === 0 && monthDiff === 0) {
                setDuration(locale == "en" ? "Less than a Month" : "Kurang dari satu bulan");
            } else if (yearDiff === 0) {
                setDuration(`${monthDiff} ${monthLabel}`);
            } else if (yearDiff === 1 && monthDiff === 0) {
                setDuration(`${yearDiff} ${yearLabel}`);
            } else {
                const formattedDuration = `${yearDiff} ${yearLabel} ${monthDiff} ${monthLabel}`;
                setDuration(formattedDuration);
            }
        };

        calculateDuration();
    }, [startMonth, endMonth, locale]);

    return (
        <p className='text-sm text-subtext  flex items-center gap-1'><BiCalendar className='text-primary' />{duration}</p>
    );
};

export default WorkDuration;
