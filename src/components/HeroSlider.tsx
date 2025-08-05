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
};

const slides: Slide[] = [
  {
    image: "/images/hero1.png",
    heading: "State-of-the-Art Facilities",
    subtext:
      "Modern processing plants equipped with the latest technology for maximum efficiency and quality control.",
    textClasses: "text-lg max-w-[600px] leading-loose",
    bigTextClasses: "text-4xl max-w-[600px] leading-[1.4]",
    containerClasses: "flex items-center px-20 bg-black",
    buttonStyling: "bg-primary"
  },
  {
    image: "/images/hero2.png",
    heading: "Quality Assurance",
    subtext: "Rigorous quality control processes ensure every product meets international standards and customer expectations.",
    textClasses: "text-xl max-w-[600px] leading-loose text-right",
    bigTextClasses: "text-4xl max-w-[600px] leading-[1.4]",
    containerClasses: "flex items-center justify-end px-20 bg-black bg-right",
    buttonStyling: "bg-primary ml-auto block"
  },
  {
    image: "/images/hero3.png",
    heading: "Global Distribution",
    subtext: "Efficient logistics network enabling timely delivery to customers across North America, Europe, and Asia.",
    textClasses: "text-xl max-w-[600px] leading-loose text-white",
    bigTextClasses: "text-3xl max-w-[600px] leading-[1.4] text-white",
    containerClasses: "flex items-center justify-end px-20 bg-black bg-right",
    buttonStyling: "bg-white"
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
              className="bg-red-600"
              // style={{ backgroundImage: `url(${slides[0]})` }}
            >
              <div
                className={`h-[700px] w-full ${slide.containerClasses}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div>
                  <h1
                    className={`text-4xl md:text-6xl font-bold ${slide.bigTextClasses}`}
                  >
                    {slide.heading}
                  </h1>
                  <p className={`mt-4 text-lg mb-5 ${slide.textClasses}`}>
                    {slide.subtext}
                  </p>
                  <button className={`py-3 px-14 ${slide.buttonStyling}`}>Get Quote</button>
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
