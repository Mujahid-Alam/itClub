import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import TopBar from '../TopBar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';



const sectors = [
  {
    id: 1,
    image: "/logo2.png",
    sector: "Domain 01",
    title: "Beauty Parlour School Educationr",
    description:
      "Setting up institutional training facilities across rural zones focusing on advanced cosmetology, bridal grooming styles, skin therapeutics, and wellness center protocols. The core program equips aspiring women with professional tools, safety certification systems, and standardized commercial salon setup blueprints to initiate immediate local self-employment networks.",

  },
  {
    id: 2,
    image: "/logo2.png",
    sector: "Domain 02",
    title: "Digital Literacy & Computer Training",
    description:
      "Targeted training structures engineered to bridge the tech-divide for rural daughters and women. Curriculum focuses extensively on basic office computing suites, accounting software setups, remote financial transactions, and secure e-governance systems. This structure channels directly into backend operations, corporate data entry, and digital center governance roles.",

  },
    {
    id: 3,
    image: "/logo2.png",
    sector: "Domain 03",
    title: "Garment Production & Apparel Designing",
    description:
      "Industrial-grade operations focused on training women in high-capacity motorized tailoring, cutting frameworks, and modern textile patterning. By integrating traditional design motifs with industrial delivery practices, our skill hubs enable clusters of women to seamlessly manage high-volume garment supply requests, school uniforms manufacturing, and design boutiques.",

  },
    {
    id: 4,
    image: "/logo2.png",
    sector: "Domain 04",
    title: "Mother & Child Healthcare Support",
    description:
      "Empowering rural communities by building robust health delivery networks driven entirely by trained women caretakers and general nursing aids. Focus scales across structural family hygiene logging, nutritional tracking for children, primary sanitization methodologies, and maternal emergency triage infrastructure, effectively strengthening village-level medical models.",

  },

];

const SectorCard = ({ item, reversed }) => {
  return (
    <article
      aria-labelledby={`sector-title-${item.id}`}
      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_rgba(0,51,153,0.25)]"
    >
      <div className={`flex flex-col lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}>
        <div className="flex-1 bg-gradient-to-br from-white via-slate-50 to-[#f4f8ff] p-5 sm:p-7 lg:p-10">
          <div className="flex items-center justify-between gap-3">
          <h3
            id={`sector-title-${item.id}`}
            className="text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            {item.title}
          </h3>

          <h6
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider `}
          >
            {item.sector}
          </h6>
        </div>



          <div className="mt-0 h-0.5 w-25 rounded-full bg-orange-400" />

          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            {item.description}
          </p>


        </div>

        <div className="hidden w-full items-center justify-center bg-gradient-to-br from-[#f7fbff] to-[#eef4ff] p-4 lg:flex lg:w-[300px]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="h-28 w-28 lg:h-39 lg:w-39 object-cover"      
              loading="lazy"
              width="224"
              height="150"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

const WomenEmpowerment = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main className="bg-[#f5f7fb]">
        <HeroSection
          backgroundText="Skill"
          topLabel="National Skill Framework Capabilities"
          title="Skill Training &"
          highlight="Domain Execution Hub"
          footerText="Innovation • Inclusion • Sustainability"
        />

        <section className="relative bg-gradient-to-b from-[#f7fbff] via-[#f5f7fb] to-white py-10 sm:py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex justify-center">
              <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-orange-600">
                About Our Women Empowerment Programs
              </span>
            </div>

            <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  Empowering Youth Through
                  <span className="mt-2 block text-[#003399]">Industry-Oriented Skill Development</span>
                </h2>

                <div className="mt-4 h-1 w-20 rounded-full bg-orange-500" />

                <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    ITCLUB Foundation deploys advanced socio-economic interventions, dedicated skill-building schools, and micro-entrepreneurship programs specifically engineered to transform regional women into financially independent leaders.                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003399]/10 text-lg font-bold text-[#003399]">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Program Focus</h3>
                    <p className="text-sm text-slate-500">Bridging training with livelihoods</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    Hands-on training aligned with current industry demands
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    Strong focus on employability, entrepreneurship and self-reliance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    Community-centered models that support inclusive growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fb] py-10 sm:py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <span className="rounded-full bg-[#003399]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#003399]">
                Our Training Domains
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                Building Real Skills for
                <span className="mt-2 block text-orange-500">Real Opportunities</span>
              </h3>
            </div>

            <div className="space-y-6">
              {sectors.map((item, idx) => (
                <SectorCard key={item.id} item={item} reversed={idx % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WomenEmpowerment;