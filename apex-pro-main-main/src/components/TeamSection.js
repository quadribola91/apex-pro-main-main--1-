import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import teamData from "./teamdata";

export default function TeamSection() {
  const principal = teamData[0];
  const others = teamData.slice(1);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="our-team"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-950"
    >
      {/* MODERN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-300 font-medium mb-3">
            Leadership Excellence
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Leadership Team
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Meet the professionals driving excellence, innovation, and
            sustainable strategic growth.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* PRINCIPAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className={`w-full max-w-md rounded-3xl p-8
              bg-white/10 backdrop-blur-xl border border-white/10
              shadow-2xl transition-all duration-500
              ${
                hovered === "principal"
                  ? "scale-[1.02] border-white/20"
                  : ""
              }`}
              onMouseEnter={() => setHovered("principal")}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-400 mb-6 mx-auto lg:mx-0 shadow-lg">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* NAME */}
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left">
                {principal.name}
              </h3>

              {/* ROLE */}
              <p className="text-blue-300 font-semibold text-sm sm:text-base mt-2 text-center lg:text-left">
                {principal.role}
              </p>

              {/* BIO */}
              <p className="text-gray-300 text-sm sm:text-base mt-5 leading-relaxed line-clamp-6 text-center lg:text-left">
                {principal.shortBio}
              </p>
            </div>
          </motion.div>

          {/* TEAM SWIPER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {others.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={`h-80 rounded-2xl p-6
                    bg-white/10 backdrop-blur-xl border border-white/10
                    flex flex-col items-center text-center
                    shadow-xl transition-all duration-500
                    ${
                      hovered === idx
                        ? "scale-[1.03] border-white/20"
                        : ""
                    }`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* IMAGE */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 mb-4 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* NAME */}
                    <h4 className="text-lg font-semibold text-white">
                      {member.name}
                    </h4>

                    {/* ROLE */}
                    <p className="text-blue-300 text-sm mt-2">
                      {member.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <Link to="team" className="inline-block">
            <span
              className="
                inline-block
                px-10 py-4
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                shadow-xl
                hover:scale-105
                transition-all duration-300
              "
            >
              Meet The Team
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}