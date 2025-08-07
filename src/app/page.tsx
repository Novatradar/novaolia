import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/logo.webp";
import ContactImg from "@/images/contact.png";
import SeedImg from "@/images/seed.png";
import MainImg from "@/images/main.png";
import LocationImg from "@/images/location.svg";
import MailImg from "@/images/mail.svg";
import PhoneImg from "@/images/phone.svg";
import { BsTelegram } from "react-icons/bs";

import FlowerImg from "@/images/flower.png";

import ProductSeedImg from "@/images/products/seed.png";
import ProductRefinedOilImg from "@/images/products/refined.png";
import ProductOrganicOilImg from "@/images/products/organic.png";
import ProductBulkOilImg from "@/images/products/bulk.png";
import ProductSmallOilImg from "@/images/products/small.png";
import ProductOleicOilImg from "@/images/products/oleic.png";
import ProductPackagedOilImg from "@/images/products/packaged.png";
import ProductBlendOilImg from "@/images/products/blend.png";
import ProductSunBlessedOilImg from "@/images/products/sunpressed.jpeg";

import "swiper/css";
import "swiper/css/autoplay";
import HeroSlider from "@/components/HeroSlider";
import ServicesPage from "@/components/Services";
import PackagingPage from "@/components/Packaging";
import DisplayLayout from "@/components/layout/layout";

