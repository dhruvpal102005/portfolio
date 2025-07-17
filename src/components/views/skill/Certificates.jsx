import Slider from 'react-slick';
import Image from '@/components/elements/Image';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Certificates = ({ certificates }) => {
  return (
    <section className="p-6">
      <Slider {...settings}>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <Image rounded='rounded-md bg-container' alt={certificate.name} width={1000} height={750} src={certificate.image} priority={index === 0} loading={index === 0 ? undefined : "lazy"} />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Certificates