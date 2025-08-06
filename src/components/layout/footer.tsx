import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-20 max-w-[1500px] mx-auto">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-5 mb-8">
        <li>
          <Link
            href="mailTo:novatradar@gmail.com"
            className="text-base text-white opacity-80 font-light"
          >
            novatradar@gmail.com
          </Link>
        </li>
        <li className="md:border-l border-solid border-white px-5">
          <Link
            href="https://wa.me/+380971200700?text=Hello%20there.%20I%20am%20from%20the%20site"
            className="text-base text-white opacity-80 font-light"
          >
            +380-97-120-0700
          </Link>
        </li>
        <li className="md:border-l border-solid border-white px-5">
          <Link href="/" className="text-white opacity-80 text-base">
            , Хмільник, Vinnytsia Oblast, 22000
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-7 md:gap-5">
        <li>
          <Link href="/copyright" className="text-white text-base opacity-60">
            Copyright information
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions" className="text-white text-base opacity-60">
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
