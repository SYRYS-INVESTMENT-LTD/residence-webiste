import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product from "./Product";
import { productData } from "./data";
import { useNavigate } from "react-router-dom";
import sl from "../Assets/Icons/SwiperLeft1.svg";
import sf from "../Assets/Icons/SwiperRight1.svg";

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
    <div className="mt-20 md:pl-6">
      <div className="flex items-center flex-col justify-center space-y-4">
        <h1 className="font-aeonikmedium md:text-2xl text-base text-[#262626] flex-row">
          APARTMENTS AND SITES
        </h1>
        <div className="items-center mx-3 justify-center flex-grow md:text-sm font-aeonik text-xs mt-6 text-[#5A5A5A]">
          {/* For mobile screens */}
          <p className="md:hidden text-justify text-center">
            Resident takes care of all aspects of property management, including tenants screening, lease agreements, rent collection, and handling maintenance and repair requests.
          </p>

          {/* For desktop, tablet, and larger screens */}
          <div className="hidden md:flex flex-col items-center">
            <p className="text-center mb-1">
              Resident takes care of all aspects of property management, including tenants screening,
            </p>
            <p className="text-center mb-1">
              lease agreements, rent collection, and handling maintenance and repair
            </p>
            <p className="text-center mb-1">requests.</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Swiper
          spaceBetween={12}
          //slidesPerView={2.5}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
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
          <div className="prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <img src={sl} alt="Left Navigation" className="h-10 ml-4" />
          </div>
          <div className="next absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <img src={sf} alt="Right Navigation" className="h-10 mr-4" />
          </div>

        </Swiper>
      </div>
    </div>
  );
}
export default Apartments;
