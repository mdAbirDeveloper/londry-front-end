import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "আমাদের পরিষেবা কি কি?",
      answer: "আমাদের পরিষেবাগুলির মধ্যে রয়েছে কাপড় ধোয়া, শুকানো, ইস্ত্রি করা, এবং আরও অনেক কিছু। বিস্তারিত জানতে আমাদের সেবার পৃষ্ঠা দেখুন।"
    },
    {
      question: "কিভাবে অর্ডার দেব?",
      answer: "আপনি আমাদের ওয়েবসাইটের 'পিকআপ রিকোয়েস্ট' পৃষ্ঠার মাধ্যমে অর্ডার দিতে পারেন। অথবা আমাদের ফোন নম্বরে কল করে সরাসরি অর্ডার করতে পারেন।"
    },
    {
      question: "ডেলিভারি চার্জ কত?",
      answer: "ডেলিভারি চার্জ আপনার অবস্থান অনুযায়ী পরিবর্তিত হতে পারে। বিস্তারিত চার্জের জন্য আমাদের কাস্টমার সার্ভিসের সাথে যোগাযোগ করুন।"
    },
    {
      question: "অর্ডার কিভাবে ট্র্যাক করব?",
      answer: "আপনি আমাদের ওয়েবসাইটের 'অর্ডার ট্র্যাকিং' পৃষ্ঠার মাধ্যমে আপনার অর্ডার ট্র্যাক করতে পারেন।"
    },
    {
      question: "আপনার সেবা কেমন মানের?",
      answer: "আমরা সর্বোচ্চ মানের পরিষেবা প্রদান করি। আমাদের অভিজ্ঞ কর্মীরা আপনার কাপড়ের যত্নে বিশেষজ্ঞ।"
    },
    {
      question: "আপনার শপের অবস্থান কোথায়?",
      answer: "আমাদের শপটি প্রধান শহরের কেন্দ্রস্থলে অবস্থিত। বিস্তারিত অবস্থান জানতে আমাদের যোগাযোগ পৃষ্ঠার মাধ্যমে জানতে পারবেন।"
    },
    {
      question: "আপনি কি এক্সপ্রেস পরিষেবা প্রদান করেন?",
      answer: "হ্যাঁ, আমরা এক্সপ্রেস পরিষেবা প্রদান করি। এটি দ্রুত পরিষেবা নিশ্চিত করে।"
    },
    {
      question: "সেবা নেওয়ার জন্য কি কোনো রেজিস্ট্রেশন প্রয়োজন?",
      answer: "না, আমাদের সেবা নিতে কোনো রেজিস্ট্রেশন প্রয়োজন নেই। সরাসরি আমাদের সাথে যোগাযোগ করলেই হবে।"
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left text-lg font-semibold text-gray-800 py-4 px-2 flex items-center justify-between transition-transform duration-300 transform hover:scale-105"
              >
                {faq.question}
                {openIndex === index ? (
                  <AiOutlineUp className="text-gray-600 text-xl" />
                ) : (
                  <AiOutlineDown className="text-gray-600 text-xl" />
                )}
              </button>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="py-4 px-2 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
