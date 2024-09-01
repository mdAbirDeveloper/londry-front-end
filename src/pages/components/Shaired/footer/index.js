// Footer.js
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* Company Info */}
        <div className="animate-fadeInUp pl-2">
          <h2 className="text-2xl font-semibold mb-4">Laundry Service</h2>
          <p className=" text-white">
            We provide the best laundry service in town with pickup and delivery
            options for your convenience. Experience fresh, clean clothes
            without the hassle.
          </p>
        </div>

        {/* Quick Links */}
        <div className="animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/components/about" },
              { name: "Services", path: "/components/services" },
              { name: "Prices", path: "/components/prices" },
              { name: "PickUp Request", path: "/components/pickup-request" },
              { name: "Contact", path: "/components/contact" },
              { name: "Faq", path: "/components/faq" },
            ].map((item, index) => (
              <li
                key={item.name}
                className={`mt-2 md:mt-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={item.path}
                  className={`text-white block py-2 rounded-md font-medium hover:bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:text-white transition duration-300 text-lg px-5 hover:scale-105 hover:rotate-3 hover:shadow-lg `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: mdshahjalal9778@gmail.com</li>
            <li>Phone: +880 1832-822560</li>
            <li>Address: 123 Laundry St, Clean City, TX</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <AiFillFacebook className="text-2xl cursor-pointer hover:text-blue-300 transition-colors duration-300" />
            <AiFillTwitterCircle className="text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            <AiFillInstagram className="text-2xl cursor-pointer hover:text-pink-400 transition-colors duration-300" />
            <a
              href="https://wa.me/8801832822560"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp className="text-2xl cursor-pointer hover:text-pink-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-300">
        &copy; {new Date().getFullYear()} Laundry Service. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
