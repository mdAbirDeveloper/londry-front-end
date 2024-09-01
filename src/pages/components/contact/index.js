// ContactPage.js
import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const formRef = useRef(null);

  const onSubmit = (data) => {
    console.log(data);
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
    <section className="py-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fadeInUp">
          যোগাযোগ করুন
        </h2>
        <div
          ref={formRef}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-element"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 animate-element">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                নাম
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'নাম আবশ্যক' })}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4 animate-element">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                ইমেইল
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'ইমেইল আবশ্যক',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'একটি বৈধ ইমেইল ঠিকানা দিন',
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4 animate-element">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                বিষয়
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'বিষয় আবশ্যক' })}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            <div className="mb-4 animate-element">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                বার্তা
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'বার্তা আবশ্যক' })}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 animate-element"
            >
              পাঠান
            </button>
          </form>
          {isSubmitSuccessful && (
            <p className="mt-4 text-center text-green-600 animate-fadeInUp">
              আপনার বার্তা সফলভাবে পাঠানো হয়েছে!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
