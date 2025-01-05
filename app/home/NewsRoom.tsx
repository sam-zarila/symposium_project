import React from "react";

const news = [
  {
    id: 1,
    type: "Announcement",
    title: "Holiday Sale Announcement",
    description:
      "Our biggest holiday sale is starting on December 15th. Enjoy discounts of up to 50% on selected items! Don’t miss out on this fantastic opportunity to save.",
    date: "December 10, 2024",
    icon: "📢",
  },
  {
    id: 2,
    type: "Upcoming Event",
    title: "Live Webinar: Market Trends 2025",
    description:
      "Join us for an exclusive webinar on January 5th to discuss the latest market trends and growth opportunities. Register now to secure your spot.",
    date: "January 5, 2025",
    icon: "📅",
  },
  {
    id: 3,
    type: "Update",
    title: "New Products Launch",
    description:
      "We’re excited to announce the launch of our new eco-friendly product line. Available starting January 10th! Explore sustainable and innovative solutions.",
    date: "January 10, 2025",
    icon: "🆕",
  },
];

const MarketNewsSection = () => {
  return (
    <section className="bg-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center">Market News</h2>
        <p className="mt-4 text-green-600 text-center text-lg">
          Get the latest updates, announcements, and upcoming events from the market.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="ml-4 text-sm uppercase tracking-wider text-green-300 font-medium">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-green-600">{item.title}</h3>
                <p className="mt-3 text-gray-400 line-clamp-3">
                  {item.description}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  <span className="font-medium">Date:</span> {item.date}
                </p>
                <div className="mt-auto">
                  <a
                    href={`/news/${item.id}`}
                    className="inline-block mt-6 px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketNewsSection;
