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
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-3">
          Why Abax Professional Services
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the difference through expertise, integrity, and a
          client-focused approach.
        </p>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
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
                  bg-white 
                  border border-gray-200 
                  rounded-xl 
                  p-6 
                  min-h-[260px] 
                  flex flex-col 
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-blue-100
                  hover:border-transparent
                  hover:-translate-y-2
                "
              >
                {/* ICON */}
                <div
                  className={`
                    relative w-14 h-14 flex items-center justify-center 
                    rounded-xl 
                    bg-gradient-to-br ${item.gradient}
                    text-white text-2xl mb-5
                    shadow-md
                    transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-3
                  `}
                >
                  {/* Glow */}
                  <span className="absolute inset-0 rounded-xl bg-white opacity-10 blur-md group-hover:opacity-30 transition-all duration-300"></span>

                  {/* Icon */}
                  <span className="relative z-10">{item.icon}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed">
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