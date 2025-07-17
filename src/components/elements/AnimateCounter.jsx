import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const AnimateCounter = ({ total, ...rest }) => {
    const countRef = useRef(null);
    const initialCount = 0;

    useEffect(() => {
        const count = countRef.current;

        const controls = animate(initialCount, total, {
            duration: 1,
            onUpdate: (value) => {
                if (count) {
                    count.textContent = Math.floor(value).toString();
                }
            },
        });

        return () => controls.stop();
    }, [total, countRef, initialCount]); 

    return <span {...rest} ref={countRef} />;
};

export default AnimateCounter;
