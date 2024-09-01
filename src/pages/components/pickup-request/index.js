// pages/pickup-request.js

import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';

const PickupRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef(null);

  const onSubmit = (data) => {
    console.log('ফর্ম জমা হয়েছে:', data);
    reset();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = formRef.current.querySelectorAll('.animate-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div
        ref={formRef}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transform transition duration-500 hover:scale-105 animate-element"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 animate-fadeInUp">
          পিকআপ রিকোয়েস্ট ফর্ম
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col animate-element">
            <label className="text-gray-700 font-medium">ঠিকানা</label>
            <input
              type="text"
              placeholder="আপনার ঠিকানা লিখুন"
              {...register('address', { required: 'ঠিকানা বাধ্যতামূলক' })}
              className={`p-2 mt-1 border-2 rounded ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>
          <div className="flex flex-col animate-element">
            <label className="text-gray-700 font-medium">নাম</label>
            <input
              type="text"
              placeholder="আপনার নাম লিখুন"
              {...register('name', { required: 'নাম বাধ্যতামূলক' })}
              className={`p-2 mt-1 border-2 rounded ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col animate-element">
            <label className="text-gray-700 font-medium">ফোন নাম্বার</label>
            <input
              type="tel"
              placeholder="আপনার ফোন নাম্বার লিখুন"
              {...register('phone', {
                required: 'ফোন নাম্বার বাধ্যতামূলক',
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: 'সঠিক ফোন নাম্বার লিখুন (১১ সংখ্যা)',
                },
              })}
              className={`p-2 mt-1 border-2 rounded ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col animate-element">
            <label className="text-gray-700 font-medium">কাপড়ের বিবরণ</label>
            <textarea
            cols={10}
            rows={8}
              placeholder="কাপড়ের বিবরণ লিখুন যেমনঃ ১টি শার্ট, ১টি, প্যান্ট ধোলাই/আয়রন/ ইত্যাদি"
              {...register('description', {
                required: 'কাপড়ের বিবরণ বাধ্যতামূলক',
              })}
              className={`p-2 mt-1 border-2 rounded ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg animate-element"
          >
            জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
};

export default PickupRequest;
