import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import heroImage from "../assets/splash4.jpg";
import {
  FaBalanceScale,
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: "audit",
    title: "Audit & Assurance",
    icon: <FaBalanceScale />,
    desc:
      "Delivering confidence, credibility, and clarity through independent, high-quality assurance engagements.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #0747d9)",
  },
  {
    id: "accountancy",
    title: "Financial Reporting & Compliance Consulting",
    icon: <FaCalculator />,
    desc:
      "Strengthening transparency, accuracy, and trust in every aspect of your financial reporting.",
    color: "#0747d9",
    hoverBg: "linear-gradient(135deg, #0747d9, #0b63ff)",
  },
  {
    id: "tax",
    title: "Tax Management & Advisory",
    icon: <FaFileInvoiceDollar />,
    desc:
      "Helping organizations navigate complexity, optimize tax positions, and stay ahead of regulatory change.",
    color: "#ffb703",
    hoverBg: "linear-gradient(135deg, #ffb703, #f59e0b)",
  },
  {
    id: "grc",
    title: "Governance, Risk & Internal Control (GRC)",
    icon: <FaChartLine />,
    desc:
      "Building resilient organizations through strong governance and effective controls.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #ffb703)",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="w-full py-20 md:py-28 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-3">
            Our Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Professional Services Built for Modern Businesses
          </h2>

          <p className="text-gray-600 max-w-xl mb-10 text-base md:text-lg leading-relaxed">
            Comprehensive financial, governance, tax, and advisory solutions
            designed to strengthen compliance, improve reporting accuracy, and
            drive sustainable organizational performance.
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {services.map((s) => {
              const isActive = activeCard === s.id;

              return (
                <SwiperSlide key={s.id}>
                  <Tilt
                    glareEnable={false}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    scale={1.02}
                    transitionSpeed={1500}
                    onEnter={() => setActiveCard(s.id)}
                    onLeave={() => setActiveCard(null)}
                  >
                    <div
                      className="rounded-3xl p-6 shadow-lg border border-gray-100 cursor-pointer h-full flex flex-col transition-all duration-500"
                      style={
                        isActive
                          ? { background: s.hoverBg, color: "#fff" }
                          : { background: "#ffffff" }
                      }
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-500"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.18)"
                            : "rgba(11,99,255,0.08)",
                          color: isActive ? "#fff" : s.color,
                        }}
                      >
                        {s.icon}
                      </div>

                      <h3
                        className="text-lg font-semibold mb-3"
                        style={{ color: isActive ? "#fff" : s.color }}
                      >
                        {s.title}
                      </h3>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: isActive ? "#fff" : "#475569" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </Tilt>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        {/* RIGHT IMAGE WITH MODERN HOVER SCALE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 to-yellow-400/20 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/40 bg-white">
              <img
                src={heroImage}
                alt="Professional Services"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
                fetchpriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
