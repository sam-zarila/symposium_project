import React from "react";
import Header from "./components/header";
import Hero from "./home/hero";
import TrustedPartner from "./home/steps";
import MovingLogos from "./home/MovingLogos";



export default function Home(){
  return(
    <>
<Header/> 
<Hero/>   
<MovingLogos/>
{/* <Services/>  */}
<TrustedPartner/> 
    </>
  )
}

// import React from 'react';

// const logos = [
//   { name: 'Health', file: 'health.jpg' },
//   { name: 'Education', file: 'education.jpg' },
//   { name: 'Tourism', file: 'tourism.jpg' },
//   { name: 'Hotel', file: 'hotel.jpg' },
//   { name: 'Bank', file: 'bank.jpg' },
//   { name: 'ICT', file: 'ict.jpg' },
//   { name: 'Construction', file: 'construction.jpg' },
//   { name: 'Transport', file: 'transport.jpg' },
//   { name: 'Law', file: 'law.jpg' },
// ];

// const MovingLogos = () => {
//   return (
//     <div className="relative w-full overflow-hidden py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//       {/* Section Title */}
//       <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-8">
//         Partner Industries
//       </h2>

//       {/* Top Row Moving Left to Right */}
//       <div className="absolute flex animate-scroll-left-to-right whitespace-nowrap">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={`top-${index}`}
//             className="flex flex-col items-center mx-6 sm:mx-8"
//           >
//             <img
//               src={`/images/${logo.file}`}
//               alt={logo.name}
//               className="h-16 sm:h-24 w-16 sm:w-24 object-contain rounded-full shadow-lg"
//             />
//             <p className="text-white mt-2 text-sm sm:text-base font-medium">
//               {logo.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Row Moving Right to Left */}
//       <div className="absolute flex animate-scroll-right-to-left whitespace-nowrap bottom-0">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={`bottom-${index}`}
//             className="flex flex-col items-center mx-6 sm:mx-8"
//           >
//             <img
//               src={`/images/${logo.file}`}
//               alt={logo.name}
//               className="h-16 sm:h-24 w-16 sm:w-24 object-contain rounded-full shadow-lg"
//             />
//             <p className="text-white mt-2 text-sm sm:text-base font-medium">
//               {logo.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovingLogos;