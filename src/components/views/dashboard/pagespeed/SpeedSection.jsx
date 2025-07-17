import LoadingSpeedInsight from '@/components/elements/LoadingSpeedInsight'
import CircleProgress from '@/components/elements/CircleProgress'

export default function SpeedSection({ data, locale, isLoading, style }) {
    const categories = data?.lighthouseResult?.categories || {}
    const categoriesInArray = Object.keys(categories).map(key => ({ ...categories[key] }))

    const translations = {
        en: {
            performance: 'Performance',
            accessibility: 'Accessibility',
            bestPractices: 'Best Practices',
            seo: 'SEO'
        },
        id: {
            performance: 'Performa',
            accessibility: 'Aksesibilitas',
            bestPractices: 'Praktik Terbaik',
            seo: 'SEO'
        }
    }

    const getCategoryTitle = (key) => {
        switch (key) {
            case 'performance':
                return translations[locale]?.performance || 'Performance';
            case 'accessibility':
                return translations[locale]?.accessibility || 'Accessibility';
            case 'best-practices':
                return translations[locale]?.bestPractices || 'Best Practices';
            case 'seo':
                return translations[locale]?.seo || 'SEO';
            default:
                return key;
        }
    }

    if (isLoading || data === undefined) return <LoadingSpeedInsight locale={locale} style={style} />

    return (
        <div className="my-2 flex items-center justify-start text-xs gap-4 overflow-y-hidden scrollbar-hide">
            {categoriesInArray.map(category => (
                <div key={category.id} className="mt-2 flex flex-col items-center justify-start text-xs gap-3">
                    <h3 className="whitespace-nowrap">{getCategoryTitle(category.id)}</h3>
                    <CircleProgress style={style} value={Number(category.score || 0) * 100} />
                </div>
            ))}
        </div>
    )
}
