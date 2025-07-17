const PageSubHeading = ({ title, description, icon, link, linkText, tintIcon = true, reactIcon }) => {
  return (
    <>
      <h2 className="flex items-center gap-2 font-medium text-lg text-title">
        {reactIcon}{icon && <i className={`${icon} ${tintIcon && 'text-primary'}`}></i>}{title}
      </h2>
      <div className="flex flex-col md:flex-row  text-subtext mb-3 justify-between leading-relaxed">
        <p className="text-sm leading-5">
          {description}
        </p>
        {link && linkText && <a target="_blank" rel="noopener noreferrer" data-umami-event={`Click link ${title}`} className="section__subtitle-link" href={link}>{linkText}</a>}
      </div>
    </>
  );
};

export default PageSubHeading;
