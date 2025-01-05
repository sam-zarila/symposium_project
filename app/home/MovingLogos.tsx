import React  from 'react';


const logos = [
    'health.jpg', 'education.jpg', 'tourism.jpg', 'hotel.jpg', 
    'bank.jpg', 'ict.jpg', 'construction.jpg', 'transport.jpg', 'law.jpg'
  ];

  const MovingLogos = () => {
    return (
      <div className="relative w-full h-32 sm:h-40 overflow-hidden">
        {/* Top Row Moving from Left to Right */}
        <div className="absolute flex animate-move-left-to-right top-0 w-full">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/images/${logo}`}
              alt={logo}
              className="mx-4 sm:mx-6 h-10 sm:h-12 object-contain"
            />
          ))}
        </div>
  
        {/* Bottom Row Moving from Right to Left */}
        <div className="absolute flex animate-move-right-to-left bottom-0 w-full">
          {logos.map((logo, index) => (
            <img
              key={index}
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