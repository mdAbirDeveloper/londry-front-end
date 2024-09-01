// PricesSection.js
import { useEffect, useRef, useState } from 'react';

const pricingData = [
  {
    title: 'টি-শার্ট',
    services: [
      { type: 'ওয়াশ', price: '৳50' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳80' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳50' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳60' },
    ],
  },
  {
    title: 'শার্ট',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳100' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'জিন্স',
    services: [
      { type: 'ওয়াশ', price: '৳70' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳120' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳70' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳80' },
    ],
  },
  {
    title: 'প্যান্ট/ট্রাউজার',
    services: [
      { type: 'ওয়াশ', price: '৳70' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳120' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳70' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳80' },
    ],
  },
  {
    title: 'পাঞ্জাবি',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳100' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'পাঞ্জাবি হেভি',
    services: [
      { type: 'ওয়াশ', price: '৳80' },
      { type: 'আয়রন', price: '৳20' },
      { type: 'ড্রাই ক্লিন', price: '৳120' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳80' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳90' },
    ],
  },
  {
    title: 'পায়জামা',
    services: [
      { type: 'ওয়াশ', price: '৳50' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳80' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳50' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳60' },
    ],
  },
  {
    title: 'ফতুয়া',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳100' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'স্লিভলেস টি-শার্ট',
    services: [
      { type: 'ওয়াশ', price: '৳50' },
      { type: 'আয়রন', price: '৳10' },
      { type: 'ড্রাই ক্লিন', price: '৳80' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳50' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳60' },
    ],
  },
  {
    title: 'শর্টস',
    services: [
      { type: 'ওয়াশ', price: '৳50' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳80' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳50' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳60' },
    ],
  },
  {
    title: 'লুঙ্গি',
    services: [
      { type: 'ওয়াশ', price: '৳50' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳80' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳50' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳60' },
    ],
  },
  {
    title: 'সাফারি টপ',
    services: [
      { type: 'ওয়াশ', price: '৳70' },
      { type: 'আয়রন', price: '৳70' },
      { type: 'ড্রাই ক্লিন', price: '৳100' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳70' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳80' },
    ],
  },
  {
    title: 'সাফারি স্যুট (২ পিস)',
    services: [
      { type: 'ওয়াশ', price: '৳100' },
      { type: 'আয়রন', price: '৳100' },
      { type: 'ড্রাই ক্লিন', price: '৳150' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳100' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳120' },
    ],
  },
  {
    title: 'ট্র্যাক স্যুট (২ পিস)',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳30' },
      { type: 'ড্রাই ক্লিন', price: '৳90' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'এপ্রন',
    services: [
      { type: 'ওয়াশ', price: '৳50' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳80' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳50' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳60' },
    ],
  },
  {
    title: 'টাই',
    services: [
      { type: 'ওয়াশ', price: '৳30' },
      { type: 'আয়রন', price: '৳10' },
      { type: 'ড্রাই ক্লিন', price: '৳50' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳30' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳40' },
    ],
  },
  {
    title: 'মুজিব কোট/কোটি',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳30' },
      { type: 'ড্রাই ক্লিন', price: '৳100' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'জ্যাকেট (নরমাল)',
    services: [
      { type: 'ওয়াশ', price: '৳80' },
      { type: 'আয়রন', price: '৳50' },
      { type: 'ড্রাই ক্লিন', price: '৳120' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳80' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳90' },
    ],
  },
  {
    title: 'জ্যাকেট (স্পেশাল)',
    services: [
      { type: 'ওয়াশ', price: '৳100' },
      { type: 'আয়রন', price: '৳70' },
      { type: 'ড্রাই ক্লিন', price: '৳150' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳100' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳120' },
    ],
  },
  {
    title: 'হুডি',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳20' },
      { type: 'ড্রাই ক্লিন', price: '৳90' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'কোট/ব্লেজার',
    services: [
      { type: 'ওয়াশ', price: '৳100' },
      { type: 'আয়রন', price: '৳100' },
      { type: 'ড্রাই ক্লিন', price: '৳150' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳100' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳120' },
    ],
  },
  {
    title: 'স্যুট (২ পিস)',
    services: [
      { type: 'ওয়াশ', price: '৳120' },
      { type: 'আয়রন', price: '৳120' },
      { type: 'ড্রাই ক্লিন', price: '৳180' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳120' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳140' },
    ],
  },
  {
    title: 'স্যুট (৩ পিস)',
    services: [
      { type: 'ওয়াশ', price: '৳150' },
      { type: 'আয়রন', price: '৳150' },
      { type: 'ড্রাই ক্লিন', price: '৳200' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳150' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳170' },
    ],
  },
  {
    title: 'ওভারকোট',
    services: [
      { type: 'ওয়াশ', price: '৳100' },
      { type: 'আয়রন', price: '৳100' },
      { type: 'ড্রাই ক্লিন', price: '৳150' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳100' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳120' },
    ],
  },
  {
    title: 'কমিজ',
    services: [
      { type: 'ওয়াশ', price: '৳60' },
      { type: 'আয়রন', price: '৳15' },
      { type: 'ড্রাই ক্লিন', price: '৳100' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳60' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳70' },
    ],
  },
  {
    title: 'কমিজ (২ পিস)',
    services: [
      { type: 'ওয়াশ', price: '৳80' },
      { type: 'আয়রন', price: '৳30' },
      { type: 'ড্রাই ক্লিন', price: '৳120' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳80' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳90' },
    ],
  },
  {
    title: 'কমিজ (৩ পিস)',
    services: [
      { type: 'ওয়াশ', price: '৳100' },
      { type: 'আয়রন', price: '৳45' },
      { type: 'ড্রাই ক্লিন', price: '৳150' },
      { type: 'ওয়াশ এবং ফোল্ড', price: '৳100' },
      { type: 'ওয়াশ এবং আয়রন', price: '৳120' },
    ],
  },
];


const PricesSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);
  const ref = useRef(null);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter pricing data based on search query
  const filteredData = pricingData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.services.some(service =>
      service.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Determine the number of items to show
  const itemsToShow = showMore ? filteredData : filteredData.slice(0, 6);

  return (
    <section ref={ref} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">মূল্য তালিকা</h2>
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="আপনার প্রয়োজনীয় সেবা খুঁজুন..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Filtered Pricing Data */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {itemsToShow.length > 0 ? (
            itemsToShow.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <ul>
                  {item.services.map((service) => (
                    <li key={service.type} className="flex justify-between mb-2">
                      <span>{service.type}</span>
                      <span>{service.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">কোনো ফলাফল পাওয়া যায়নি</p>
          )}
        </div>
        {/* Show More / Show Less Button */}
        {filteredData.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-500 text-white font-bold font-serif p-3 rounded"
            >
              {showMore ?  "কম দেখুন": "আরো দেখুন" }
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricesSection;