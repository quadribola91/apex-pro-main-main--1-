import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ICONS
import {
  FaBriefcase,
  FaUserTie,
  FaChartLine,
  FaBalanceScale,
  FaHandshake,
} from "react-icons/fa";

const whyUsData = [
  {
    key: "experience",
    title: "Proven Experience, Focused Practice",
    desc: "Our firm is led by senior professionals with decades of hands-on experience in audit, tax, corporate finance, and advisory services.",
    icon: <FaBriefcase />,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    key: "partner",
    title: "Senior-Level Expertise",
    desc: "Every engagement is led by a senior consultant who understands the regulatory landscape and risk profile of your business.",
    icon: <FaUserTie />,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    key: "technical",
    title: "Technical Rigor with Commercial Insight",
    desc: "We apply recognised professional standards while ensuring our advice remains practical and aligned with real business conditions.",
    icon: <FaChartLine />,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    key: "independence",
    title: "Independence and Objectivity",
    desc: "Our work is anchored in independence, evidence, and professional judgement to strengthen governance and transparency.",
    icon: <FaBalanceScale />,
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    key: "commitment",
    title: "Commitment to Long-Term Relationships",
    desc: "We see every engagement as the start of a long-term partnership supporting sustainable growth and resilience.",
    icon: <FaHandshake />,
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-950">
      {/* MODERN BACKGROUND DESIGN */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[4px] text-blue-300 font-medium mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Abax Professional Services
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the difference through expertise, integrity, and a
            client-focused approach built for sustainable business success.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {whyUsData.map((item) => (
            <SwiperSlide key={item.key}>
              <div
                className="
                  group
                  relative
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  p-7
                  min-h-[290px]
                  flex flex-col
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-white/20
                  hover:shadow-2xl
                "
              >
                {/* subtle glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* ICON */}
                <div
                  className={`
                    relative w-16 h-16 flex items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br ${item.gradient}
                    text-white text-2xl mb-6
                    shadow-lg
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                  `}
                >
                  <span className="absolute inset-0 rounded-2xl bg-white/10 blur-md"></span>
                  <span className="relative z-10">{item.icon}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}