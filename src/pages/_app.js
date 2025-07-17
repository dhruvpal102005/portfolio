import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Onest } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from 'next-intl';

import { Toaster } from "react-hot-toast";
import { DefaultSeo } from "next-seo";
import Aos from "aos";

import { getLastCommitDate } from "@/services/GithubServices";
import Layout from "@/components/layouts/Layout";

import "@/styles/vendor/fa.min-1.css";
import "@/styles/vendor/fa.min-2.css";
import "@/styles/vendor/markdown.css";
import "@/styles/vendor/slick.css";
import "@/styles/globals.css";
import "aos/dist/aos.css";

import getDefaultSEOConfig from "../../next-seo.config";

const onest = Onest({
  subsets: ['latin'],
});

const ProgressBar = dynamic(
  () => import('../components/elements/ProgressBar'),
  { ssr: false }
);

export default function App({ Component, pageProps, lastCommitDate, messages }) {
  const router = useRouter();
  const seoConfig = getDefaultSEOConfig(router.locale);
  useEffect(() => {
    Aos.init({
      duration: 400,
      delay: 0,
      once: true,
      easing: 'ease-out',
      offset: 50,
    });
  }, []);
  

  return <>
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Jakarta"
      messages={messages}
    >

      <DefaultSeo {...seoConfig} />

      <style jsx global>
        {`
          html {
            font-family: ${onest.style.fontFamily};
          }
        `}
      </style>

      <Toaster
        toastOptions={{
          style: {
            background: "var(--container-color)",
            color: "var(--text-color)",
          },
        }}
        position="top-right"
      />

      <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange={true} scriptProps={{ 'data-cfasync': 'false' }}>
        <Layout lastUpdate={lastCommitDate}>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextIntlClientProvider>
  </>
}
App.getInitialProps = async ({ router }) => {
  const { locale } = router;
  const lastCommitDate = await getLastCommitDate();

  const messages = (await import(`../../locales/${locale}.json`)).default
  return { lastCommitDate, messages };
};
