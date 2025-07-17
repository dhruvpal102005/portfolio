import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';

import { fetcher } from '@/services/fetcher';
import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Experience from '@/components/views/experience/Experience'

const ExperiencePage = ({ experience }) => {

    const t = useTranslations('Experience');
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
            <Container data-aos='fade-up'>
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                />
                <Experience experience={experience} locale={locale} />
            </Container>
        </>
    )
}

export default ExperiencePage
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const experience = await fetcher(`${process.env.API_URL}/experience`)

    return {
        props: {
            experience
        },
        revalidate: 3600,
    };
};