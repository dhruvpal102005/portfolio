import { useState } from 'react';
import NextImage from 'next/image';

const Image = ({ alt, src, className, rounded, ...rest }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`overflow-hidden ${isLoading ? 'animate-pulse' : ''} ${rounded} relative`}
    >
      <NextImage
        className={`duration-200 ease-in-out ${className} ${isLoading ? 'scale-[1.02] blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        src={src}
        alt={alt}
        loading="lazy"
        quality={75} 
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
