/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// AboutSection.js
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const aboutRef = useRef(null);

  // Scroll animation on component load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn'); // Trigger slide-in animation
          }
        });
      },
      { threshold: 0.2 }
    );

    const children = aboutRef.current.querySelectorAll('.animate-child');
    children.forEach((child) => observer.observe(child));

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 text-white"
    >
      {/* Text Section */}
      <div
        className="md:w-1/2 mb-8 md:mb-0 md:mr-8 opacity-0 -translate-x-10 animate-child"
        style={{ transitionDelay: '0.2s' }} // Optional delay
      >
        <h2 className="text-3xl font-bold mb-4">আমাদের সম্পর্কে জানুন</h2>
        <p className="text-lg mb-4 font-serif font-semibold">
          আমাদের লন্ড্রি সার্ভিস আপনাকে সেরা মানের কাপড় পরিষ্কার করার সেবা প্রদান
          করে। পিকআপ এবং ডেলিভারি সুবিধার মাধ্যমে, আমরা আপনার কাপড়ের যত্ন নিই যাতে
          আপনি সবসময় আপনার সময় সাশ্রয় করতে পারেন।
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 font-bold font-serif rounded-md hover:bg-teal-700 transition duration-300">
          <Link href="/components/pickup-request">পিকআপ রিকুয়েস্ট</Link>
        </button>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 opacity-0 translate-x-10 animate-child"
        style={{ transitionDelay: '0.4s' }} // Optional delay for stagger effect
      >
        <img
          src="/about-image.jpg" // Replace with your actual image path
          alt="About Laundry Service"
          className="w-full rounded-lg shadow-lg object-cover h-64 md:h-80 transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default AboutSection;
