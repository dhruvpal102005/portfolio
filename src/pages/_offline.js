import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';

import Blank from '@/components/layouts/partials/Blank';

const Fallback = () => {
  const t = useTranslations('Offline');
  const handleRetry = () => {
    window.location.reload();
  };

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

      <Blank className='text-center flex justify-center !items-center !h-[100dvh]'>
        {/* Page Heading with Icon */}
        <div className="flex flex-col gap-6">

          <div className="mb-1">
            <h2 className="mb-1 relative font-bold text-3xl text-title">{t('title')}</h2>
            <p className="leading-5 text-subtext">
              {t('subtitle')}
            </p>
          </div>

          <i className="text-primary text-7xl fa-duotone fa-solid fa-wifi-exclamation"></i>

          <p className="max-w-[26rem] mx-auto text-subtext text-base">{t('message')}</p>

          <div className="flex justify-center">
            <button
              onClick={handleRetry}
              className="btn"
            >
              <i class="fa-duotone fa-solid fa-rotate-right"></i>
              {t('retry')}
            </button>
          </div>
        </div>

      </Blank>
    </>
  );
};

export default Fallback;

export const getStaticProps = async () => {

  return {
    props: {
    },
  };
};