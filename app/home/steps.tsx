export default function TrustedPartner() {
    return (
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-5xl font-bold text-green-500 mb-10">
            Your <span className="text-neon">trusted</span> partner in company evaluation.
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-gray-300">
            Our streamlined registration process ensures your company gets the best evaluation services while prioritizing security and ease of use.
          </p>
          <div className="grid md:grid-cols-3 gap-12 sm:gap-6">
            {/* Step 1 */}
            <div className="bg-gray-700 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <h3 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">01.</h3>
              <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-4">
                <span className="text-green-400">Sign Up</span> your organization by providing the necessary details like company name, industry, and registration info.
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                This simple form takes only a few minutes to complete, providing you quick access to our platform.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="bg-gray-700 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <h3 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">02.</h3>
              <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-4">
                Choose the <span className="text-green-400">right services</span> tailored to your company’s audit needs, following industry best practices.
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                Our comprehensive range of auditing services ensures your company gets the best possible evaluation for long-term success.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="bg-gray-700 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <h3 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">03.</h3>
              <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-4">
                <span className="text-green-400">Confirm</span> your registration and gain immediate access to secure, insured services.
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                Once your registration is confirmed, you will have full access to our top-tier, insured services, designed to meet your exact needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  