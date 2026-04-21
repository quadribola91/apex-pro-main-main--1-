// src/pages/TeamPage.js
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

/* ---------------- DATA ---------------- */
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
    bio: `A multi-skilled Governance, Financial Accounts, Risk, Audit, Assurance, and Compliance Executive across Private, Government and Third party (Charity) Sectors with over three decades of progressive experience across Nigeria and the United Kingdom. Her core strength lies in quality control on Assurance Audits advising Boards, Trustees and Senior Management on enterprise risk, strategy, compliance, business continuity, internal audit practice, helping organizations strengthen performance, compliance on accounting and auditing standards, sustain competitive advantage at industry level and respond proactively to disruption.`,
  },
  {
    name: "Fusi Akinkugbe",
    designation: "Senior Consultant Financial Services",
    image: img3,
    bio: `Mr. Fusi Akinkugbe is a seasoned finance and assurance professional with nearly four decades of experience spanning professional practice, corporate leadership, consulting, and the public sector.`,
  },
  {
    name: "Anthony Ebele",
    designation: "Head, Tax Management and Advisory",
    image: img5,
    bio: `Anthony Ebele is a results-driven tax professional with strong expertise in tax compliance, advisory, and regulatory reporting.`,
  },
  {
    name: "Dare Osoneye",
    designation: "Head, Human Resource Consulting",
    image: img6,
    bio: `Dare Osoneye is a dedicated Human Resource professional with years of experience in talent acquisition, employee relations, performance management and organisational development.`,
  },
];

/* ---------------- COMPONENT ---------------- */
export default function TeamPage() {
  const [view, setView] = useState("principal");
  const [activeMember, setActiveMember] = useState(null);

  return (
    <>
      <div className="bg-gray-50 min-h-screen overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[55vh] flex items-center justify-center text-center text-white">
          <img
            src={heroImg}
            alt="Team Background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/60 to-blue-800/30"></div>

          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our People
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Meet the team behind Abax Professional Services
            </p>
          </div>
        </section>

        {/* TOGGLE */}
        <div className="flex justify-center gap-4 py-10">
          <div className="bg-white shadow-md rounded-full p-1 flex">
            <button
              onClick={() => setView("principal")}
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                view === "principal"
                  ? "bg-blue-700 text-white"
                  : "text-gray-600"
              }`}
            >
              Principal Consultant
            </button>
            <button
              onClick={() => setView("team")}
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                view === "team" ? "bg-blue-700 text-white" : "text-gray-600"
              }`}
            >
              Team Members
            </button>
          </div>
        </div>

        {/* PRINCIPAL */}
        {view === "principal" && (
          <section className="max-w-6xl mx-auto px-6 pb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-10 shadow-lg rounded-2xl">
              <img
                src={principal.image}
                alt={principal.name}
                className="rounded-2xl w-full object-cover object-top shadow-md"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {principal.name}
                </h2>
                <p className="text-blue-700 font-semibold mt-2 mb-6">
                  {principal.designation}
                </p>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {principal.bio}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* TEAM */}
        {view === "team" && (
          <section className="max-w-7xl mx-auto px-6 pb-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveMember(m)}
                  className="cursor-pointer group rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-20 h-20 rounded-xl object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <p className="text-blue-700 text-sm">{m.designation}</p>
                  </div>
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
              className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-white shadow-2xl z-50 flex flex-col border-l"
            >
              <div className="p-6 border-b flex justify-between">
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
                <p className="text-blue-700 mb-4">
                  {activeMember.designation}
                </p>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed break-words">
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