"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

type Slide = {
  image: string;
  heading: string;
  subtext: string;
  textClasses?: string;
  containerClasses?: string;
  bigTextClasses: string;
  buttonStyling: string;
  secButtonStyling: string;
  rangeText: number;
  rangeStyling: string;
};

const slides: Slide[] = [
  {
    image: "/images/hero4.png",
    heading: "High-Quality Sunflower Oil from Factory to Consumer",
    subtext:
      "Modern processing plants equipped with the latest technology for maximum efficiency and quality control.",
    textClasses: "text-sm md:text-base max-w-[600px] leading-loose text-white opaciy-80 font-light",
    bigTextClasses: "text-2xl md:text-4xl max-w-[600px] leading-[1.4] text-white",
    containerClasses: "flex items-center px-5 md:px-20 bg-black",
    buttonStyling: "bg-primary border-primary",
    secButtonStyling:
      "bg-transparent border border-solid border-primary text-white",
    rangeText: 1,
    rangeStyling: "text-black bg-white",
  },
  {
    image: "/images/hero7.jpeg",
    heading: "Quality Assurance",
    subtext:
      "Rigorous quality control processes ensure every product meets international standards and customer expectations.",
    textClasses: "text-base max-w-[600px] leading-loose md:text-right text-white",
    bigTextClasses: "text-4xl md:text-5xl max-w-[600px] leading-[1.4] md:text-right text-white",
    containerClasses:
      "flex items-center justify-end px-5 md:px-20 bg-black bg-right",
    buttonStyling: "bg-primary md:ml-auto block border-primary",
    secButtonStyling:
      "bg-transparent border border-solid border-primary text-white",
    rangeText: 2,
    rangeStyling: "text-black bg-white md:ml-auto",
  },
  {
    image: "/images/hero3.png",
    heading: "Global Distribution",
    subtext:
      "Efficient logistics network enabling timely delivery to customers across North America, Europe, and Asia.",
    textClasses: "text-base max-w-[600px] leading-loose text-white",
    bigTextClasses: "text-3xl md:text-4xl max-w-[600px] leading-[1.4] text-white",
    containerClasses:
      "flex items-center justify-end px-5 md:px-20 bg-black bg-right",
    buttonStyling: "bg-white border-white",
    secButtonStyling:
      "bg-transparent border border-solid border-white text-white",
    rangeText: 3,
    rangeStyling: "text-white bg-white",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="">
              <div
                className={`hero-sect h-[600px] md:h-[650px] w-full ${slide.containerClasses} md:rounded-[22px]`}
                style={{
                  backgroundImage: `linear-gradient(to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${slide.image})`,
                }}
              >
                <div className="text-center md:text-left">
                  <div
                    className={`flex items-center gap-2 mb-3 pt-16 ${
                      slide.rangeText === 2 && "md:ml-auto"
                    } w-max mx-auto md:mx-0`}
                  >
                    <h4 className={`${slide.rangeText === 3 && "text-whit"} text-white`}>
                      01
                    </h4>
                    <div className="grid w-60 md:w-80 items-center grid-cols-3">
                      <div
                        className={`${slide.rangeStyling} w-full ${
                          slide.rangeText >= 1 ? "h-[.2rem]" : "h-[.08rem]"
                        }`}
                      ></div>
                      <div
                        className={`${slide.rangeStyling} w-full ${
                          slide.rangeText >= 2 ? "h-[.2rem]" : "h-[.08rem]"
                        }`}
                      ></div>
                      <div
                        className={`${slide.rangeStyling} w-full ${
                          slide.rangeText >= 3 ? "h-[.2rem]" : "h-[.08rem]"
                        }`}
                      ></div>
                    </div>
                    <h4 className={`${slide.rangeText === 3 && "text-whit"} text-white`}>
                      03
                    </h4>
                  </div>
                  <h1 className={`font-bold ${slide.bigTextClasses}`}>
                    {slide.heading}
                  </h1>
                  <p className={`mt-1 md:mt-2 mb-5 ${slide.textClasses}`}>
                    {slide.subtext}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <Link href="/#contact"
                      className={`py-4 px-10 text-sm rounded-lg border border-solid ${slide.buttonStyling}`}
                    >
                      Get A Quote
                    </Link>
                    <Link href="/#contact"
                      className={`py-4 text-sm px-10 rounded-lg ${slide.secButtonStyling}`}
                    >
                      Request Private Labeling
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
