import Image from "next/image";
import FlowerImg from "@/images/flower.png";
import DrumImg from "@/images/drum.svg";
import DiamondImg from "@/images/diamond.svg";
import DotImg from "@/images/dot.svg";
import MoneyImg from "@/images/money.svg";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <section
      className="services pb-20 pt-20 mt-20 px-5 md:px-20 relative"
      id="products"
    >
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
      <div className="flex flex-col md:grid grid-cols-2 gap-14 md:gap-24 text-center md:text-left">
        <div className="md:pl-10">
          <div className="flex items-center justify-center md:justify-normal gap-1 mb-4">
            <h3 className="text-base text-primary font-semibold">{'//'}</h3>
            <h3 className="text-base font-semibold uppercase">Services</h3>
          </div>
          <h2 className="text-3xl md:text-5xl md:w-[60%] mb-2 md:mb-4 font-medium leading-[1.2]">
            These are our list of services
          </h2>
          <Link
            href="#contact"
            className="text-black bg-primary py-4 px-8 rounded-full text-sm mt-4 inline-block"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <div className="flex flex-col md:grid grid-cols-2 gap-10">
            <div>
              <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
                <Image
                  src={DotImg}
                  alt="dot"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[30px] w-auto object-cover"
                />
              </div>
              <h4 className="text-2xl leading-[1.6] mb-2">
                Private Labelling & Custom Packaging
              </h4>
              <p className="text-sm font-light leading-loose">
                Supply your brand name, logo, and packaging design, and we
                deliver ready-for-market products.
              </p>
            </div>
            <div>
              <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
                <Image
                  src={MoneyImg}
                  alt="money"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[30px] w-auto object-cover"
                />
              </div>
              <h4 className="text-2xl leading-[1.6] mb-2">
                Wholesale & Export Solutions
              </h4>
              <p className="text-sm font-light leading-loose">
                Flexible bulk supply for distributors, supermarkets, and food
                producers worldwide.
              </p>
            </div>
            <div>
              <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
                <Image
                  src={DiamondImg}
                  alt="diamond"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[30px] w-auto object-cover"
                />
              </div>
              <h4 className="text-2xl leading-[1.6] mb-2">
                Quality Assurance & Certificate Support
              </h4>
              <p className="text-sm font-light leading-loose">
                All necessary documents (ISO, HACCP, HALAL, Organic0 for global
                export markets
              </p>
            </div>
            <div>
              <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
                <Image
                  src={DrumImg}
                  alt="drum"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-[30px] w-auto object-cover"
                />
              </div>
              <h4 className="text-2xl leading-[1.6] mb-2">
                Technical & Product Customization
              </h4>
              <p className="text-sm font-light leading-loose">
                Tailored oil blends and packaging options for unique business
                requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
