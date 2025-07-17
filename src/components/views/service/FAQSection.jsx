import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FAQPageJsonLd } from "next-seo";
import { useTranslations } from "next-intl";

import { FAQ_DATA } from "@/constants/data/faq";
import PageSubHeading from "@/components/common/PageSubHeading";

const FAQSection = ({ locale }) => {
    const t = useTranslations("Services.FAQ");
    const faqData = FAQ_DATA[locale];
    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <>
            <FAQPageJsonLd
                mainEntity={faqData.map((item) => ({
                    questionName: item.question,
                    acceptedAnswerText: item.answer
                }))}
            />
            <div className="">

                <PageSubHeading title={t("faqHeading")} description={t("faqDescription")} icon="fa-sm fad fa-circle-question text-text" />
                <div className="bg-container p-4 sm:p-5 rounded-xl border border-stroke ">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden"
                        >
                            <div
                                className="flex items-center justify-between gap-4  cursor-pointer"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-base font-medium">
                                    {item.question}</h3>
                                <i
                                    className={`text-subtext transition-transform duration-300 fal fa-plus mr-2 ${expandedIndex === index ? 'rotate-45' : 'rotate-0'}`}
                                />

                            </div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={
                                    expandedIndex === index
                                        ? { height: "auto", opacity: 1 }
                                        : { height: 0, opacity: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-1 text-sm bg-container text-subtext">{item.answer}</div>
                            </motion.div>
                            {
                                index !== faqData.length - 1 &&
                                <hr className="border-stroke my-3" />
                            }
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-start items-center gap-2">
                <p>{t("contactText")}</p>
                <Link className="font-medium text-primary" href="/contact" aria-label="Go to Contact Page">
                    {t("contactLink")}
                </Link>
            </div>
        </>
    );
};

export default FAQSection;
