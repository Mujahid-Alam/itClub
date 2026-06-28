import React from "react";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

const sectors = [
  {
    id: 1,
    image: "/logo2.png",
    sector: "Sector 01",
    title: "IT & ITeS Sector",
    description:
      "Comprehensive implementation of digital literacy programs covering core software operations, advanced database architectures, and responsive web design frameworks. The curriculum emphasizes dynamic computer programming tracks, automated data entry excellence, and domestic business process outsourcing (BPO) environment management to build field-ready technicians.",

  },
  {
    id: 2,
    image: "/logo2.png",
    sector: "Sector 02",
    title: "ESSC Electronics",
    description:
      "Advanced practical vocational training focusing on complex electronic hardware prototyping, precision PCB circuit diagnostics, and home automation network setups. Trainees master systematic troubleshooting protocols for smart consumer appliances and commercial electrical equipment, matching rigorous corporate industrial compliance parameters.",

  },
    {
    id: 3,
    image: "/logo2.png",
    sector: "Sector 03",
    title: "RASCI Retail Operations",
    description:
      "Tailored modules addressing the modern customer lifecycle, automated Point of Sale (POS) infrastructure systems, digital logging, and storefront tracking. Special emphasis is given to advanced corporate consumer relationship protocols, retail metrics documentation, and supply chain updates to generate high-performing retail team professionals.",

  },
    {
    id: 4,
    image: "/logo2.png",
    sector: "Sector 04",
    title: "Telecom Sector",
    description:
      "In-depth functional alignment programs covering modern broadband fiber-optic routing layouts, structured hardware network nodes setup, and smartphone technology diagnostics. Students gain extensive hands-on knowledge on cellular field infrastructure maintenance, transmission link tests, and client terminal customer service. parameters.",

  },
    {
    id: 5,
    image: "/logo2.png",
    sector: "Sector 05",
    title: "Automotive Engineering",
    description:
      "Highly technical tracks focusing on auto-electrical framework layouts, advanced engine diagnostic scanner calibration, and multi-brand mechanical repair standards. Designed to introduce youth to current hybrid/EV technology paradigms, automated maintenance lines, and standardized workshop management models for maximum commercial placement..",

  },
    {
    id: 6,
    image: "/logo2.png",
    sector: "Sector 06",
    title: "Apparel & Garment Design",
    description:
      "Industrial-grade training pipelines specializing in heavy motorized pattern-sewing machinery optimization, fabric precision cutting, and fashion assembly loops. Trainees explore production management documentation alongside boutique micro-entrepreneurship models to catalyze regional textile self-employment opportunities..",

  },
    {
    id: 7,
    image: "/logo2.png",
    sector: "Sector 07",
    title: "Beauty Parlour & Wellness Schools",
    description:
      "A critical women-empowerment skill system covering professional salon cosmetic formulation methods, advanced skin health diagnostics, and therapeutic care. Program maps focus directly on micro-franchise launch mechanics, hygiene compliance management, and financial modeling for establishing independent regional beauty schools.",

  },  {
    id: 8,
    image: "/logo2.png",
    sector: "Sector 08",
    title: "Construction & Infrastructure",
    description:
      "Empowering field workers via extensive structural architecture blueprint analysis, standard masonry setups, and commercial plumbing protocols. Heavy operational focus is pinned on industrial hazard safety guidelines, specialized site layout tools, and primary corporate engineering workspace compliance models.",

  },  {
    id: 9,
    image: "/logo2.png",
    sector: "Sector 09",
    title: "Logistics & Supply Chain",
    description:
      "Strategic corporate-driven pathways outlining advanced warehouse stock scanning management, tracking tool execution, and supply chain software logging. Trainees process distribution data flow parameters, master secure cargo fulfillment protocols, and track multi-channel transport structures to drive efficiency.",

  },  {
    id: 10,
    image: "/logo2.png",
    sector: "Sector 10",
    title: "Healthcare & Village Health Services",
    description:
      "Vital General Duty Assistant (GDA) curriculum mapping optimized for village health services, baseline diagnostic triage support, and home-care ergonomics. The structural path includes strict sanitation regulations, community support planning, and emergency quick-response standards aimed at reinforcing rural healthcare models. ",

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

const SkillDevelopment = () => {
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
                About Our Skill Development Programs
              </span>
            </div>

            <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h4 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  Empowering Youth Through
                  
                </h4>
                <h6 className="mt-1 block text-[#003399]">Industry-Oriented Skill Development</h6>
                <div className="mt-1 h-0.5 w-20 rounded-full bg-orange-500" />

<p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
  ITCLUB Foundation executes comprehensive multi-sector vocational training,
  sustainable livelihood models, and employment-linked empowerment frameworks
  across diversified industrial sectors to drive corporate compliance and
  social transformation.
</p>
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

export default SkillDevelopment;