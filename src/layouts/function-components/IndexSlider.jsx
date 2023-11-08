import { useRef, useState } from "react";
import { Star } from "react-feather";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const IndexSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className=" relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i}>
            { <div className=" left-0 top-0 flex">
                <img src={item.image_src} alt="" width={100} height={100}/>
                <div className="text-left relative z-10">
                  <h3 className="h4 text-black relative">{item.author}</h3>
                  <a className="btn-primary relative" href="">Contactanos</a>
                </div>
            </div> }
           
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="relative flex justify-center">
        <div
          width="100%"
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div> */}
    </div>
  );
};

export default IndexSlider;
