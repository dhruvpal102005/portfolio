import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layouts/partials/Container'
import BackToggle from '@/components/toggles/BackToggle'
import DetailPortfolio from '@/components/views/portfolio/DetailPortfolio'
import { fetcher } from '@/services/fetcher'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

const DetailPortfolioPage = ({ portfolio }) => {
    const { locale, pathname, query } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    
    const slug = query.slug || '';
    const currentPath = pathname.replace('[slug]', slug);
    const currentPageURL = `${SITE_URL}${lang}${currentPath}`;
    
    return (
        <>
            <NextSeo
                title={`${portfolio.name} - Dwi Wijaya`}
                description={portfolio.excerpt}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${currentPath}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${currentPath}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${currentPath}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                }}
            />
            <BackToggle />
            <Container data-aos='fade-up'>
                <DetailPortfolio portfolio={portfolio} locale={locale} />
            </Container>
        </>
    )
}

export default DetailPortfolioPage

export const getServerSideProps = async ({ params }) => {
    const response = await fetcher(`${process.env.API_URL}/portfolio/${params?.slug}`)

    if (response === null) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }

    return {
        props: {
            portfolio: JSON.parse(JSON.stringify(response)),
        },
    };
}
