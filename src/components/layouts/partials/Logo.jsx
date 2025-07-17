import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';

const Logo = ({ theme, setToggle }) => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            data-umami-event={`Click Logo`}
            onClick={() => { setToggle(false); router.push('/'); }}
            aria-label='go home'
            className="w-fit mt-2 "
        >
            {mounted ?
                <Image
                    width={70}
                    src={theme === 'dark' ? LogoDark : LogoLight}
                    alt="Dwi-logo"
                    loading="eager"
                /> :
                <Image
                    width={70}
                    src={LogoLight}
                    alt="Dwi-logo"
                    loading="eager"
                />
            }
        </button>
    )
}
export default Logo