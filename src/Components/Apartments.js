import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product from "./Product";
import { productData } from "./data";
import { useNavigate } from "react-router-dom";

function Apartments() {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const products = productData.map((product, i) => (
    <SwiperSlide key={i}>
      <div onClick={() => handleClick(product.id)}>
        <Product
          key={product.id}
          name={product.name}
          url={product.imageurl}
          location={product.location}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="mt-20">
      <div className="flex items-center flex-col justify-center">
        <h1 className="font-sfprobold md:text-2xl text-base text-[rgb(38,38,38)] flex-row">
          APARTMENTS AND SITES
        </h1>
        <div className="md:mx-6 mx-3 mt-1 flex-grow">
          <p className="font-sfproregular text-xs md:text-sm mt-6 text-[#5A5A5A] flex-row">
            Resident takes care of all aspects of property management, including
            tenants screening, lease agreements, rent collection, and handling
            maintenance and repair requests.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Swiper
          spaceBetween={1}
          //slidesPerView={2.5}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 1000,
              slidesPerView: 2,
            },
          }}
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
