import React, { useState, useEffect, useRef } from "react";
import h2 from "../../Assets/Images/photo1apt.jpg";
import h3 from "../../Assets/Images/photo2apt.jpg";
import { MdOutlineClose } from "react-icons/md";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs"
import { Navigation, Thumbs, EffectCoverflow } from "swiper/modules";
import { slide_images } from "../../Components/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function GalleryLayout() {
    //To handle galley dispaly
    //Function to handle gallery display
    const [showGallery, setShowGallery] = useState(false);
    const handleCloseGallery = () => {
        setShowGallery(false);
    };
    const handleGalleryDisplay = () => {
        setShowGallery(true);
    };

    useEffect(() => {
        if (showGallery) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [showGallery]);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mainSwiperRef = useRef(null);
    const thumbsSwiperRef = useRef(null);

    //To handle, Linking thumbnails to images
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    return (
        <div className={`md:py-5 ${showGallery ? "bg-opacity-75" : ""}`}>
            <div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2">
                    {/*Apartment Display and DirectorList Gallery*/}
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <img
                            src={h2}
                            alt="House 1"
                            className="w-full h-[38rem] object-cover cursor-pointer"
                        />
                        <div className="absolute flex justify-end items-end bottom-8 right-4 md:hidden">
                            <div
                                className="text-white rounded-full bg-black bg-opacity-60 p-2 font-aeonikmedium text-sm cursor-pointer"
                                onClick={handleGalleryDisplay}
                            >
                                25+ photos
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col space-y-2">
                        <div className="bg-blue-500 flex-1 aspect-w-1 aspect-h-1 hidden sm:block bg-no-repeat bg-cover" style={{
                            backgroundImage: `url(${h2})`
                        }}>

                        </div>
                        <div className="bg-yellow-500 flex-1 aspect-w-1 aspect-h-1 hidden sm:block cursor-pointer relative bg-no-repeat bg-cover" style={{
                            backgroundImage: `url(${h3})`
                        }}>
                            <div className="absolute flex justify-end items-end bottom-4 right-4">
                                <div
                                    className="text-white rounded-full bg-black bg-opacity-60 p-2 font-aeonikmedium text-sm cursor-pointer"
                                    onClick={handleGalleryDisplay}
                                >
                                    25+ photos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showGallery && (
                <div className="gallery-overlay">
                    <button onClick={handleCloseGallery} className="close-button">
                        <MdOutlineClose size={24} className="close-icon " color="white" />
                    </button>
                    <div className={isSmallScreen ? "gallery-container-small" : "gallery-container"}>
                        <div className="main-gallery justify-center md:mt-[20%]">
                            <Swiper
                                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                                loop={true}
                                modules={[Navigation]}
                                spaceBetween={10}
                                navigation={{
                                    prevEl: ".prev",
                                    nextEl: ".next",
                                }}
                                className={isSmallScreen ? "" : "swiper-container-large"}
                                onSlideChange={(swiper) => {
                                    setCurrentSlideIndex(swiper.realIndex);
                                    thumbsSwiperRef.current && thumbsSwiperRef.current.slideTo(swiper.realIndex);
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {slide_images.map((imagePath, index) => (
                                        <SwiperSlide key={index} >
                                            <img src={imagePath} alt={`Slide ${index}`} className="sm:h-[28rem]" />
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="thumbnail-container">
                        <Swiper
                            onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
                            loop={true}
                            spaceBetween={10}
                            centeredSlides={true}
                            slidesPerView={isSmallScreen ? 2 : 7}
                            effect="coverflow"
                            navigation={{
                                prevEl: ".null",
                                nextEl: ".null",
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            className="thumbnail-swiper"
                        >
                            {slide_images.map((imagePath, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`thumbnail ${currentSlideIndex === index ? "active" : ""}`}
                                        onClick={() => {
                                            thumbsSwiperRef.current && thumbsSwiperRef.current.slideTo(index);
                                            mainSwiperRef.current && mainSwiperRef.current.slideTo(index);
                                        }}
                                    >
                                        <img src={imagePath} alt={`Thumbnail ${index}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="counter px-8 py-2 bg-white rounded-full">
                        {currentSlideIndex + 1}/{slide_images.length}
                    </div>
                    <div className="prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                        <BsChevronCompactLeft alt="Left Navigation" className="ml-4" color="white" size={38} />
                    </div>
                    <div className="next absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                        <BsChevronCompactRight alt="Right Navigation" className="mr-4" color="white" size={38} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default GalleryLayout;


