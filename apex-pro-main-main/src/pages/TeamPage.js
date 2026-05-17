import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImg from "../assets/Abaxps7.webp";
import OlapejuImage from "../assets/Madam Sofowora.webp";
import AyoImage from "../assets/MsAlamutu.jpg";
import img3 from "../assets/Mr FusiAkinkungbe.jpg";
import img4 from "../assets/Babafunke .jpg";
import img5 from "../assets/Anthony Ebele.jpg";
import img6 from "../assets/Dare Osoneye.JPG";
import CallToAction from "./CallToAction";

const principal = {
  name: "Olapeju Sofowora B.SC, FCA, FCIT",
  designation: "Principal Consultant",
  image: OlapejuImage,
  bio: `Olapeju E. Sofowora is the Principal Consultant of ABAX Professional Services, bringing about 40 years of experience across audit, tax, corporate finance, and professional advisory services. She began her career at Coopers & Lybrand (now PricewaterhouseCoopers), later held senior roles in the banking sector, and went on to establish and lead multiple professional services practices, including serving as Partner and Managing Partner at Abax-OOSA Professionals for over 17 years. Her passion for quality professional services led her to establish Binary Consulting Limited, a Human Resources Consulting firm specialising in recruitment, outsourcing and training for clients across different industries. Olapeju is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), a Certified Information Systems Auditor (CISA), and holds a degree in Statistics from the University of Ilorin. She has served on corporate and institutional boards, including First City Monument Bank Group, Royal Trust Assurance Limited (Merged with Crusader Insurance), Olashore International School Association, the Educational Committee of the Chartered Institute of Taxation and as an Executive Committee Member of the Money Market Association of Nigeria, and remains active in governance, compliance, and professional development initiatives.`,
};

const teamMembers = [
  {
    name: "Ayo Alamutu",
    designation: "Senior Consultant Governance and Risk",
    image: AyoImage,
    bio: `Ms. Alamutu is a Governance, Risk, Audit, Assurance, and Compliance Executive with over 30 years of experience across the UK and Nigeria. She advises Boards and senior management on enterprise risk, operational resilience, business continuity, and internal audit, supporting organisations to strengthen performance, manage disruption, and preserve value across sectors including banking, insurance, manufacturing, investment, and fintech. She is a Fellow of the Institute of Chartered Accountants of Nigeria (FICAN), a Certified Member of the Institute of Risk Management (CIRM), holds a Certificate in Risk Governance from the DCRO Institute, and currently serves as Vice Chair of the IRM Nigeria Regional Group. She is also an Information Systems Auditor, Project Management Professional, and a Board member of the Institute of Internal Auditors.`,
  },
  {
    name: "Babafunke Ajibade",
    designation: "Senior Consultant Audit and Assurance",
    image: img4,
    bio: `A multi-skilled Governance, Financial Accounts, Risk, Audit, Assurance, and Compliance Executive with decades of progressive experience.`,
  },
  {
    name: "Fusi Akinkugbe",
    designation: "Senior Consultant Financial Services",
    image: img3,
    bio: `Seasoned finance and assurance professional with nearly four decades of experience.`,
  },
  {
    name: "Anthony Ebele",
    designation: "Head, Tax Management and Advisory",
    image: img5,
    bio: `Results-driven tax professional with strong expertise in tax compliance and advisory.`,
  },
  {
    name: "Dare Osoneye",
    designation: "Head, Human Resource Consulting",
    image: img6,
    bio: `Dedicated Human Resource professional with years of experience in organisational development.`,
  },
];

export default function TeamPage() {
  const [view, setView] = useState("principal");
  const [activeMember, setActiveMember] = useState(null);

  return (
    <>
      <div className="bg-slate-950 min-h-screen overflow-hidden text-white">

        {/* HERO */}
        <section className="relative min-h-[55vh] flex items-center justify-center text-center">
          <img
            src={heroImg}
            alt="Team Background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-blue-900/40" />

          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our People
            </h1>
            <p className="text-gray-300 mt-4 text-lg">
              Meet the team behind Abax Professional Services
            </p>
          </div>
        </section>

        {/* TOGGLE */}
        <div className="flex justify-center py-10 px-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1 flex gap-2">
            <button
              onClick={() => setView("principal")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                view === "principal"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300"
              }`}
            >
              Principal Consultant
            </button>

            <button
              onClick={() => setView("team")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                view === "team"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300"
              }`}
            >
              Team Members
            </button>
          </div>
        </div>

        {/* PRINCIPAL */}
        {view === "principal" && (
          <section className="max-w-7xl mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-2 gap-14 items-start bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

              {/* IMAGE */}
              <motion.div whileHover={{ scale: 1.03 }}>
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-[520px] object-cover object-top rounded-2xl"
                />
              </motion.div>

              {/* CONTENT */}
              <div>

                {/* NAME + TITLE SAME LINE */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {principal.name}
                  </h2>

                  <span className="text-blue-400 font-semibold text-sm whitespace-nowrap">
                    {principal.designation}
                  </span>
                </div>

                {/* BIO (SINGLE CLEAN BLOCK) */}
                <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                  {principal.bio}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* TEAM MEMBERS */}
        {view === "team" && (
          <section className="max-w-7xl mx-auto px-6 pb-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {teamMembers.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveMember(m)}
                  className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition"
                >

                  {/* TOP ROW (IMAGE + TEXT SAME LINE) */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold truncate">
                        {m.name}
                      </h3>

                      <p className="text-blue-400 text-xs truncate">
                        {m.designation}
                      </p>
                    </div>
                  </div>

                  {/* BIO PREVIEW (OPTIONAL CLEAN BLOCK) */}
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {m.bio}
                  </p>

                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* SIDE PANEL */}
        <AnimatePresence>
          {activeMember && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-slate-950 border-l border-white/10 z-50"
            >
              <div className="p-6 border-b border-white/10 flex justify-between">
                <h2 className="font-bold">Profile</h2>
                <button onClick={() => setActiveMember(null)}>✕</button>
              </div>

              <div className="p-6 overflow-y-auto">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full rounded-xl mb-6"
                />

                <h2 className="text-2xl font-bold">
                  {activeMember.name}
                </h2>

                <p className="text-blue-400 mb-4">
                  {activeMember.designation}
                </p>

                <p className="text-gray-300 leading-relaxed break-words">
                  {activeMember.bio}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CallToAction />
    </>
  );
}