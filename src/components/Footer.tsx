function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black dark:text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Gurukul Research Foundation delivers exceptional web development,
            graphic design, machine learning, AI, and data analysis services by
            creating stunning websites, captivating visuals, and intelligent
            solutions.
          </p>
        </div>
        <div>
          <h2 className="text-black dark:text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black dark:text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col">
            <a
              href="https://linkedin.com/company/gurukul-foundation-ism"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Gurukul_Found"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="mailto:gurukulfoundationism@gmail.com"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Mail
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-black dark:text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Maharashtra, India</p>
          <p>Nagpur Reasearch Center</p>
          <p>Email: gurukulfoundationism@gmail.com</p>
          <p>Phone: +91 77729 69347</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Gurukul Research Foundation. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
