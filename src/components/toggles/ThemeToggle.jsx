import { BiUpArrowAlt } from 'react-icons/bi';

const ScrollUpToggle = () => {
    window.addEventListener('scroll', function() {
        const scrollUp = document.querySelector('.scrollup');
        if (this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    })
    return (
        <a aria-label='go to top' href='#' className="scrollup toggle scrollup__toggle">
            <BiUpArrowAlt/>
        </a>
    )
}

export default ScrollUpToggle