import React from "react";

export default function Home() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-full md:w-1/4 h-16 md:h-full flex md:flex-col items-center md:items-start md:justify-start">
          <div className="hidden md:flex w-full justify-center py-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <nav className="flex md:flex-col justify-around md:justify-start w-full">
            <a
              href="#profile"
              className="block py-2 px-4 hover:bg-gray-700 w-full text-center md:text-left"
            >
              Profile
            </a>
            <a
              href="#settings"
              className="block py-2 px-4 hover:bg-gray-700 w-full text-center md:text-left"
            >
              Settings
            </a>
            <a
              href="#logout"
              className="block py-2 px-4 hover:bg-gray-700 w-full text-center md:text-left"
            >
              Logout
            </a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <header className="text-center mb-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="text-gray-600">Welcome to the Online Auditing System. Below are the key functionalities available to you as an admin:</p>
          </header>
  
          {/* Functionality Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Financial Monitoring */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Real-Time Financial Monitoring</h3>
              <p className="text-gray-600 mt-2">
                Track and monitor financial transactions, income, expenditures, and profits in real-time across different departments or projects.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start
              </button>
            </div>
  
            {/* Card 2 - Performance Evaluation */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Performance Evaluation</h3>
              <p className="text-gray-600 mt-2">
                Evaluate performance across various teams or sectors. Access detailed reports that help you make informed decisions.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start
              </button>
            </div>
  
            {/* Card 3 - Budget Prediction */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Budget Prediction</h3>
              <p className="text-gray-600 mt-2">
                Predict upcoming budgets using historical data and trends. Make future planning more efficient and accurate.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start
              </button>
            </div>
  
            {/* Card 4 - Data Visualization */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Expenditure Analysis</h3>
              <p className="text-gray-600 mt-2">
                Use interactive and visual charts and graphs to make sense of complex data, improving your decision-making.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start
              </button>
            </div>
  
            {/* Card 5 - Actionable Insights */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Actionable Insights & Currency Exchange</h3>
              <p className="text-gray-600 mt-2">
                Receive recommendations on how to improve operational efficiency, based on current trends and metrics.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start
              </button>
            </div>
  
            {/* Card 6 - User Management */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold">User Management</h3>
              <p className="text-gray-600 mt-2">
                Manage users' roles and permissions. View activity logs to track user actions and ensure compliance.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                start
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
  