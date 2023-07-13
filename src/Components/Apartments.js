import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData } from './data';

function Apartments() {
  const products = productData.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      url={product.imageurl}
      location={product.location}
    />
  ));

  const responsiveSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 10, // Adjust this value as needed
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div>
      <div className="flex items-start justify-between">
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
        <Carousel
          responsive={responsiveSettings}
          autoPlay={false}
          autoPlaySpeed={3000}
          infinite={true}
          centerMode={true}
          centerSlidePercentage={33.333} // Adjust this value as needed
          containerClass="carousel-container"
        >
          {products}
        </Carousel>
      </div>
    </div>
  );
}

export default Apartments;
