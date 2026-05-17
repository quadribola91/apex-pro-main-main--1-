import React, { useEffect, useRef, useState } from "react";

export default function VisionMissionSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Card = ({ title, text, accent, delay }) => (
    <div
      className={`group relative flex items-center justify-center transition-all duration-1000
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: delay }}
    >
      {/* OUTER GLOW */}
      <div
        className={`absolute w-[380px] h-[380px] rounded-full blur-[90px] opacity-30
        bg-gradient-to-br ${accent}`}
      />

      {/* GLASS CIRCLE CARD */}
      <div
        className="
          relative
          w-[320px]
          h-[320px]
          rounded-full
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-2xl
          flex flex-col
          items-center
          justify-center
          text-center
          p-10
          transition-all duration-500
          group-hover:scale-105
          group-hover:-translate-y-2
        "
      >
        {/* TOP BADGE */}
        <div
          className={`
            absolute -top-10
            w-20 h-20
            rounded-full
            flex items-center justify-center
            text-white
            text-2xl
            font-bold
            shadow-xl
            bg-gradient-to-br ${accent}
            group-hover:scale-110
            transition-all duration-500
          `}
        >
          {title === "Vision" ? "V" : "M"}
        </div>

        {/* TITLE */}
        <h3 className="text-3xl font-bold text-white mt-6 mb-4">
          {title}
        </h3>

        {/* DIVIDER */}
        <div className="w-16 h-1 rounded-full bg-white/60 mb-5 group-hover:w-24 transition-all duration-500" />

        {/* TEXT */}
        <p className="text-gray-200 text-sm leading-relaxed max-w-[240px]">
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-950"
    >
      {/* MODERN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* gradient glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div
          className={`text-center mb-24 transition-all duration-1000
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-300 font-medium mb-3">
            Our Purpose
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Vision & Mission
          </h2>

          <p className="text-gray-300 font-medium mt-5 max-w-2xl mx-auto">
            Trusted insight, strategic excellence, and sustainable
            organisational growth.
          </p>
        </div>

        {/* CIRCLES */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
          <Card
            title="Vision"
            delay="0.2s"
            accent="from-yellow-400 via-orange-400 to-amber-500"
            text="To build a resilient, high-performing professional services firm that consistently delivers measurable value and supports sustainable organisational growth."
          />

          <Card
            title="Mission"
            delay="0.4s"
            accent="from-blue-500 via-indigo-500 to-purple-500"
            text="To deliver high-quality assurance and advisory services that strengthen governance, enhance transparency, and create measurable value."
          />
        </div>
      </div>
    </section>
  );
}