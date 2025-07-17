import { useTranslations } from 'next-intl';
import { FaLanguage, FaCloudflare } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer, SiAxios, SiPwa } from 'react-icons/si';

const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs size={16} />, color: 'text-gray-600 dark:text-gray-300' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={16} />, color: 'text-blue-400 dark:text-blue-500' },
  { name: 'Framer Motion', icon: <SiFramer size={16} />, color: 'text-purple-600 dark:text-purple-400' },
  { name: 'next-intl', icon: <FaLanguage size={16} />, color: 'text-blue-500 dark:text-blue-300' },
  { name: 'Axios', icon: <SiAxios size={16} />, color: 'text-gray-700 dark:text-gray-400' },
  { name: 'PWA', icon: <SiPwa size={16} />, color: 'text-indigo-600 dark:text-indigo-400' },
  { name: 'Cloudflare', icon: <FaCloudflare size={16} />, color: 'text-yellow-500 dark:text-yellow-400' },
];

const TechStack = () => {
  const t = useTranslations('Home');
  return (
    <div className="">
      <p className="font-bold text-title mb-2">{t('techstack')}</p>

      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center text-text">
            <div className={`mr-3 ${tech.color}`}>{tech.icon}</div>
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechStack;
