import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import footlogo from "../assets/ABAX logo_page-0001.jpg";
import msiBadge from "../assets/certifications/MSIMember_Logo_PNG.png";

export default function FooterSection() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND DESIGN */}
      <div className="absolute inset-0 z-0">
        {/* Glow blobs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* subtle lines */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* LOGO + DESCRIPTION */}
          <div>
            <img
              src={footlogo}
              alt="Abax Logo"
              className="max-w-[170px] mb-6 rounded-lg"
            />

            <p className="text-gray-300 leading-relaxed mb-6">
              Providing professional services to businesses and individuals
              through integrity, excellence, and a strong client-first
              approach.
            </p>

            <a
              href="https://www.linkedin.com/company/abax-professional-services"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                w-10 h-10 rounded-full
                bg-white/10 border border-white/10
                hover:bg-blue-600
                transition-all duration-300
              "
            >
              <FaLinkedinIn size={15} className="text-white" />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-blue-300 text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/servicepage"
                  className="hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Blogs
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/FAQs" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-blue-300 text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Audit & Assurance</li>
              <li>Accountancy & Financial Reporting</li>
              <li>Tax Advisory & Compliance</li>
              <li>Advisory Services</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-blue-300 text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>No. 2, Ibeju Lekki Street, Ikoyi, Lagos</li>
              <li>+234-911-010-8791</li>
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="text-blue-300 text-lg font-semibold mb-5">
              Certifications
            </h3>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <img
                src={msiBadge}
                alt="MSI Certified Partner"
                className="h-12 object-contain mb-3"
              />

              <p className="text-sm text-gray-300">
                Verified professional certification and regulatory compliance.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {currentYear} Abax Professional Services. All Rights Reserved.
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Subscription Successful
            </h2>

            <p className="text-gray-600 mb-6">
              Thank you for subscribing to our newsletter!
            </p>

            <button
              onClick={closeModal}
              className="
                px-6 py-3 rounded-lg
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold
                hover:scale-105
                transition-all duration-300
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}