import "swiper/css";
import "swiper/css/autoplay";
import DisplayLayout from "@/components/layout/layout";

export default function TermsAndConditions() {
  return (
    <DisplayLayout>
      <div>
        <section>
          <div className="bg-black h-[15rem] md:h-[20rem] w-full relative">
            <div className="absolute bottom-20 left-5 md:left-20">
              <h2 className="text-2xl md:text-4xl text-white">Copyright Information</h2>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-12 py-16 md:py-12 md:w-[60%] mx-auto">
          {/* Privacy Policy */}
          <h1 className="text-xl font-semibold mb-3">Privacy Policy</h1>

          <h2 className="text-base font-semibold mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Personal details (name, address, phone number, email) provided
              during orders or inquiries.
            </li>
            <li>
              Payment information for processing transactions (we do not store
              sensitive card data).
            </li>
            <li>
              Website usage data (cookies, IP address, browser type) for
              analytics and website improvement.
            </li>
          </ul>

          <h2 className="text-base font-semibold mb-3">
            2. Use of Information
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>To process and deliver orders.</li>
            <li>
              To communicate updates, promotions, or respond to inquiries.
            </li>
            <li>To improve our website, services, and customer experience.</li>
          </ul>

          <h2 className="text-base font-semibold mb-3">3. Cookies</h2>
          <p className="text-sm leading-loose mb-3">
            Our website uses cookies to enhance functionality and track user
            experience. You can disable cookies in your browser, but some
            features may not work properly.
          </p>

          <h2 className="text-base font-semibold mb-3">4. Data Security</h2>
          <p className="text-sm leading-loose mb-3">
            We implement strong security measures to protect personal
            information against unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-base font-semibold mb-3">
            5. Sharing of Information
          </h2>
          <p className="text-sm leading-loose mb-3">
            We do not sell or rent personal data. We may share information with
            logistics partners and payment processors solely for order
            fulfillment.
          </p>

          <h2 className="text-base font-semibold mb-3">6. Your Rights</h2>
          <p className="text-sm leading-loose mb-3">
            You may request to access, correct, or delete your personal
            information by contacting us at [Insert Email].
          </p>

          <h2 className="text-base font-semibold mb-3">
            7. Updates to This Policy
          </h2>
          <p className="text-sm leading-loose mb-3">
            We may update this Privacy Policy at any time. Changes will be
            posted on our website.
          </p>

          <hr className="my-6" />

          {/* Refund & Return Policy */}
          <h1 className="text-xl font-semibold mb-3">Refund & Return Policy</h1>
          <p className="text-sm leading-loose mb-3">
            Effective Date: [Insert Date]
          </p>
          <p className="text-sm leading-loose mb-3">
            At Novaolia, customer satisfaction is important to us. Due to the
            nature of food products, strict policies apply:
          </p>

          <h2 className="text-base font-semibold mb-3">
            1. Return Eligibility
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Only products received damaged, defective, or incorrect can be
              returned.
            </li>
            <li>
              Products must be unopened, unused, and reported within 7 business
              days of delivery.
            </li>
          </ul>

          <h2 className="text-base font-semibold mb-3">2. Refund Process</h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Approved returns will be refunded to the original payment method
              within 14 business days.
            </li>
            <li>
              If a replacement product is requested, shipping costs are covered
              by Novaolia in cases of our error.
            </li>
          </ul>

          <h2 className="text-base font-semibold mb-3">
            3. Non-Returnable Items
          </h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>Opened products or those without original packaging.</li>
            <li>Products past their stated shelf life.</li>
          </ul>

          <h2 className="text-base font-semibold mb-3">
            4. How to Request a Return
          </h2>
          <p className="text-sm leading-loose mb-3">
            Contact our support team at [Insert Email] with your order number,
            photos (if applicable), and reason for return.
          </p>

          <hr className="my-6" />

          {/* Disclaimer */}
          <h1 className="text-xl font-semibold mb-3">Disclaimer</h1>
          <p className="text-sm leading-loose mb-3">
            Effective Date: [Insert Date]
          </p>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              The information provided on our website and product labels is for
              general informational purposes only.
            </li>
            <li>
              Novaolia shall not be liable for any misuse of our products,
              including but not limited to improper storage or use beyond their
              intended culinary purposes.
            </li>
            <li>
              While we strive for accuracy, we do not guarantee that website
              content is error-free or always up-to-date.
            </li>
            <li>
              Customers are responsible for ensuring that Novaolia products
              comply with local regulations before resale or use.
            </li>
          </ul>

          <hr className="my-6" />

          {/* Shipping & Delivery Policy */}
          <h1 className="text-xl font-semibold mb-3">
            Shipping & Delivery Policy
          </h1>
          <p className="text-sm leading-loose mb-3">
            Effective Date: [Insert Date]
          </p>

          <h2 className="text-base font-semibold mb-3">1. Shipping Methods</h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>Domestic (within Ukraine) – via trusted local couriers.</li>
            <li>
              International – via freight, sea containers, or air cargo for
              wholesale clients.
            </li>
          </ul>

          <h2 className="text-base font-semibold mb-3">2. Delivery Times</h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>Domestic: 2–5 business days.</li>
            <li>
              International: Varies by destination and shipping method (average
              7–30 days).
            </li>
          </ul>

          <h2 className="text-base font-semibold mb-3">3. Shipping Costs</h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Costs depend on destination, order size, and method of shipment.
            </li>
            <li>Shipping quotes are provided at order confirmation.</li>
          </ul>

          <h2 className="text-base font-semibold mb-3">4. Customs & Duties</h2>
          <p className="text-sm leading-loose mb-3">
            Customers are responsible for paying any applicable customs duties,
            taxes, or import fees.
          </p>

          <h2 className="text-base font-semibold mb-3">5. Shipping Damage</h2>
          <p className="text-sm leading-loose mb-3">
            If products are damaged during shipping, notify us within 48 hours
            of delivery with photos.
          </p>

          <hr className="my-6" />

          {/* About Us */}
          <h1 className="text-xl font-semibold mb-3">About Us</h1>

          <h2 className="text-base font-semibold mb-3">Who We Are</h2>
          <p className="text-sm leading-loose mb-3">
            Novaolia is a leading producer and global exporter of premium
            sunflower oil, proudly based in Ukraine – one of the world&apos;s
            most trusted hubs for sunflower oil production and agricultural
            exports.
          </p>

          <h2 className="text-base font-semibold mb-3">Our Mission</h2>
          <p className="text-sm leading-loose mb-3">
            To deliver high-quality, pure, and safe sunflower oil to homes,
            businesses, and food manufacturers worldwide, ensuring consistent
            taste, health benefits, and global standards.
          </p>

          <h2 className="text-base font-semibold mb-3">Our Strengths</h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>
              Global Export Excellence: We ship to markets across Europe, the
              Middle East, Africa, and Asia.
            </li>
            <li>
              Advanced Production Facilities: Equipped with modern refining and
              bottling technology for maximum purity.
            </li>
            <li>
              International Certifications:
              <ul className="list-disc pl-5 space-y-2">
                <li>HALAL Certified – approved for diverse markets.</li>
                <li>ISO 22000 Certified – food safety management.</li>
                <li>Organic Compliant – environmentally conscious sourcing.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-base font-semibold mb-3">Why Choose Novaolia?</h2>
          <ul className="list-disc pl-5 text-sm leading-loose mb-3 space-y-2">
            <li>Superior quality oil with consistent taste and shelf life.</li>
            <li>
              Flexible packaging options (retail bottles, jerry cans, drums,
              bulk containers).
            </li>
            <li>Options for private labeling and contract packaging.</li>
          </ul>

          <h2 className="text-base font-semibold mb-3">
            Commitment to Excellence
          </h2>
          <p className="text-sm leading-loose mb-3">
            Novaolia combines Ukrainian agricultural expertise with strict
            international quality standards to ensure every drop of oil we
            produce meets the demands of global consumers and businesses.
          </p>
        </section>
      </div>
    </DisplayLayout>
  );
}
