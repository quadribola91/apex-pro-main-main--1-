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

  const typingSpeed = 25;

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  /* TYPEWRITER EFFECT */
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
    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* BACKGROUND SLIDER */}
<div className="absolute inset-0">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1.06 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      <img
        src={slides[index].image}
        alt={slides[index].title}
        className="
          w-full
          h-full
          object-cover
          object-center
          scale-100
          brightness-125
          contrast-110
          saturate-130
          transition-all
          duration-700
        "
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />

      {/* SUBTLE DEPTH */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* BLUE GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full" />

      {/* GOLD GLOW */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/8 blur-[150px] rounded-full" />
    </motion.div>
  </AnimatePresence>
</div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* LABEL */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-yellow-400/20 bg-white/5 backdrop-blur-xl mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <p className="text-yellow-300 font-medium tracking-[0.18em] uppercase text-xs">
                Abax Professional Services
              </p>
            </div>

            {/* TITLE */}
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              {typedTitle}
              <span className="animate-pulse text-yellow-400">|</span>
            </h1>

            {/* TEXT */}
            <p className="mt-8 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
              {typedText}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/servicepage"
                className="
                  px-8 py-4 rounded-full
                  bg-gradient-to-r from-yellow-400 to-amber-300
                  text-black font-semibold
                  shadow-xl
                  hover:scale-105
                  transition duration-300
                "
              >
                Explore Our Services
              </Link>

              <Link
                to="/contact"
                className="
                  px-8 py-4 rounded-full
                  border border-white/40
                  text-white font-semibold
                  backdrop-blur-xl
                  hover:bg-white hover:text-black
                  transition duration-300
                "
              >
                Contact Us
              </Link>
            </div>

            {/* TRUST STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6 text-white">
              <div>
                <h3 className="text-3xl font-bold text-yellow-300">40+</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Years Combined Expertise
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-300">100%</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Client-Focused Delivery
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-300">Trusted</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Professional Integrity
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FLOATING CARD */}
          <div className="hidden lg:flex justify-end">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
                relative
                bg-white/8
                backdrop-blur-2xl
                border border-white/10
                rounded-3xl
                p-8
                shadow-2xl
                max-w-md
                text-white
                overflow-hidden
              "
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-yellow-400/10 blur-[100px] rounded-full" />

              <div className="relative">
                <p className="text-yellow-300 text-sm font-semibold uppercase tracking-[0.18em] mb-4">
                  Why Choose Us
                </p>

                <h3 className="text-2xl font-bold mb-5 leading-snug">
                  Trusted by Businesses That Value Precision
                </h3>

                <p className="text-gray-200 leading-relaxed mb-8">
                  Delivering audit, tax, advisory, governance, and financial
                  reporting solutions with professionalism, clarity, and
                  measurable business impact.
                </p>

                <div className="space-y-5 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Audit & Assurance</span>
                    <span className="text-yellow-300 font-medium">
                      Premium
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Strategic Advisory</span>
                    <span className="text-yellow-300 font-medium">
                      Trusted
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax & Compliance</span>
                    <span className="text-yellow-300 font-medium">
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-10 h-3 bg-yellow-400"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}