// src/pages/ServicesPage.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../components/ServicesData";
import heroImage from "../assets/Abaxps9.webp";
import CallToAction from "./CallToAction";

// Accordion
const AccordionSection = ({ section, isOpen, onClick }) => (
  <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
    >
      {section.title}
      <span
        className={`text-lg transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ⌄
      </span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-5"
        >
          <ul className="space-y-2 text-gray-600">
            {section.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Service Card
const ServiceCard = ({ service, active, setActive }) => {
  const Icon = service.icon;
  const [openSection, setOpenSection] = useState(null);

  const isActive = active === service.id;

  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      className={`
        group relative rounded-2xl border 
        ${isActive ? "border-blue-200 shadow-xl" : "border-gray-200"}
        bg-white/90 backdrop-blur-md
        transition-all duration-300
      `}
    >
      {/* HEADER */}
      <div className="p-8 flex gap-6">
        {/* ICON */}
        <div className="relative">
          <div
            className="
              w-16 h-16 flex items-center justify-center
              rounded-xl
              bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600
              text-white text-2xl
              shadow-lg
              transition-all duration-300
              group-hover:scale-105
            "
          >
            <Icon />
          </div>

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-xl"></div>
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">
            {service.title}
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            {service.shortDesc}
          </p>

          <button
            onClick={() => {
              setActive(isActive ? null : service.id);
              setOpenSection(null);
            }}
            className="
              mt-5 inline-flex items-center gap-2
              text-sm font-semibold
              text-blue-700
              hover:text-blue-900
              transition
            "
          >
            {isActive ? "Close Details" : "View Details →"}
          </button>
        </div>
      </div>

      {/* EXPANDED CONTENT */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="px-8 pb-8 pt-2 space-y-4 bg-gray-50/70"
          >
            {service.sections.map((section, idx) => (
              <AccordionSection
                key={idx}
                section={section}
                isOpen={openSection === idx}
                onClick={() =>
                  setOpenSection(openSection === idx ? null : idx)
                }
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <div className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative w-full h-[60vh] min-h-[460px] flex items-center justify-center">
          <img
            src={heroImage}
            alt="Our Professional Services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-800/40"></div>

          {/* Content */}
          <div className="relative text-center px-6 max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Professional Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-200 leading-relaxed"
            >
              Structured advisory, audit, and compliance services designed to
              strengthen governance, improve performance, and support
              sustainable growth.
            </motion.p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={activeService}
                setActive={setActiveService}
              />
            ))}
          </div>
        </section>
      </div>

      <CallToAction />
    </>
  );
}