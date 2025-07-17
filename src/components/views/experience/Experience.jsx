import { SlGraduation, SlBriefcase } from 'react-icons/sl';
import { BiMapPin, BiBook } from 'react-icons/bi';
import { motion } from "framer-motion";
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import 'dayjs/locale/en'

import WorkDuration from '@/components/elements/WorkDuration';

const Experience = ({ experience, locale }) => {

    const formatDate = (date, format = 'DD MMMM YYYY') => {
        return dayjs(date).locale(locale).format(format)
    };

    const educations = experience.filter(exp => exp.type === "education");
    const works = experience.filter(exp => exp.type === "work");

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
                <motion.section
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.05, delay: 1 * 0.1 }} className="grid card relative !px-8 !py-6">
                    <ol>
                        {educations.map((val, id) => {
                            const startMonth = formatDate(val.startMonth, 'MMM YYYY');
                            const endMonth = val.endMonth ? formatDate(val.endMonth, 'MMM YYYY') : locale == "en" ? "Present" : "Sekarang";
                            const lastIndex = id === educations.length - 1;
                            return (
                                <li key={id} className={`relative pl-8 md:pl-12 timeline flex flex-col gap-3 ${lastIndex ? '' : 'pb-8'}`}>
                                    <SlGraduation size={28} className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-graduation"></SlGraduation>
                                    <span className="text-sm text-text">
                                        <time>{startMonth}</time> - {endMonth}</span>
                                    <div className="">
                                        <p className='flex items-center gap-1 text-sm text-subtext'> <BiMapPin className='text-primary' /> {val.location}</p>
                                        <p className="flex items-center gap-1 text-sm text-subtext"><BiBook className='text-primary' /> {val.degree}</p>
                                    </div>
                                    <div className="">
                                        <p className=" font-semibold text-lg">{val.major}</p>
                                        <div className="flex gap-2">
                                            <a data-umami-event={`Click Education School - ${val.institution}`} href={val.link} className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-primary hover:text-primary transition-3s">
                                                {val.institution}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.05, delay: 2 * 0.1 }} className="grid card relative !px-8 !py-6">
                    <ol>
                        {works.map((val, id) => {
                            const startMonth = formatDate(val.startMonth, 'MMM YYYY');
                            const endMonth = val.endMonth ? formatDate(val.endMonth, 'MMM YYYY') : locale == "en" ? "Present" : "Sekarang";
                            const lastIndex = id === works.length - 1;
                            return (
                                <li key={id} className={`relative pl-8 md:pl-12 timeline flex flex-col gap-3 ${lastIndex ? '' : 'pb-8'}`}>
                                    <SlBriefcase size={26} className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-briefcase" />
                                    <span className="text-sm text-text"><time>{startMonth}</time> - {endMonth}</span>
                                    <div className="">
                                        <p className='flex items-center gap-1 text-sm text-subtext '> <BiMapPin className='text-primary' /> {val.location}</p>
                                        <WorkDuration startMonth={val.startMonth} endMonth={val.endMonth} locale={locale} />
                                    </div>
                                    <div className="">
                                        <p className=" font-semibold text-lg">{val.position}</p>
                                        <div className="flex gap-2">
                                            <a data-umami-event={`Click Career Company - ${val.institution}`} href="" className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-primary hover:text-primary transition-3s">
                                                {val.institution}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </motion.section>
            </div>
        </>
    )
}

export default Experience