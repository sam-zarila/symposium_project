import React from 'react';

const logos = [
  { name: 'Health', file: 'health.jpg' },
  { name: 'Education', file: 'education.jpg' },
  { name: 'Tourism', file: 'tourism.jpg' },
  { name: 'Hotel', file: 'hotel.jpg' },
  { name: 'Bank', file: 'bank.jpg' },
  { name: 'ICT', file: 'ict.jpg' },
  { name: 'Construction', file: 'construction.jpg' },
  { name: 'Transport', file: 'transport.jpg' },
  { name: 'Law', file: 'law.jpg' },
];

const MovingLogos = () => {
  return (
    <div className="relative w-full py-16 bg-gray-700">
      <h2 className="text-center text-gray-800 text-4xl sm:text-5xl font-bold mb-12">
        Partner Industries
      </h2>

      {/* Top Row - Moving Left to Right */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <div className="absolute flex animate-scroll-left-to-right whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`top-${index}`}
              className="flex flex-col items-center mx-8 sm:mx-12"
            >
              <img
                src={`/images/${logo.file}`}
                alt={logo.name}
                className="h-20 sm:h-28 w-20 sm:w-28 object-contain"
              />
              <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Moving Right to Left */}
      <div className="relative h-40 sm:h-48 overflow-hidden mt-8">
        <div className="absolute flex animate-scroll-right-to-left whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`bottom-${index}`}
              className="flex flex-col items-center mx-8 sm:mx-12"
            >
              <img
                src={`/images/${logo.file}`}
                alt={logo.name}
                className="h-20 sm:h-28 w-20 sm:w-28 object-contain"
              />
              <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingLogos;
