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
              <h2 className="text-3xl md:text-4xl leading-[1.6] mb-2 font-bold">
                About Us
              </h2>
              <p className="text-base leading-loose mb-3">
                At Novaolia Sunflower Oils, we are committed to delivering
                premium sunflower oil and sunflower based products that meet the
                highest international standards. Based in Ukraine &apos; the
                global leader in sunflower production and export &apos; we
                combine advanced processing technologies, strict quality
                assurance, and sustainable sourcing to serve clients worldwide.
              </p>
              <p className="text-base leading-loose">
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
        <section className="bg-[#F8F8F8] pb-10 md:pb-32 mt-5 relative">
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
          <div id="product" className="text-center pt-20 pb-14">
            <h2 className="text-3xl md:text-4xl font-semibold">Our Products</h2>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-6 px-5 md:px-20">
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={SeedImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full w-full object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-14 px-6 text-center">
                <h4 className="text-2xl font-bold mb-1 md:mb-4">
                  Bulk Sunflower Oil
                </h4>
                <p className="text-base leading-loose md:mb-12">
                  Available in steel drums, IBC tanks, flexitanks, and ISO tanks
                  for large-scale export.
                </p>
                {/* <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                View Details
              </button> */}
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={SeedImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full w-full object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-14 px-6 text-center">
                <h4 className="text-2xl font-bold mb-1 md:mb-4">
                  Bulk Sunflower Oil
                </h4>
                <p className="text-base leading-loose md:mb-12">
                  Available in steel drums, IBC tanks, flexitanks, and ISO tanks
                  for large-scale export.
                </p>
                {/* <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                View Details
              </button> */}
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={SeedImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full w-full object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-14 px-6 text-center">
                <h4 className="text-2xl font-bold mb-1 md:mb-4">
                  Bulk Sunflower Oil
                </h4>
                <p className="text-base leading-loose md:mb-12">
                  Available in steel drums, IBC tanks, flexitanks, and ISO tanks
                  for large-scale export.
                </p>
                {/* <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                View Details
              </button> */}
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-6">
              <div>
                <Image
                  src={SeedImg}
                  alt="seed"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full w-full object-cover rounded-[28px]"
                />
              </div>
              <div className="md:bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-3 md:pt-10 pb-14 px-6 text-center">
                <h4 className="text-2xl font-bold mb-1 md:mb-4">
                  Bulk Sunflower Oil
                </h4>
                <p className="text-base leading-loose md:mb-12">
                  Available in steel drums, IBC tanks, flexitanks, and ISO tanks
                  for large-scale export.
                </p>
                {/* <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                View Details
              </button> */}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-5 md:px-20 " id="partnerships">
          <div className="text-center mb-10 max-w-[1000px] mx-auto">
            <h2 className="text-3xl md:text-4xl mb-2 font-semibold leading-normal">
              Partnership and Investments
            </h2>
            <p className="text-base leading-loose md:w-[70%] mx-auto font-light mb-2 md:mb-4">
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
                  <Link
                    href="https://wa.me/+380971200700?text=Hello%20there.%20I%20am%20from%20the%20site"
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
          <div className="contact-section rounded-[22px] max-w-[1500px] mx-auto mb-14">
            <div className="max-w-[1100px] mx-auto flex flex-col md:grid grid-cols-2 gap-28 items-end py-20 px-5 md:px-0">
              <div>
                <h2 className="text-3xl md:text-6xl md:w-[70%] font-syne mb-5">
                  Reach out
                </h2>
                <form action="">
                  <div className="form-group mb-4">
                    <label htmlFor="" className="text-sm mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-5 text-sm"
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
                        className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-5 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-5 text-sm"
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
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-5 text-sm"
                    >
                      <option value="">Get a quote</option>
                      <option value="">Partnership and Investment</option>
                      <option value="">Request Private Labelling</option>
                    </select>
                  </div>
                  <div className="form-group mb-7">
                    <label htmlFor="" className="text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-5 text-sm"
                      placeholder="Enter your first name"
                      rows={6}
                    ></textarea>
                  </div>
                  <div>
                    <button className="py-5 w-full text-sm bg-primary rounded-lg text-black">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="hidden md:block">
                <Image
                  src={ContactImg}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </DisplayLayout>
  );
}
