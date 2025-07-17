import { PORTFOLIO_CATEGORIES } from '@/constants/data/portfolio';
import { useRouter } from 'next/router';

const PortfolioCategory = ({ filter, active }) => {
    const { locale } = useRouter();
    return (
        <nav>
            <ul className="flex gap-3 sm:gap-4 mb-6 justify-center sm:justify-start">
                {Object.entries(PORTFOLIO_CATEGORIES).map(([key, category], index) => (
                    <li key={index} className="category">
                        <button data-umami-event={`Click Portfolio Category - ${category.label}`} onClick={() => filter(category.slug)} title={category.label} className={`text-lg sm:text-base badge !px-4 !py-3 sm:!px-3 sm:!py-2 ${active === category.slug ? '!text-primary' : ''}`}>
                            <i className={category.classIcon}></i>
                            <p className='hidden sm:block'>{category.label[locale]}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PortfolioCategory;
