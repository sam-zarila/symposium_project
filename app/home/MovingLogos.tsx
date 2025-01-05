import React  from 'react';


const logos = [
    'health.jpg', 'education.jpg', 'tourism.jpg', 'hotel.jpg', 
    'bank.jpg', 'ict.jpg', 'construction.jpg', 'transport.jpg', 'law.jpg'
  ];

  const MovingLogos = () => {
    return (
      <div className="relative w-full overflow-hidden h-32 sm:h-40 bg-gray-100">
        {/* Top Row Moving Left to Right */}
        <div className="absolute flex animate-scroll-left-to-right whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={`/images/${logo}`}
              alt={logo}
              className="mx-4 sm:mx-6 h-10 sm:h-12 object-contain"
            />
          ))}
        </div>
  
        {/* Bottom Row Moving Right to Left */}
        <div className="absolute flex animate-scroll-right-to-left whitespace-nowrap bottom-0">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`bottom-${index}`}
              src={`/images/${logo}`}
              alt={logo}
              className="mx-4 sm:mx-6 h-10 sm:h-12 object-contain"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default MovingLogos;