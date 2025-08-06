import Image from "next/image";
import FlowerImg from "@/images/flower.png";
import PackagingImg from "@/images/packaging.png";
import CardImg from "@/images/card.png";
import TruckImg from "@/images/truck.png";
import Link from "next/link";

import { FaTruckFront } from "react-icons/fa6";
import { MdDirectionsRailway } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { MdOutlineMoveDown } from "react-icons/md";

import { BsBank } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";

const PackagingPage = () => {
  return (
    <>
      <section className="pb-20 pt-20 px-5 md:px-20 relative" id="products">
        <div className="absolute top-[40%] right-0">
          <Image
            src={FlowerImg}
            alt="flower"
            width={1000}
            height={1000}
            quality={100}
            className="h-[5rem] md:h-full w-auto md:w-full object-cover rounded-[28px]"
          />
        </div>
        <div className="flex flex-col md:grid grid-cols-2 gap-14 md:gap-24">
          <div className="">
            <div className="flex items-center gap-1 mb-4">
              <h3 className="text-sm md:text-base text-primary font-semibold">
                {"//"}
              </h3>
              <h3 className="text-sm md:text-base font-semibold uppercase">
                Our Expertise
              </h3>
            </div>
            <h2 className="text-3xl md:text-4xl w-[80%] mb-2 font-medium leading-[1.2]">
              Packaging for Long-Distance Export
            </h2>
            {/* <h2 className="text-3xl md:text-5xl mb-2 font-medium leading-[1.2]">
              Exporting, Shipping & <br />{" "}
              <span className="text-primary">Logistics</span>
            </h2> */}
            <p className="text-base leading-loose md:leading-loose mb-7">
              We offer packaging solutions designed for long-distance road,
              rail, air and sea transport, ensuring product safety and freshness
              upon delivery. Packaging for long-dinstance export by road, ship
              all documentation, and payment methods.
            </p>
            <div className="flex gap-6">
              <BsBank className="text-2xl" />
              <FaCcPaypal className="text-2xl" />
              <FaCcMastercard className="text-2xl" />
              <IoCardOutline className="text-2xl" />
            </div>
            {/* <Image
              src={CardImg}
              alt="card"
              width={1000}
              height={1000}
              quality={100}
              className="h-auto w-[40%] mb-7 object-cover"
            /> */}
            {/* <Image
              src={TruckImg}
              alt="truck"
              width={1000}
              height={1000}
              quality={100}
              className="h-auto w-[15%] object-cover object-center"
            /> */}
            {/* <Link
            href="#contact"
            className="text-black bg-primary py-4 px-8 rounded-full text-sm mt-4 inline-block"
          >
            Contact Us
          </Link> */}
          </div>
          <div>
            <div className="flex flex-col md:grid grid-cols-2 gap-4">
              <div className="shadow h-max">
                <div className="bg-primary h-2 w-full"></div>
                <div className="px-4 py-3">
                  <h4 className="text-lg font-medium mb-3">
                    Consumer Packaging:
                  </h4>
                  <p className="text-sm leading-loose">
                    PET bottles, HDPE jerry cans and tin cans securely
                    shrink-wrapped and palletized
                  </p>
                </div>
              </div>
              <div className="shadow">
                <div className="bg-primary h-2 w-full"></div>
                <div className="px-4 py-3">
                  <h4 className="text-lg font-medium mb-3">Bulk Packaging:</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="text-sm leading-loose">
                      <span className="font-medium">
                        &bull; Steel or HDPE Drums
                      </span>
                      (190 - 210L) for refined oil.
                    </li>
                    <li className="text-sm leading-loose">
                      <span className="font-medium">
                        &bull; IBC Tanks(1000L)
                      </span>{" "}
                      &mdash; robust, reusable containers for bulk buyers.
                    </li>
                    <li className="text-sm leading-loose">
                      <span className="font-medium">&bull; Flexitanks</span>{" "}
                      (20,000 - 24,000L) for cost-effective sea shipments.
                    </li>
                    <li className="text-sm leading-loose">
                      <span className="font-medium">
                        &bull; ISO Tank Containers
                      </span>
                      ideal for maximum volume and safety
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shadow h-max md:-mt-48">
                <div className="bg-primary h-2 w-full"></div>
                <div className="px-4 py-3">
                  <h4 className="text-lg font-medium mb-3">
                    Export Documentation:
                  </h4>
                  <p className="text-sm leading-loose">
                    Certificate or Origin, Phytosanitary certificate(for seeds),
                    Quality Analysis Report, Packing List & Invoice, Bill of
                    Lading / CMR Waybill, Insurance Documents (on request)
                  </p>
                </div>
              </div>
              <div className="shadow h-max">
                <div className="bg-primary h-2 w-full"></div>
                <div className="px-4 py-3">
                  <h4 className="text-lg font-medium mb-3">Sunflower Seeds:</h4>
                  <p className="text-sm leading-loose">
                    Laminated polypropylene bags(25kg,50kg) with moisture-proof
                    liners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="-mt-9 md:-mt-14 mb-20 px-5 md:px-20">
        <h4 className="text-2xl md:text-4xl md:w-[75%] mb-16 block relative leading-relaxed md:leading-[1.4]">
          We provide flexible logistics solutions to meet the diverse needs of
          our global customers as well as real-time shipment tracking for
          transparency with the following:
        </h4>
        <div className="flex flex-col md:grid grid-cols-4 gap-10 text-center md:text-left">
          <div>
            <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
              <FaTruckFront className="text-white text-2xl" />
            </div>
            <h4 className="text-2xl leading-[1.6] mb-2">Road Transport</h4>
            <p className="text-sm font-light leading-loose">
              For deliveries within Ukraine and neighboring European countries,
              using certified food-grade tanker trucks and refrigerated trucks
              for packaged goods.
            </p>
          </div>
          <div>
            <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
              <MdDirectionsRailway className="text-white text-3xl" />
            </div>
            <h4 className="text-2xl leading-[1.6] mb-2">Rail Transport</h4>
            <p className="text-sm font-light leading-loose">
              Bulk shipments via railway tank cars and containerized cargo,
              ensuring efficient inland transport to ports and landlocked
              destinations.
            </p>
          </div>
          <div>
            <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
              <FaShip className="text-white text-3xl" />
            </div>
            <h4 className="text-2xl leading-[1.6] mb-2">Sea Freight</h4>
            <p className="text-sm font-light leading-loose">
              Worldwide shipping from Ukrainian Black Sea ports (Odessa,
              Chornomorsk, Mykolaiv) using containerized cargo, flexitanks and
              ISO tanks for long-distance, high-volume exports.
            </p>
          </div>
          <div>
            <div className="size-[70px] mx-auto md:mx-0 rounded-full mb-4 bg-[#171717] flex items-center justify-center">
              <MdOutlineMoveDown className="text-white text-2xl" />
            </div>
            <h4 className="text-2xl leading-[1.6] mb-2">
              Intermodal Solutions
            </h4>
            <p className="text-sm font-light leading-loose">
              Combining road, rail and sea for seamless international delivery
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagingPage;
