import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BiRightArrowAlt } from "react-icons/bi";

import { PORTFOLIO_CATEGORIES, PORTFOLIO_TYPES } from "@/constants/data/portfolio";

import Pin from "@/assets/pin.svg";
import Image from "@/components/elements/Image";

import PortfolioCategory from "./PortfolioCategory";

const Portfolio = ({ portfolios, locale }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [items, setItems] = useState(portfolios);
  const [noPortfolioMessage, setNoPortfolioMessage] = useState(null);
  const t = useTranslations("Portfolio");

  const filterItems = (categoryItem) => {
    setActiveCategory(categoryItem);

    if (categoryItem === "all") {
      setItems(portfolios);
      setNoPortfolioMessage(null);
    } else {
      const updatedItems = portfolios.filter((curElem) => curElem.category === categoryItem);

      if (updatedItems.length === 0) {
        setNoPortfolioMessage(getNoPortfolioMessage(categoryItem));
      } else {
        setItems(updatedItems);
        setNoPortfolioMessage(null);
      }
    }
  };

  const getNoPortfolioMessage = useCallback((categoryItem) => {
    const categoryData = PORTFOLIO_CATEGORIES[categoryItem];
    const categoryLabel = categoryData ? categoryData.label[locale] : categoryItem;
    return t("noPortfolio", { category: categoryLabel });
  }, [locale, t]);

  useEffect(() => {
    // Re-run filter when the language (locale) changes
    if (activeCategory !== "all") {
      const updatedItems = portfolios.filter((curElem) => curElem.category === activeCategory);

      if (updatedItems.length === 0) {
        setNoPortfolioMessage(getNoPortfolioMessage(activeCategory));
      } else {
        setItems(updatedItems);
        setNoPortfolioMessage(null);
      }
    }
  }, [locale, activeCategory, portfolios, t, getNoPortfolioMessage]);

  const IconCategory = {
    code: "fad fa-code-simple",
    uiux: "fad fa-pen-nib",
    design: "fad fa-palette",
    others: "fad fa-grid-2-plus",
  };

  return (
    <>
      <PortfolioCategory filter={filterItems} active={activeCategory} />

      {noPortfolioMessage ? (
        <p className="text-subtext">
          <i className="fad fa-exclamation-circle mr-2"></i>
          {noPortfolioMessage}
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
          {items.map((elem, index) => {
            const { id, thumbnail, name, category, isFeatured, excerpt, slug, type } = elem;
            return (
              <motion.li
                key={id || index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  data-umami-event={`Click Portfolio - ${name}`}
                  href={`portfolio/${slug}`}
                >
                  <div className="group/portfolio relative flex flex-col overflow-hidden rounded-xl h-full lg:hover:scale-[102%] transition-3s">
                    <div className="work__thumbnail aspect-thumbnail">
                      <div className="absolute flex items-center top-2 right-2 gap-2 z-[1]">
                        {isFeatured && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-orange-300 text-black rounded-md z-10">
                            <Image src={Pin} alt="pin" />
                            {locale === "en" ? "Featured" : "Unggulan"}
                          </span>
                        )}
                        <div className="px-2 py-1 bg-orange-300 text-black rounded-md z-10">
                          <i className={IconCategory[category] || "fad fa-circle-question"}></i>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={thumbnail}
                          alt={slug}
                          width={999}
                          height={999}
                          className="aspect-thumbnail object-cover"
                          // quality={100}
                          priority={index === 0}    // kalau ini gambar pertama
                          loading={index === 0 ? undefined : "lazy"}
                        />
                        <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover/portfolio:opacity-80">
                          {t("seePortfolio")}<BiRightArrowAlt />
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col h-full gap-1 bg-container border border-stroke">
                      <div>
                        <p className="text-subtext text-xs flex gap-1 items-center mb-1">
                          <span className="text-primary">{PORTFOLIO_TYPES[type].icon}</span>
                          {PORTFOLIO_TYPES[type][locale]}
                        </p>
                        <h2 className="font-semibold group-hover/portfolio:text-primary">
                          {name}
                        </h2>
                      </div>
                      <p className="text-sm overflow-hidden whitespace-normal overflow-ellipsis line-clamp-2 text-subtext">
                        {excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Portfolio;
