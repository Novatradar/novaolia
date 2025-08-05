"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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
    image: "/images/hero1.png",
    heading: "High-Quality Sunflower Oil from Factory to Consumer",
    subtext:
      "Modern processing plants equipped with the latest technology for maximum efficiency and quality control.",
    textClasses: "text-base max-w-[600px] leading-loose",
    bigTextClasses: "text-4xl max-w-[600px] leading-[1.4]",
    containerClasses: "flex items-center px-20 bg-black",
    buttonStyling: "bg-primary border-primary",
    secButtonStyling:
      "bg-transparent border border-solid border-primary text-black",
    rangeText: 1,
    rangeStyling: "text-black bg-black",
  },
  {
    image: "/images/hero2.png",
    heading: "Quality Assurance",
    subtext:
      "Rigorous quality control processes ensure every product meets international standards and customer expectations.",
    textClasses: "text-base max-w-[600px] leading-loose text-right",
    bigTextClasses: "text-4xl max-w-[600px] leading-[1.4] text-right",
    containerClasses: "flex items-center justify-end px-20 bg-black bg-right",
    buttonStyling: "bg-primary ml-auto block border-primary",
    secButtonStyling:
      "bg-transparent border border-solid border-primary text-black",
    rangeText: 2,
    rangeStyling: "text-black bg-black ml-auto",
  },
  {
    image: "/images/hero3.png",
    heading: "Global Distribution",
    subtext:
      "Efficient logistics network enabling timely delivery to customers across North America, Europe, and Asia.",
    textClasses: "text-base max-w-[600px] leading-loose text-white",
    bigTextClasses: "text-3xl max-w-[600px] leading-[1.4] text-white",
    containerClasses: "flex items-center justify-end px-20 bg-black bg-right",
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
            <div
              // className="w-full h-full bg-red-700 bg-center bg-cover flex items-center justify-center _1"
              className=""
              // style={{ backgroundImage: `url(${slides[0]})` }}
            >
              <div
                className={`h-[700px] w-full ${slide.containerClasses} rounded-[22px]`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div>
                  <div className={`flex items-center gap-2 mb-6 pt-16 ${slide.rangeText === 2 && 'ml-auto'} w-max`}>
                    <h4 className={`${slide.rangeText === 3 && 'text-white' }`}>01</h4>
                    <div className="grid w-80 items-center grid-cols-3">
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
                    <h4 className={`${slide.rangeText === 3 && 'text-white' }`}>03</h4>
                  </div>
                  <h1
                    className={`font-bold ${slide.bigTextClasses}`}
                  >
                    {slide.heading}
                  </h1>
                  <p className={`mt-4 mb-5 ${slide.textClasses}`}>
                    {slide.subtext}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      className={`py-4 px-10 text-sm rounded-lg border border-solid ${slide.buttonStyling}`}
                    >
                      Get A Quote
                    </button>
                    <button
                      className={`py-4 text-sm px-10 rounded-lg ${slide.secButtonStyling}`}
                    >
                      Request Private Labeling
                    </button>
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
