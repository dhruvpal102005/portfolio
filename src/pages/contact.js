import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo'
import { useTranslations } from 'next-intl';

import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Contact from '@/components/views/contact/Contact'

const ContactPage = () => {

  const t = useTranslations('Contact');
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
        <Contact />
      </Container>
    </>
  )
}

export default ContactPage
export const getStaticProps = async () => {

  return {
    props: {
    },
  };
};