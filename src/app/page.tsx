import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/logo.webp";
import ContactImg from "@/images/contact.png";
import SeedImg from "@/images/seed.png";
import MainImg from "@/images/main.png";
import LocationImg from "@/images/location.svg";
import MailImg from "@/images/mail.svg";
import PhoneImg from "@/images/phone.svg";

import FlowerImg from "@/images/flower.png";

import "swiper/css";
import "swiper/css/autoplay";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div>
      <nav className="py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50 px-20">
        <div>
          <Image
            src={LogoImg}
            alt="Logo"
            width={100}
            height={50}
            className="h-14 w-[auto] object-contain"
          />
        </div>
        <div className="">
          <ul className="flex items-center gap-6 justify-between">
            <li>
              <Link href="/" className="text-base font-light mr-8">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-light mr-8">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-light mr-8">
                Products
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-light mr-8">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {/* <button className="text-sm bg-transparent border-2 border-solid border-primary text-white px-8 py-4 rounded-lg">
            Get a Quote
          </button> */}
          <button className="text-sm bg-primary border-2 border-solid border-primary text-black px-8 py-4 rounded-lg">
            Get a Quote
          </button>
        </div>
      </nav>
      <HeroSlider />
      <div className="section bg-white px-20 pt-20">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Image
              src={MainImg}
              alt="oils"
              width={1000}
              height={1000}
              quality={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl leading-[1.6] mb-3 font-bold">
              Premium Sunflower Oil & Seeds
            </h2>
            <p className="text-lg leading-loose">
              Potter ipsum wand elf parchment wingardium. Squid prefect&apos;s
              dog wand second. Vulture-hat giant not elemental locomotor suits
              fantastic are. Three fritters letters other last.
            </p>
            <ul className="mt-5 mb-10 bg-[#FFFDF4] flex flex-col gap-10 rounded-[17px] p-6">
              <li className="flex items-center gap-3">
                <div>
                  <div className="size-8 rounded-full bg-primary"></div>
                </div>
                <p className="text-sm">
                  Potter ipsum wand elf parchment wingardium. Squid
                  prefect&apos;s dog wand second. Vulture-hat giant not
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <div className="size-8 rounded-full bg-primary"></div>
                </div>
                <p className="text-sm">
                  Potter ipsum wand elf parchment wingardium. Squid
                  prefect&apos;s dog wand second. Vulture-hat giant not
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <div className="size-8 rounded-full bg-primary"></div>
                </div>
                <p className="text-sm">
                  Potter ipsum wand elf parchment wingardium. Squid
                  prefect&apos;s dog wand second. Vulture-hat giant not
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <div className="size-8 rounded-full bg-primary"></div>
                </div>
                <p className="text-sm">
                  Potter ipsum wand elf parchment wingardium. Squid
                  prefect&apos;s dog wand second. Vulture-hat giant not
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="bg-[#F8F8F8] pb-32 mt-10 relative">
        <div className="absolute -top-20 left-0">
          <Image
            src={FlowerImg}
            alt="flower"
            width={1000}
            height={1000}
            quality={100}
            className="h-full w-full object-cover rounded-[28px] rotate-flower"
          />
        </div>
        <div className="absolute -bottom-32 right-0">
          <Image
            src={FlowerImg}
            alt="flower"
            width={1000}
            height={1000}
            quality={100}
            className="h-full w-full object-cover rounded-[28px]"
          />
        </div>
        <div className="text-center pt-20 pb-14">
          <h2 className="text-4xl font-semibold">Our Products</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 px-20">
          <div className="grid grid-cols-2 gap-6">
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
            <div className="bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-10 pb-14 px-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Bulk Sunflower Oil</h4>
              <p className="text-base leading-loose mb-12">
                Available in steel drums, IBC tanks, flexitanks, and ISO tanks
                for large-scale export.
              </p>
              <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                Packaging Details
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
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
            <div className="bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-10 pb-14 px-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Consumer Packaged Oil</h4>
              <p className="text-base leading-loose mb-12">
                PET bottles (0.5L – 5L), jerry cans, and tin cans for retail
                distribution.
              </p>
              <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                Packaging Details
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
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
            <div className="bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-10 pb-14 px-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Sunflower Seeds</h4>
              <p className="text-base leading-loose mb-12">
                High-quality seeds for oil production or direct consumption,
                packaged for export.
              </p>
              <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                Packaging Details
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
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
            <div className="bg-white border-[.65px] border-[#F3F3F3] rounded-[28px] pt-10 pb-14 px-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Crude Sunflower Oil</h4>
              <p className="text-base leading-loose mb-12">
                Unrefined sunflower oil for further processing or industrial
                use.
                {/* Potter ipsum wand elf parchment wingardium. Squid prefect&apos;s
                dog wand second. Vulture-hat giant not elemental locomotor suits
                fantastic are. Three fritters letters other last. */}
              </p>
              <button className="bg-transparent border-b-2 border-solid border-black cursor-pointer">
                Packaging Details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-20 max-w-[1300px] mx-auto">
        <div className="text-center mb-10 max-w-[1000px] mx-auto">
          <h2 className="text-4xl mb-2 font-semibold">Partnerships</h2>
          <p className="text-base leading-loose w-[70%] mx-auto font-light mb-4">
            Potter ipsum wand elf parchment wingardium. Squid prefect&apos;s dog
            wand second. Vulture-hat giant not elemental locomotor suits
            fantastic are. Three fritters letters other last.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-14 px-10">
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
            <h4 className="text-lg font-bold mb-3">Call Or WhatsApp</h4>
            <ul>
              <li className="mb-3">
                <Link
                  href="tel:+380971200700"
                  className="text-sm text-[#696969] font-light"
                >
                  +380-97-120-0700
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-14 px-10">
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
            <h4 className="text-lg font-bold mb-3">Send Us an Email</h4>
            <ul>
              <li className="mb-3">
                <Link
                  href="mailTo:sales@novaolia.com"
                  className="text-sm text-[#696969] font-light"
                >
                  sales@novaolia.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-[.65px] border-[#D8D8D8] rounded-[53px] py-14 px-10">
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
            <h4 className="text-lg font-bold mb-3">Visit Us</h4>
            <ul>
              <li className="mb-3">
                <Link
                  href="tel:+1234567890"
                  className="text-sm text-[#696969] font-light"
                >
                  +234 701 2345 6789
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+1234567890"
                  className="text-sm text-[#696969] font-light"
                >
                  +234 701 2345 6789
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-10">
        <section className="contact-section rounded-[22px] max-w-[1500px] mx-auto mb-14">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-28 items-end py-20">
            <div>
              <h2 className="text-6xl w-[70%] font-syne mb-5">
                Send us a message
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
                <div className="form-group mb-4">
                  <label htmlFor="" className="text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-solid border-[#ECEDF2] bg-white rounded-lg px-4 py-5 text-sm"
                    placeholder="Enter your email address"
                  />
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
            <div>
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
        </section>
      </section>
      {/* <footer className="contact-section max-w-[1500px] mx-auto"></footer> */}
    </div>
  );
}
