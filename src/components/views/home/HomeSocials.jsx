import { Socials } from '@/constants/data/socials'

const HomeSocials = () => {
    return (
        <ul className="flex gap-2 mt-6">
            {Socials.map((social, index) => (
                <li key={index} className='w-full'>
                    <a
                        data-umami-event={`Social - ${social.eventName}`}
                        aria-label={`go to ${social.label}`}
                        href={social.link}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="w-full justify-center !py-3 flex text-text hover:text-primary badge items-center group"
                    >
                        {social.reactIcon}
                        <span className='hidden md:block'>{social.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default HomeSocials