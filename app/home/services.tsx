// services.tsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Theme CSS

const services = [
  {
    title: 'Real-Time Financial Monitoring',
    description:
      'The Online Auditing System provides real-time financial tracking, helping businesses stay on top of income, expenditures, and profits.',
  },
  {
    title: 'Performance Evaluation Across All Sectors',
    description:
      'Evaluates performance across employee productivity, customer satisfaction, operational efficiency, and financial performance.',
  },
  {
    title: 'Budget Prediction and Forecasting',
    description:
      'Uses historical data and market trends to predict future budgets and help businesses plan for upcoming financial needs.',
  },
  {
    title: 'Actionable Insights and Improvement Solutions',
    description:
      'Provides actionable recommendations based on performance evaluations, helping businesses make improvements quickly.',
  },
  {
    title: 'Data Visualization for Informed Decision-Making',
    description:
      'Integrates with Power BI to provide interactive visualizations, enabling business leaders to make data-driven decisions.',
  },
];

export default function Services() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Speed of autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 2 slides on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 1 slide on mobile screens
        },
      },
    ],
  };

  return (
    <section className="bg-darkBg py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-10 text-center">
          Our <span className="text-neon">Services</span>
        </h2>

        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="bg-gray-400 p-8 rounded-md text-center">
              <h3 className="text-xl font-bold text-neon mb-4">{service.title}</h3>
              <p className="text-lightGray">{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
