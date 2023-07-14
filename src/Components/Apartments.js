import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product from './Product';
import { productData } from './data';

function Apartments() {

  const products = productData.map((product, i) => (
    <SwiperSlide key={i}><Product
          key={product.id}
          name={product.name}
          url={product.imageurl}
          location={product.location}
    /></SwiperSlide>
  ));

  return (
    <div className="mt-5">
      <div className="flex items-center flex-col justify-center sm:p-3">
        <h1 className="font-sfprobold md:text-2xl text-base text-[rgb(38,38,38)] flex-row">
          APARTMENTS AND SITES
        </h1>
        <div className="md:mx-6 flex-grow">
          <p className="font-sfproregular text-xs md:text-sm mt-6 text-[#5A5A5A] flex-row">
            Resident takes care of all aspects of property management, including tenants screening, lease agreements, rent collection, and handling maintenance and repair requests.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Swiper
          spaceBetween={2}
          slidesPerView={2.5}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          
      
        >
          {products}
       
        </Swiper>
      </div>
    </div>
  );
}
export default Apartments;                  