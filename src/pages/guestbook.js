import dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

import { fetcher } from "@/services/fetcher";

import Container from "@/components/layouts/partials/Container";
import Guestbook from "@/components/views/guestbook/Guestbook";
import PageHeading from "@/components/common/PageHeading";
import OneTapComponent from '@/components/elements/OneTapComponent ';

const GuestbookPage = ({ fallback }) => {
    const t = useTranslations('Guestbook');
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
            <OneTapComponent />
            <SWRConfig value={{
                fallback,
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                revalidateIfStale: false,
                shouldRetryOnError: false
            }}
            >
                <Container data-aos='fade-up'>
                    <PageHeading
                        title={t('title')}
                        description={t('subtitle')}
                    />
                    <Guestbook locale={locale} />
                </Container>
            </SWRConfig>
        </>
    );
};

export default GuestbookPage;

export const getStaticProps = async () => {
    const messages = await fetcher(`${process.env.NEXT_PUBLIC_SITE_URL}/api/guestbook`);

    return {
        props: {
            fallback: {
                '/api/guestbook': messages,
            },
        },
        revalidate: 1, // ISR: regenerate every 1 hour
    };
};
