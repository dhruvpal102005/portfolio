import { PiArrowsClockwise } from "react-icons/pi"
const LastUpdated = ({ t, lastUpdate }) => {
    return (
        <div className="text-left mt-4 sm:mt-8">
            <h2 className='text-2xl mb-2 leading-6'>{t('welcome')}</h2>
            <time className="text-[.8rem] text-subtext flex items-center gap-1">
                {t("lastupdate")} : {lastUpdate}
            </time>
        </div>
    )
}

export default LastUpdated