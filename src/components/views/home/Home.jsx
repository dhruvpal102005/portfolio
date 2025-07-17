import Link from 'next/link'
import Router from 'next/router'
import { useTranslations } from 'next-intl'

import Profile from '@/assets/avatar-profile.jpg'
import Image from '@/components/elements/Image'

import HomeSocials from './HomeSocials'

const Home = () => {
    const t = useTranslations('Home');
    const infoItems = [
        // { label: t('openToOpportunities'), icon: 'fa-briefcase' },
        { label: t('motto'), icon: 'fa-quote-right' },
        { label: t('based'), icon: 'fa-street-view' }
    ];
    return (
        <div className='absolute -top-[175%] w-[calc(100%-40px)] '>
            <div className="flex justify-between gap-4 items-end  mb-8">
                <div className="!min-w-[108px] max-w-[108px] outline outline-[.5rem] outline-background rounded-2xl bg-container">
                    <Image
                        src={Profile}
                        alt="Dwi Wijaya"
                        loading="eager"
                        className="rounded-2xl"
                        priority={true}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-3xl text-text flex items-center gap-3 group">
                    Dwi Wijaya
                    <i className="text-green-500 dark:text-green-300 fad fa-check-circle fa-2xs transition-all duration-100 transform group-hover:animate-flip active:scale-150"></i>
                </h1>

                <div className="flex flex-col">
                    <h2 className="flex items-center mb-2 text-text font-semibold text-lg">
                        {t('introduction')}
                    </h2>
                    <p className='text-text text-sm leading-relaxed'>
                        {t('passion')}
                    </p>
                </div>

                <div className="flex flex-col space-y-1">
                    {infoItems.map((item, index) => (
                        <p key={index} className='group w-fit cursor-pointer text-subtext gap-2 text-sm flex items-center hover:text-primary transition-all duration-100'>
                            <span className="text-primary">-</span> {item.label}
                            <i className={`group-hover:rotate-12 group-hover:scale-110 transition-all duration-100 text-primary fad ${item.icon}`}></i>
                        </p>
                    ))}
                </div>
            </div>
            <HomeSocials />
            <hr className="hr" />
            <div className='card mb-6 !pb-4'>
                <div className='flex gap-3 items-center'>
                    <i className='fad fa-rocket-launch text-primary'></i>
                    <h3 className='text-xl text-title font-medium'>{t('collaboration')}</h3>
                </div>
                <p className='text-sm text-text mt-2 mb-5'>
                    {t('freelance')}
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => Router.push('/contact')}
                        data-umami-event='Click Get in Touch'
                        aria-label='contact me'
                        className='btn sm:!gap-3 justify-center !w-1/2 sm:!w-fit whitespace-nowrap text-sm sm:text-base !py-3 sm:!py-2'
                    >
                        <i className="fad fa-envelope"></i>{t('getInTouch')}
                    </button>
                    <Link
                        href="https://bit.ly/cv-dwiwijaya"
                        aria-label="resume"
                        data-umami-event='Get Resume'
                        rel="noopener noreferrer"
                        target='_blank'
                        className="btn sm:!gap-3 justify-center !w-1/2 sm:!w-fit whitespace-nowrap text-sm sm:text-base !py-3 sm:!py-2"
                    >
                        <i className="fad fa-file-lines"></i>{t('getResume')}
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home