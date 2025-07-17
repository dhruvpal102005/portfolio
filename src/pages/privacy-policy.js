import { useRouter } from 'next/router';
import { HiShieldCheck } from 'react-icons/hi';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';

import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container';

const PrivacyPolicyPage = () => {
    const t = useTranslations('Privacy');
    const { locale, pathname } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    const currentPageURL = `${SITE_URL}${lang}${pathname}`

    return (
        <>
            <NextSeo
                title={`${t('title')} - Dwi Wijaya`}
                description={t('metaDesc')}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${pathname}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${pathname}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${pathname}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                }}
            />

            <Container data-aos="fade-up" >
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                    className="text-center mb-8"
                />
                <div className='flex flex-col gap-4'>
                    <div>
                        <div className="flex items-center space-x-2">
                            <HiShieldCheck className="text-green-500 text-xl mb-1" />
                            <h2 className="text-xl text-text font-semibold">{t('subtitles.information_collected')}</h2>
                        </div>
                        <p className="text-subtext-700">{t('information_collected')}</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <HiShieldCheck className="text-blue-500 text-xl mb-1" />
                            <h2 className="text-xl text-text font-semibold">{t('subtitles.usage')}</h2>
                        </div>
                        <p className="text-subtext-700">{t('usage')}</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <HiShieldCheck className="text-yellow-500 text-xl mb-1" />
                            <h2 className="text-xl text-text font-semibold">{t('subtitles.security')}</h2>
                        </div>
                        <p className="text-subtext-700">{t('security')}</p>
                    </div>

                    <div>
                        <div className="flex items-center space-x-2">
                            <HiShieldCheck className="text-red-500 text-xl mb-1" />
                            <h2 className="text-xl text-text font-semibold">{t('subtitles.contact')}  </h2>
                        </div>
                        <p className="text-subtext-700">{t('contact')} <a href='mailto:hello@dwiwijaya.com' className='text-primary'>hello@dwiwijaya.com</a>. </p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PrivacyPolicyPage;

export const getStaticProps = async () => {
    return {
        props: {},
    };
};
