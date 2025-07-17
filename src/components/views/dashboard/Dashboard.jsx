import { RiGithubFill, RiSpeedUpLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { useTranslations } from "next-intl";

import PageSubHeading from "@/components/common/PageSubHeading";
import { fetcher } from "@/services/fetcher";

import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";
import Letcode from "./leetcode/Leetcode";

import PageSpeed from "./pagespeed";
import useSWR from "swr";

const Dashboard = ({ githubEndpoint, leetcodeEndpoint, locale }) => {
  const t = useTranslations();

  const { data: leetcodeData } = useSWR(leetcodeEndpoint, fetcher);
  const { data: githubData } = useSWR(githubEndpoint, fetcher);

  const contributionCalendar = githubData?.contributionsCollection?.contributionCalendar;

  return (
    <div className="flex flex-col space-y-10">
      <section>
        <PageSubHeading
          title={t('Dashboard.pagespeedTitle')}
          description={t('Dashboard.pagespeedSubtitle')}
          reactIcon={<RiSpeedUpLine />}
          linkText='@pagespeed'
          link='https://pagespeed.web.dev/'
          tintIcon={false}
        />
        <PageSpeed locale={locale} />
      </section>

      <section>
        <PageSubHeading
          title={t('Dashboard.githubTitle')}
          description={t('Dashboard.githubSubtitle')}
          reactIcon={<RiGithubFill />}
          linkText='@dwiwijaya'
          link='https://github.com/dwiwijaya'
          tintIcon={false}
        />
        <>
          {!githubData && <div className='dark:text-neutral-400'>No Github Data</div>}

          {githubData && (
            <div className='space-y-3'>
              <Overview data={contributionCalendar} />
              <Calendar data={contributionCalendar} />
            </div>
          )}
        </>
      </section>

      <section>
        <PageSubHeading
          title={t('Dashboard.leetcodeTitle')}
          description={t('Dashboard.leetcodeSubtitle')}
          reactIcon={<SiLeetcode size={16} />}
          linkText='@dwiwijaya'
          link='https://leetcode.com/dwiwijaya'
          tintIcon={false}
        />
        <Letcode data={leetcodeData} />
      </section>

    </div>
  );
};

export default Dashboard;
