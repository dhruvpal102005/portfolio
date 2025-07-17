const PageHeading = ({ title, description }) => {
  return (
    <>
      <h1 className="ml-3 relative font-bold text-3xl dots text-title">{title}</h1>
      <p className="leading-5 text-subtext">
        {description}
      </p>
      <hr className="hr" />
    </>
  );
};

export default PageHeading;
