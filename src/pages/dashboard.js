import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import { getGithubUser } from '@/services/GithubServices';
import { getLeetcode } from '@/services/LeetcodeService';

import Container from '@/components/layouts/partials/Container';
import Dashboard from '@/components/views/dashboard/Dashboard';
import PageHeading from '@/components/common/PageHeading';


const DashboardPage = ({ fallback }) => {

    const t = useTranslations('Dashboard');
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
            <SWRConfig 
                value={{ 
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
                    <Dashboard leetcodeEndpoint='/api/leetcode' githubEndpoint='/api/github' locale={locale} />
                </Container>
            </SWRConfig>
        </>
    );
};

export default DashboardPage;

export const getStaticProps = async () => {
    const githubContribution = await getGithubUser('personal');
    const leetcodeStats = await getLeetcode();

    return {
        props: {
            fallback: {
                '/api/github': githubContribution?.data,
                '/api/leetcode': leetcodeStats?.data,
            },
        },
        revalidate: 3600, // ISR: regenerate every 1 hour
    };
};


