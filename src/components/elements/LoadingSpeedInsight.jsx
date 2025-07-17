import { BiDotsHorizontalRounded } from 'react-icons/bi';

export default function LoadingSpeedInsight({ locale, style }) {
  const DummyCategory = [
    { title: locale === 'id' ? 'Performa' : 'Performance' },
    { title: locale === 'id' ? 'Aksesibilitas' : 'Accessibility' },
    { title: locale === 'id' ? 'Praktik Terbaik' : 'Best Practices' },
    { title: locale === 'id' ? 'SEO' : 'SEO' }
  ];

  return (
    <div className="my-2 flex items-center justify-start text-xs gap-4 overflow-y-hidden scrollbar-hide">
      {DummyCategory.map((item, index) => (
        <div key={item.title} className="mt-2 flex flex-col items-center justify-start text-xs gap-3">
          <div className="whitespace-nowrap">{item.title}</div>
          <div className="h-16 !mt-0 w-16 animate-pulse rounded-full bg-transparent p-2 md:h-20 md:w-20">
            <div className="flex h-full w-full items-center outline outline-slate-300 dark:outline-container !outline-[0.5rem] justify-center rounded-full bg-transparent">
              <BiDotsHorizontalRounded size={20} className='outline-slate-400 dark:outline-slate-400 text-xl' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
