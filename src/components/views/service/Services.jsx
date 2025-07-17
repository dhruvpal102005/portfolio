import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants/data/services";

const Services = () => {
  const { locale } = useRouter();
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        {ServicesData.map(({ id, icon, title, description, }, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.05, delay: index * 0.1 }}
              className="card text-center !p-6 hover:ring-offset-2  ring-offset-background hover:ring-2 hover:ring-stroke hover:!border-slate-300 dark:hover:!border-slate-500 !transition-3s"
              key={id}
            >
              <section>
                <i className={`text-5xl text-primary fad fa-${icon}`}></i>
                <p className="mt-4 font-semibold">{title[locale]}</p>
                <p className="mt-1 text-sm font-light text-subtext">{description[locale]}</p>
              </section>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};
export default Services;
