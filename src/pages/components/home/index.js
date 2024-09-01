/* eslint-disable @next/next/no-img-element */
// TopSection.js
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/top-image (1).jpg", // Replace with actual paths to your images
  "/top-image (2).jpg",
  "/top-image (3).jpg",
];

const TopSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      {/* Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Laundry service ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center p-4 text-white bg-black bg-opacity-50 rounded-lg animate-slideDown">
        <h1 className="text-4xl font-bold mb-4 font-serif">
          স্বাগতম আমাদের লন্ড্রি সার্ভিসে
        </h1>
        <p className="text-lg font-serif font-bold">
          সুবিধাজনক, নির্ভরযোগ্য এবং পেশাদার লন্ড্রি সার্ভিস, পিকআপ এবং ডেলিভারি
          সহ। আপনার কাপড়ের যত্ন নেব আমরা, যাতে আপনাকে তা করতে না হয়!
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 font-serif transition duration-300">
          <Link href={"/components/pickup-request"}>পিকআপ রিকোয়েস্ট</Link>
        </button>
      </div>
    </section>
  );
};

export default TopSection;
