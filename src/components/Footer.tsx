import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Footer() {
  const footerLinks = {
    product: [
      // { label: "Features", path: "/" },
      //  { label: "Pricing", path: "/" },
      { label: "Roadmap", path: "/roadmap" },
      //  { label: "Updates", path: "/resources" },
    ],
    company: [
      { label: "About", path: "/about" },
      // { label: "Blog", path: "/resources" },
      // { label: "Careers", path: "/" },
      // { label: "Contact", path: "/" },
    ],
    // resources: [
    // { label: "Documentation", path: "/resources" },
    //  { label: "Guides", path: "/resources" },
    //  { label: "Case Studies", path: "/resources" },
    //  { label: "Community", path: "/" },
    // ],
    //  legal: [
    //    { label: "Privacy", path: "/" },
    //   { label: "Terms", path: "/" },
    //   { label: "Security", path: "/" },
    //  ],
  };

  return (
    <footer
      id="footer"
      className="bg-[#1A1A1A] text-white py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <motion.div
                className="mb-4 cursor-pointer"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#2D70C9]">Ungraded</span>
                <span className="text-white"> AI</span>
              </motion.div>
            </Link>
            <p
              className="text-gray-400 mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ethical AI for Education
            </p>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Building technology that teachers can trust — because we're
              educators first.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: "600" }}
            >
              Product
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <motion.span
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      style={{ fontFamily: "var(--font-inter)" }}
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: "600" }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <motion.span
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      style={{ fontFamily: "var(--font-inter)" }}
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: "600" }}
            >
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <motion.span
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      style={{ fontFamily: "var(--font-inter)" }}
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Legal */}
          {/* <div>
            <h3
              className="text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: "600" }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <motion.span
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      style={{ fontFamily: "var(--font-inter)" }}
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </motion.div>

        <motion.div
          className="border-t border-gray-700 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p
            className="text-gray-400 text-center text-sm sm:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © 2025 Ungraded AI · Vancouver · Bangalore
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