export default function Home() {
  return (
    <DisplayLayout>
      <div>
        <div id="home" className="px-0 md:px-8">
          <HeroSlider />
        </div>
        <div className="section bg-white px-5 md:px-20 pt-20" id="about">
          <div className="flex flex-col md:grid grid-cols-2 items-end gap-20">
            <div className="hidden md:block">
              <Image
                src={MainImg}
                alt="oils"
                width={1000}
                height={1000}
                quality={100}
                className="h-auto w-[70%] ml-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl leading-[1.6] mb-2 font-bold">
                About Us
              </h2>
              <p className="text-sm md:text-base leading-loose mb-3">
                At Novaolia Sunflower Oils, we are committed to delivering
                premium sunflower oil and sunflower based products that meet the
                highest international standards. Based in Ukraine &apos; the
                global leader in sunflower production and export &apos; we
                combine advanced processing technologies, strict quality
                assurance, and sustainable sourcing to serve clients worldwide.
              </p>
              <p className="text-sm md:text-base leading-loose">
                Our modern factory utilizes state-of-the-art pressing, refining
                and bottling lines to produce oil that meets ISO 22000, HACCP,
                HALAL and Organic certifications. Every product undergoes
                thorough laboratory testing, ensuring high purity, stability and
                quality consistency for global markets.
              </p>
            </div>
          </div>
        </div>
        <div id="services">
          <ServicesPage />
        </div>
        <div id="shipping">
          <PackagingPage />
        </div>
        <section className="bg-[#F8F8F8] pb-20 md:pb-32 mt-5 relative">
          <div className="absolute -top-10 md:-top-20 left-0">
            <Image
              src={FlowerImg}
              alt="flower"
              width={1000}
              height={1000}
              quality={100}
              className="h-[7rem] md:h-full w-auto md:w-full object-cover rounded-[28px] rotate-flower"
            />
          </div>
          <div className="absolute -bottom-16 md:-bottom-32 right-0">
            <Image
              src={FlowerImg}
              alt="flower"
              width={1000}
              height={1000}
              quality={100}
              className="h-[8rem] md:h-full w-auto md:w-full object-cover rounded-[28px]"
            />
          </div>
          <div id="product" className="text-center pt-20 pb-5 md:pb-14">
            <h2 className="text-2xl md:text-4xl font-semibold">Our Products</h2>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-6 px-5 md:px-20">
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductRefinedOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Refined Sunflower Oil (RBDW)
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Neutral taste, high smoke point, ideal for frying, baking and
                  food manufacturing
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductSunBlessedOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Cold-Pressed Sunflower Oil
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Naturally processed, chemical-free, rich in natural
                  antioxidants and flavor
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductOrganicOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Organic Sunflower Oil
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Certified organic, 100% natural, suitable for health-conscious
                  consumers
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductOleicOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  High Oleic Sunflower Oil
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Superior oxidative stability, extended shelf life, and heart
                  healthy properties.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductBlendOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Sunflower Oil Blends
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Customized oil formulations for industrial and culinary
                  applications
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductBulkOilImg}
                  alt="sunflower oil"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Bulk Sunflower Oil
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Supplied in drums, IBC tanks, flexitanks, and tank trunks for
                  large-scale buyers
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductSmallOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Consumer Packaged Oil
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  PET bottles (0.5L, 1L, 3L, 5L), HDPE jerry cans, tin cans
                </p>
              </div>
            </div> */}
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductPackagedOilImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Crude Sunflower Oil
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  Unrefined oil suitable for further processing or industrial
                  applications
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={ProductSeedImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20rem] object-center w-[90%] md:w-full mx-auto object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-6 md:pb-14 px-6 text-center">
                <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-4">
                  Sunflower Seeds
                </h4>
                <p className="text-sm md:text-base leading-loose md:mb-12">
                  High-quality, export-grade sunflower seeds for oil production
                  or food consumption
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row gap-10 md:gap-32 mt-0 md:mt-16 pt-0 md:pt-5">
              <div>
                <h4 className="text-base md:text-lg font-bold mb-4">
                  Fatty Acid Profile (Average Composition)
                </h4>
                <ul className="flex flex-col gap-5">
                  <li className="text-sm md:text-base">
                    Linoleic Acid (Omega-6): 52 - 78%
                  </li>
                  <li className="text-sm md:text-base">Oleic Acid (Omega-9): 52 - 78%</li>
                  <li className="text-sm md:text-base">Palmitic Acid: 5 - 7%</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold mb-4">
                  Nutritional Value (per 100g)
                </h4>
                <ul className="flex flex-col gap-5">
                  <li className="text-sm md:text-base">Energy: 884kcal</li>
                  <li className="text-sm md:text-base">
                    Total Fat: (100g) Saturated Fat: 10-12g
                  </li>
                  <li className="text-sm md:text-base">
                    Total Fat: (100g) UnSaturated Fat: 88-90g
                  </li>
                  <li className="text-sm md:text-base">Cholesterol: 0mg</li>
                  <li className="text-sm md:text-base">Vitamin E: 40 - 60mg</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base block mt-10">
              Shelf Life: 12 - 18 months under cool, dry storage conditions.
            </p>
          </div>
        </section>
        <section className="py-20 px-5 md:px-20 " id="partnerships">
          <div className="text-center mb-10 max-w-[1000px] mx-auto">
            <h2 className="text-2xl md:text-4xl mb-2 font-semibold leading-normal">
              Partnership and Investments
            </h2>
            <p className="text-sm md:text-base leading-loose md:w-[70%] mx-auto font-light mb-2 md:mb-4">
              We&apos;re open to exploring new horizons and building impactful
              collaborations. Whether you want to partner, invest, or work with
              us — we&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex flex-col md:grid grid-cols-4 gap-5 md:gap-10">
            <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-8 px-10">
              <div className="size-[54px] rounded-[13px] bg-[#FFF9EE] mb-8 flex items-center justify-center">
                <Image
                  src={PhoneImg}
                  alt="phone"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[20px] w-[20px] object-cover"
                />
              </div>
              <h4 className="text-base font-bold mb-3">Call Or WhatsApp</h4>
              <ul>
                <li className="mb-0">
                  We are interested in Novaolia. 
                  <Link
                    href="https://wa.me/+380971200700?text=Hello%20Vladyslav,%20we%20are%20interested%20in%20Novaolia"
                    className="text-sm text-[#696969] font-light"
                  >
                    +380-97-120-0700
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-8 px-10">
              <div className="size-[54px] rounded-[13px] bg-[#EEEEFF] mb-8 flex items-center justify-center">
                <Image
                  src={MailImg}
                  alt="mail"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[30px] w-[30px] object-cover"
                />
              </div>
              <h4 className="text-base font-bold mb-3">Send Us an Email</h4>
              <ul>
                <li className="mb-3">
                  <Link
                    href="mailTo:novatradar@gmail.com"
                    className="text-sm text-[#696969] font-light"
                  >
                    novatradar@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-8 px-10">
              <div className="size-[54px] rounded-[13px] bg-[#FFEEF9] mb-8 flex items-center justify-center">
                <Image
                  src={LocationImg}
                  alt="location"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[30px] w-[30px] object-cover"
                />
              </div>
              <h4 className="text-base font-bold mb-3">Address</h4>
              <ul>
                <li className="mb-0">
                  <Link href="#" className="text-sm text-[#696969] font-light">
                    , Хмільник, Vinnytsia Oblast, 22000
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-8 px-10">
              <div className="size-[54px] rounded-[13px] bg-[#FFF9EE] mb-8 flex items-center justify-center">
                <BsTelegram className="text-2xl text-[#FFB705]" />
              </div>
              <h4 className="text-base font-bold mb-3">Telegram</h4>
              <ul>
                <li className="mb-0">
                  <Link href="#" className="text-sm text-[#696969] font-light">
                    @novaolia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="md:px-10" id="contact">
          <div className="contact-section md:rounded-[22px] max-w-[1500px] mx-auto mb-14">
            <div className="max-w-[1100px] mx-auto flex flex-col md:grid grid-cols-2 gap-28 items-end py-20 px-5 md:px-0">
              <div className="bg-white py-6 px-6 rounded-xl">
                <h2 className="text-2xl md:text-2xl md:w-[70%] font-syne mb-5">
                  Reach out
                </h2>
                <form action="">
                  <div className="form-group mb-4">
                    <label htmlFor="" className="text-sm mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="form-group">
                      <label htmlFor="" className="text-sm mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="" className="text-sm mb-2">
                      Purpose
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                    >
                      <option value="">Get a quote</option>
                      <option value="">Partnership and Investment</option>
                      <option value="">Request Private Labelling</option>
                    </select>
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="" className="text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-4 text-sm"
                      placeholder="Enter your message"
                      rows={5}
                    ></textarea>
                  </div>
                  <div>
                    <button className="py-5 w-full text-sm bg-primary rounded-lg text-black">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* <div className="hidden md:block">
                <Image
                  src={ContactImg}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full w-full object-cover"
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </DisplayLayout>
  );
}
