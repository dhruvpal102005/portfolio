const getDefaultSEOConfig = (locale = 'en') => {
  const isEnglish = locale === 'en';
  
  return {
    title: "Dhruv Pal - Personal Website",
    description: isEnglish 
      ? "Dhruv Pal is a passionate and versatile individual with a strong focus on web development. With expertise in Next.js, he creates dynamic and responsive websites that deliver seamless user experiences."
      : "Dhruv Pal adalah individu yang bersemangat dan serbaguna dengan fokus kuat pada pengembangan web. Dengan keahlian di Next.js, dia menciptakan situs web yang dinamis dan responsif yang memberikan pengalaman pengguna yang mulus.",
    openGraph: {
      type: 'website',
      locale: locale,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dhruvpal102005.github.io/portfolio/',
      siteName: 'Dhruv Pal',
      title: "Dhruv Pal - Personal Website",
      description: isEnglish 
        ? "Dhruv Pal is a passionate and versatile individual with a strong focus on web development."
        : "Dhruv Pal adalah individu yang bersemangat dan serbaguna dengan fokus kuat pada pengembangan web.",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Dhruv Pal',
        },
      ],
    },
    twitter: {
      handle: '@dhruvpal_2310',
      site: '@dhruvpal_2310',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'author',
        content: 'Dhruv Pal',
      },
      {
        name: 'keywords',
        content: isEnglish 
          ? 'Dhruv Pal, web developer, Next.js, React, portfolio, fullstack developer'
          : 'Dhruv Pal, pengembang web, Next.js, React, portofolio, fullstack developer',
      },
    ],
  };
};

export default getDefaultSEOConfig;