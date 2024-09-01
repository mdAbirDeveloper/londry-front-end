/* eslint-disable @next/next/no-img-element */
// ServicesSection.js
import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'ওয়াশ এবং ফোল্ড',
    description: 'আমরা আপনার কাপড় পরিষ্কার করে, ফোল্ড করে প্রস্তুত করে দেই। দ্রুত এবং সাশ্রয়ী।',
    icon: '/wash.jpeg', // Replace with your actual service images
  },
  {
    title: 'ড্রাই ক্লিনিং',
    description: 'ড্রাই ক্লিনিং সার্ভিস যা আপনার দামী এবং সংবেদনশীল কাপড়ের যত্ন নিবে।',
    icon: '/dry-clien.webp',
  },
  {
    title: 'আয়রনিং',
    description: 'কাপড় আয়রন করা একটি চমৎকার পরিষেবা যা আপনার পোশাককে আরো আকর্ষণীয় করে তোলে।',
    icon: '/iron.webp',
  },
  {
    title: 'পিকআপ এবং ডেলিভারি',
    description: 'ঘরের সুবিধায় পিকআপ এবং ডেলিভারি, আপনার সময় বাঁচাতে আমাদের সেরা পরিষেবা।',
    icon: '/pickup.webp',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp'); // Adds the animation class when in view
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current.querySelectorAll('.service-card');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 bg-gradient-to-r from-teal-500 via-blue-500 to-green-500 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-8">আমাদের সেবাসমূহ</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white text-black rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 opacity-0 translate-y-10"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
