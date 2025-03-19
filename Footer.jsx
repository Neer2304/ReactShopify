export const Footers = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <footer className="container mx-auto px-6">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li>
                <p className="text-sm">Contact No.</p>
                <a href="tel:+931320...." className="text-blue-400 hover:text-blue-600">
                  931320....
                </a>
              </li>
              <li>
                <p className="text-sm">Email Address</p>
                <a
                  href="mailto:mehtaneer@gmail.com"
                  className="text-blue-400 hover:text-blue-600"
                >
                  mehtaneer@gmail.com
                </a>
              </li>
              <li>
                <p className="text-sm">Address</p>
                <p className="text-gray-400">Ahmedabad</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-blue-400 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-sm text-blue-400 hover:text-blue-600">
                  Shop
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-blue-400 hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-sm text-blue-400 hover:text-blue-600">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Sign up for the latest news, offers, and styles.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full mt-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>&copy; 2025 Neer Mehta. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
