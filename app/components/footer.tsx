import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-green-400  text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                The Online Auditing System is dedicated to providing advanced
                performance tracking, real-time insights, and forecasting tools
                for businesses to thrive.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="
              text-green-400
              text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="
                    
                    text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="  text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="
                    
                    text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-green-400  text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400">
                <strong>Email:</strong> support@audit-system.com
              </p>
              <p className="text-sm text-gray-400">
                <strong>Phone:</strong> +265 888 456 7890
              </p>
              <p className="text-sm text-gray-400">
                <strong>Address:</strong> Zomba, Malawi
              </p>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-green-400  text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaTwitter className="text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaLinkedinIn className="text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Online Auditing System. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  