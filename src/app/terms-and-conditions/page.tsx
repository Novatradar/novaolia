import "swiper/css";
import "swiper/css/autoplay";
import ServicesPage from "@/components/Services";
import DisplayLayout from "@/components/layout/layout";

export default function TermsAndConditions() {
  return (
    <DisplayLayout>
      <div>
        <section>
          <div className="bg-black h-[15rem] md:h-[20rem] w-full relative">
            <div className="absolute bottom-20 left-5 md:left-20">
                <h2 className="text-2xl md:text-4xl text-white">Terms and Conditions</h2>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-12 py-20 md:py-12 md:w-[60%] mx-auto">
          <h1 className="text-xl font-semibold mb-4">
            Novaolia Terms and Conditions
          </h1>
          <p className="text-sm leading-loose mb-3">
            Effective Date: [Insert Date]
          </p>

          <p className="text-sm leading-loose mb-3">
            Welcome to Novaolia. These Terms and Conditions (“Terms”) govern
            your access to and use of our products, website, and services. By
            purchasing our products or using our services, you agree to be bound
            by these Terms. Please read them carefully.
          </p>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            1. Company Information
          </h2>
          <p className="text-sm leading-loose mb-3">
            Novaolia is a sunflower oil manufacturer and distributor. Our
            products are sold under the Novaolia brand and may also be available
            for private labeling upon request.
          </p>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            2. Product Information & Usage
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Novaolia sunflower oil is produced according to recognized food
              safety and quality standards.
            </li>
            <li>
              Product specifications, including size, packaging, and labeling,
              are subject to change without prior notice to improve quality and
              efficiency.
            </li>
            <li>
              Products should be stored as instructed on packaging to maintain
              quality and shelf life.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            3. Orders and Payments
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Orders can be placed through our official website, authorized
              distributors, or sales agents.
            </li>
            <li>
              Full payment or agreed deposit must be made before shipment unless
              otherwise stated in a written agreement.
            </li>
            <li>
              Prices are subject to change without prior notice, but confirmed
              orders will not be affected.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            4. Shipping and Delivery
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Delivery times and costs depend on the location, shipping method,
              and quantity ordered.
            </li>
            <li>
              Novaolia is not liable for delays due to factors beyond our
              control, including natural disasters, customs delays, or transport
              issues.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            5. Returns and Refunds
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Products may only be returned if they are defective, damaged, or
              incorrect upon delivery.
            </li>
            <li>
              Notification of issues must be made within 7 business days of
              receipt.
            </li>
            <li>
              Approved refunds will be processed within 14 working days or
              exchanged with a similar product.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            6. Intellectual Property
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              All trademarks, logos, product designs, and packaging of Novaolia
              are owned by us and protected by law.
            </li>
            <li>
              Unauthorized use of our intellectual property is strictly
              prohibited.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            7. Limitation of Liability
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Novaolia is not liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              services.
            </li>
            <li>
              Liability is limited to the purchase price of the affected
              product.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">
            8. Compliance & Certification
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Novaolia products meet recognized food safety standards (e.g.,
              HALAL, ISO certifications).
            </li>
            <li>
              Customers are responsible for ensuring our products meet their
              local regulatory requirements before resale.
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-base font-semibold mb-3">9. Governing Law</h2>
          <p className="text-sm leading-loose mb-3">
            These Terms are governed by and construed under the laws of [Insert
            Country/State]. Any disputes shall be resolved in the courts of
            [Insert Location].
          </p>
        </section>
      </div>
    </DisplayLayout>
  );
}
