import React, { useState } from "react";
import Img1 from "../assets/teamimage1.jpg";
import Img2 from "../assets/teamimage2.jpg";
import Img3 from "../assets/teams.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const images = [Img1, Img2, Img3];
  const [index, setIndex] = useState(0);

  const handleHover = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            About Abax Professional Services
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Abax Professional Services is a firm of Chartered Accountants and
            Business Advisors providing Audit and Assurance, Tax, Financial and
            Management Advisory Services to growing and established
            organisations. Built on a foundation of deep professional expertise
            and years of hands-on practice, Abax Professional Services
            represents the future of dependable, thoughtful, and high-quality
            professionals.
          </p>

          <Link to="/about">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* IMAGE HOVER SLIDER */}
        <div
          onMouseEnter={handleHover}
          className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt="Team"
              className="w-full h-full object-cover"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}