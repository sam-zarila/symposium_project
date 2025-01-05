import React from "react";

const services = [
  {
    title: "Real-Time Financial Monitoring",
    description:
      "Track income, expenditures, and profits in real-time, ensuring your business stays on top of its financial health.",
    icon: "💰",
  },
  {
    title: "Performance Evaluation",
    description:
      "Evaluate employee productivity, customer satisfaction, and operational efficiency across departments.",
    icon: "📊",
  },
  {
    title: "Budget Prediction",
    description:
      "Forecast budgets based on historical data and market trends to ensure smooth financial planning.",
    icon: "📅",
  },
  {
    title: "Actionable Insights",
    description:
      "Receive tailored recommendations to address areas of underperformance and boost business growth.",
    icon: "💡",
  },
  {
    title: "Interactive Data Visualization",
    description:
      "Visualize complex data through interactive dashboards, making decision-making quick and effective.",
    icon: "📈",
  },
];

const ServicesSection = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-400">
          Our Services
        </h2>
        <p className="mt-4 text-green-600">
          Explore our powerful tools designed to elevate your business to the
          next level.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-400 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-blue-500">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-green-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
