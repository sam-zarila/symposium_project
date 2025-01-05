'use client';

import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    sector: "",
    phone: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    termsError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type,  } = e.target;
    setFormData({
      ...formData,
    //   [name]: type === "checkbox" ?  : value,
    });

    if (name === "password" || name === "confirmPassword") {
      setErrors({
        ...errors,
        passwordMismatch: formData.password !== formData.confirmPassword,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for errors
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, passwordMismatch: true });
      return;
    }

    if (!formData.termsAccepted) {
      setErrors({ ...errors, termsError: true });
      return;
    }

    setErrors({ passwordMismatch: false, termsError: false });

    // Submit form logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-12 px-6 ">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Register for the Online Auditing System
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="sam zarila"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="zarilasam99@gmail.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="********"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="********"
            />
            {errors.passwordMismatch && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match!
              </p>
            )}
          </div>

          {/* Organization */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organization/Business Name
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Liwonde Private hospital"
            />
          </div>

          {/* Sector */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sector
            </label>
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
            >
              <option value="" disabled>
                Select your sector
              </option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Law">Law</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="+265 899 622 111"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a
                href="#"
                className="text-green-500 hover:underline"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.termsError && (
            <p className="text-red-500 text-sm">
              You must accept the terms and conditions.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
