import { useTranslations } from 'next-intl';

const Blog = () => {
    const t = useTranslations();
    return (
        <>
            <div className="blog__container">
                <h3 className='flex gap-2 items-center'><i className='fad fa-clock'></i> {t('Common.comingsoon')}</h3>
            </div>
        </>
    )
}

export default Blog