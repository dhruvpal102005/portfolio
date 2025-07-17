import { useTranslations } from 'next-intl';
import PageSubHeading from '../../common/PageSubHeading';

const About = () => {
  const t = useTranslations();

  return (
    <>
      <div className="about-page">
        <section className="intro mb-6">
          <p>{t('About.intro')}</p>
        </section>

        <section className="journey mb-6">
          <PageSubHeading icon="fad fa-route" title={t('About.journeyTitle')} />
          <p>{t('About.journey')}</p>
        </section>

        <section className="values mb-6">
          <PageSubHeading icon="fad fa-lightbulb" title={t('About.valuesTitle')} />
          <p>{t('About.values')}</p>
        </section>

        <section className="fun-facts">
          <PageSubHeading icon="fad fa-laugh-beam" title={t('About.funTitle')} />
          <ul aria-label="Fun Facts">
            <li>{t('About.funfact')}</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
