import Link from "next/link"
import { PiCopyright } from "react-icons/pi"

const Footer = ({t}) => {
    return (
        <footer className="nav__footer text-left pl-6 flex flex-col gap-1">
            <span className="text-subtext text-sm flex items-center gap-1 whitespace-nowrap">
                <PiCopyright size={15} className="text-primary" />
                {new Date().getFullYear()} Dwi wijaya
            </span>
            <Link href="https://github.com/dwiwijaya/dwiwijaya.com" className="text-subtext hover:text-primary text-xs flex items-center gap-1">
                {t('openSource')}
            </Link>
        </footer>
    )
}

export default Footer
