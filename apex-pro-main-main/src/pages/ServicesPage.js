// ===============================
// src/pages/ServicesPage.js
// ===============================

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../components/ServicesData";
import heroImage from "../assets/Abaxps9.webp";
import CallToAction from "./CallToAction";

const AccordionSection = ({ section, isOpen, onClick }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-white hover:bg-white/10 transition"
    >
      {section.title}
      <span
        className={`text-lg transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ⌄
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6">
            <ul className="space-y-3 text-gray-300">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServiceCard = ({ service, active, setActive }) => {
  const Icon = service.icon;
  const [openSection, setOpenSection] = useState(null);
  const isActive = active === service.id;

  return (
    <motion.div
      layout
      transition={{ duration: 0.35 }}
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl ${
        isActive ? "shadow-2xl shadow-yellow-500/10" : ""
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-yellow-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative p-8 flex gap-6">
        <div className="relative">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-500 to-yellow-400 text-white text-2xl shadow-lg">
            <Icon />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white">
            {service.title}
          </h3>

          <p className="text-gray-300 mt-2 leading-relaxed">
            {service.shortDesc}
          </p>

          <button
            onClick={() => {
              setActive(isActive ? null : service.id);
              setOpenSection(null);
            }}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-200 transition"
          >
            {isActive ? "Collapse Details" : "Explore Service →"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-8 pb-8 pt-2 space-y-4"
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
      <div className="overflow-x-hidden bg-slate-950 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[140px] rounded-full" />
          <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] bg-yellow-400/15 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-300/10 blur-[180px] rounded-full" />
        </div>

        <section className="relative w-full h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Our Professional Services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/40" />

          <div className="relative text-center px-6 max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
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

        <section className="relative py-24">
          <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-10">
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