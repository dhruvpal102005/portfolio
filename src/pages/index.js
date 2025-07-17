import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Homepage from "@/components/views/home/Home";
import Head from "next/head";

export default function Home() {

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const { locale } = useRouter();
  const lang = locale == 'en' ? '/en' : '';
  return (
    <>
      <NextSeo
        title="Dwi Wijaya - Personal Website"
        description="Dwi Wijaya is a passionate and versatile individual with a strong focus on web development. With expertise in Next.js, he creates dynamic and responsive websites that deliver seamless user experiences."
        additionalLinkTags={[
          { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}` },
          { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}` },
          { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en` },
        ]}
        canonical={`${SITE_URL}${lang}`}
        openGraph={{
          url: `${SITE_URL}${lang}`,
        }}
      />
      <Head>
        <link rel="preload" href="endless-clouds.svg" as="image" crossOrigin="anonymous"/>
      </Head>
      {/* <Toolbar /> */}
      <div className="group-[.sidebar-expanded]/main:blur-[1px] z-[-1] bg-container border border-b border-stroke top-0 left-0 w-full h-[24vh] bg-endless-clouds"></div>
      <section data-section className="group-[.sidebar-expanded]/main:blur-[2px] relative p-[15px] pl-5 mx-auto max-w-[1024px]">
        <Homepage />
      </section>
    </>
  );
}
export const getStaticProps = async () => {

  return {
    props: {
    },
  };
};