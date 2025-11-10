import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { proyects } from "../../proyects";

// import required modules
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function SliderCard() {

    
  return (
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      
      {proyects.map((slide)=>{
        return(<SwiperSlide  key={slide.id}>
          <LazyLoadImage
            width={220}
            height={280}
            key={slide.id}
            src={slide?.thumbnail}
            alt={slide?.title}
            placeholderSrc={slide.thumbnail}
            effect="blur"
            threshold={30}
           />
        </SwiperSlide>)
      })}
    
       
      </Swiper>
  );
}

export default SliderCard;
