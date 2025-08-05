import Image from "next/image";
import FlowerImg from "@/images/flower.png";
import PackagingImg from "@/images/packaging.png";
import CardImg from "@/images/card.png";
import TruckImg from "@/images/truck.png";
import Link from "next/link";

const PackagingPage = () => {
  return (
    <section className="pb-20 pt-20 px-20 relative" id="products">
      <div className="absolute top-[40%] right-0">
        <Image
          src={FlowerImg}
          alt="flower"
          width={1000}
          height={1000}
          quality={100}
          className="h-full w-full object-cover rounded-[28px]"
        />
      </div>
      <div className="grid grid-cols-2 gap-24">
        <div className="pl-10">
          <div className="flex items-center gap-1 mb-4">
            <h3 className="text-base text-primary font-semibold">//</h3>
            <h3 className="text-base font-semibold uppercase">Our Expertise</h3>
          </div>
          <h2 className="text-5xl mb-2 font-medium leading-[1.2]">
            Exporting, Shipping & <br />{" "}
            <span className="text-primary">Logistics</span>
          </h2>
          <p className="text-sm leading-loose md:leading-loose mb-5">
            Packaging for long-dinstance export by road, ship all documentation,
            and payment methods. At the core of our operations is a commitment
            to exceptional service delivery. We understand that in the global
            export and logistics landscape, timely delivery, product integrity,
            and clear communication are non-negotiable.
          </p>
          <Image
            src={CardImg}
            alt="card"
            width={1000}
            height={1000}
            quality={100}
            className="h-auto w-[50%] mb-5 object-cover"
          />
          <Image
            src={TruckImg}
            alt="truck"
            width={1000}
            height={1000}
            quality={100}
            className="h-auto w-[20%] object-cover object-center"
          />
          {/* <Link
            href="#contact"
            className="text-black bg-primary py-4 px-8 rounded-full text-sm mt-4 inline-block"
          >
            Contact Us
          </Link> */}
        </div>
        <div>
          <Image
            src={PackagingImg}
            alt="dot"
            width={1000}
            height={1000}
            quality={100}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagingPage;
