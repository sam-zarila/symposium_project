'use client'

import { useState } from "react";

const faqData = [
  {
    question: "What is the Online Auditing System?",
    answer:
      "The Online Auditing System is a web-based platform designed to help businesses track their financial health, performance, and budget predictions in real-time. It offers automated evaluations and actionable insights for informed decision-making.",
  },
  {
    question: "Who can use the Online Auditing System?",
    answer:
      "The system is designed for businesses across various sectors, including finance, education, healthcare, hospitality, law, and more. It's tailored to help organizations optimize operations and improve profitability through data-driven insights.",
  },
  {
    question: "How does the system track financial performance?",
    answer:
      "The system provides real-time tracking of income, expenditures, and profits. It integrates financial data to offer actionable recommendations for improving profitability and avoiding financial setbacks.",
  },
 
  {
    question: "How does the system help with budgeting and forecasting?",
    answer:
      "The system uses historical data and market trends to predict future budgets, enabling businesses to plan more effectively and allocate resources in a way that optimizes financial performance.",
  },
  {
    question: "What kind of reports does the system generate?",
    answer:
      "The system generates detailed financial reports, performance evaluations, expenditure breakdowns, and forecasting models. These reports help businesses make strategic decisions based on real-time data.",
  },
  {
    question: "Does the system integrate with other tools?",
    answer:
      "Yes, the system integrates with Power BI for advanced data visualizations and external APIs for additional financial insights, stock exchange data, and currency conversion.",
  },
  {
    question: "Is the system secure?",
    answer:
      "Absolutely. The system uses JWT authentication for secure login and data protection, ensuring that sensitive financial information is kept safe and only accessible to authorized users.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-green-600 text-center text-lg">
          Get answers to the most common questions about our Online Auditing
          System and its features.
        </p>

        <div className="mt-10 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-green-900 shadow-md rounded-md overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="
                text-white
                text-lg font-medium hover:text-black" >{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="bg-white p-4 border-t border-gray-200">
                  <p className=" text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
