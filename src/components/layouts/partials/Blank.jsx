const Blank = ({ children, className = '', ...others }) => {
  return (
    
    <div className={`main group/main pb-6 p-6 h-[10dvh] ${className}`} {...others}>
      <section className='group-[.sidebar-expanded]/main:blur-[2px]  mx-auto max-w-[1024px]'>
        {children}
      </section>
    </div>
  );
};

export default Blank;
