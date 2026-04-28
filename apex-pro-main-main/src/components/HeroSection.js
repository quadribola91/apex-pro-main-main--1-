import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/Abaxps1.webp";
import img2 from "../assets/Abaxps2.webp";
import img3 from "../assets/Abaxps3.webp";

const slides = [
  {
    image: img1,
    title: "Trusted Insight & Sustainable Growth",
    text:
      "We combine deep professional expertise with practical business experience to deliver solutions that are technically sound, commercially relevant, and built for long-term success.",
  },
  {
    image: img2,
    title: "Professional Excellence & Strategic Advisory",
    text:
      "Delivering audit, tax, and advisory services with precision, integrity, and measurable business outcomes for ambitious organisations.",
  },
  {
    image: img3,
    title: "Building Governance & Financial Strength",
    text:
      "We help organisations strengthen governance, manage risk effectively, and unlock sustainable financial performance with confidence.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedText, setTypedText] = useState("");
  const typingInterval = useRef(null);

  const typingSpeed = 28;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    clearInterval(typingInterval.current);

    const fullTitle = slides[index].title;
    const fullText = slides[index].text;

    setTypedTitle("");
    setTypedText("");

    let currentTitle = "";
    let currentText = "";
    let charIndex = 0;
    let typingTitle = true;

    typingInterval.current = setInterval(() => {
      if (typingTitle) {
        currentTitle += fullTitle.charAt(charIndex);
        setTypedTitle(currentTitle);
        charIndex++;

        if (charIndex === fullTitle.length) {
          typingTitle = false;
          charIndex = 0;
        }
      } else {
        currentText += fullText.charAt(charIndex);
        setTypedText(currentText);
        charIndex++;

        if (charIndex === fullText.length) {
          clearInterval(typingInterval.current);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval.current);
  }, [index]);

  return (
    <section className="relative w-full min-h-[88vh] bg-white overflow-hidden font-sans">
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].image}
              alt={slides[index].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main content with proper side spacing */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-[88vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-brandYellow font-semibold tracking-[0.18em] uppercase text-sm mb-5">
              Abax Professional Services
            </p>

            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {typedTitle}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
              {typedText}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/servicepage"
                className="px-8 py-4 rounded-full bg-brandYellow text-black font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Explore Our Services
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-white/70 text-white font-semibold hover:bg-white hover:text-black transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Trusted by Growing Businesses
              </h3>

              <p className="text-gray-200 leading-relaxed mb-6">
                Delivering audit, tax, advisory, and financial reporting solutions with professionalism, precision, and measurable impact.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Client-Focused Delivery</span>
                  <span>100%</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Strategic Advisory</span>
                  <span>Premium</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional Integrity</span>
                  <span>Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
