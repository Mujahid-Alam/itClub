import { useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const affiliations = [
  { name: "NITI Aayog", logo: "/AffiliationsAccreditations/niti.png", tag: "Govt. of India" },
  { name: "MSME", logo: "/AffiliationsAccreditations/msme.png", tag: "Ministry" },
  { name: "NGO Darpan", logo: "/AffiliationsAccreditations/darpan.png", tag: "Portal" },
  { name: "Skill India", logo: "/AffiliationsAccreditations/skillindia.png", tag: "Initiative" },
  { name: "Digital India", logo: "/AffiliationsAccreditations/india.png", tag: "Initiative" },
  { name: "GeM Portal", logo: "/AffiliationsAccreditations/gem.png", tag: "Govt. Procurement" },
  { name: "GST", logo: "/AffiliationsAccreditations/gst.png", tag: "Taxation" },
  { name: "ISO Certified", logo: "/AffiliationsAccreditations/iso.png", tag: "Quality" },
  { name: "Income Tax", logo: "/AffiliationsAccreditations/itr.png", tag: "Govt. Department" },
  { name: "MCA", logo: "/AffiliationsAccreditations/mca.png", tag: "Ministry" },
  { name: "NSDC", logo: "/AffiliationsAccreditations/nsdc.png", tag: "Skill Development" },
  { name: "EPFO", logo: "/AffiliationsAccreditations/epfo.png", tag: "Government" },
  { name: "ESIC", logo: "/AffiliationsAccreditations/esi.png", tag: "Government" },
  { name: "DDU-GKY", logo: "/AffiliationsAccreditations/ddugky.png", tag: "Scheme" },
  { name: "Anudaan", logo: "/AffiliationsAccreditations/anudaan.png", tag: "Portal" },
];

const highlights = [
  { icon: ShieldCheck, value: "15+", label: "Affiliations" },
  { icon: Building2, value: "Govt.", label: "Registrations" },
  { icon: BadgeCheck, value: "ISO", label: "Certified" },
];

function AffiliationCard({ item, className = "w-full max-w-[220px]" }) {
  return (
    <article
      className={`group relative flex h-[150px] flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-md bg-gray-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
          {item.tag}
        </span>
        <BadgeCheck className="h-4 w-4 text-blue-600 opacity-70 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="flex h-16 items-center justify-center px-2">
        <img
          src={item.logo}
          alt={item.name}
          loading="lazy"
          className="max-h-14 w-full object-contain"
        />
      </div>

      <p className="text-center text-sm font-bold text-gray-800">{item.name}</p>
    </article>
  );
}

export default function Affiliations() {
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20">
      <style>{`
        @keyframes affiliationRail {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }

        .affiliation-rail {
          animation: affiliationRail 40s linear infinite;
        }

        .affiliation-rail:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .affiliation-rail {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Recognition & Trust
            </span>

            <h2 className="mt-4 bg-gradient-to-r from-[#003366] via-blue-700 to-[#fe9402] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Affiliations & Accreditations
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Our work is backed by registrations, certifications, and recognized institutional
              associations that strengthen transparency, credibility, and service delivery.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-xl border border-gray-200 bg-white/75 p-3 shadow-sm backdrop-blur">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="min-w-[92px] rounded-lg border border-gray-100 bg-white p-3 text-center"
                >
                  <Icon className="mx-auto h-5 w-5 text-[#003366]" />
                  <div className="mt-2 text-lg font-extrabold text-gray-950">{item.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>

      {showAll ? (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {affiliations.map((item) => (
            <div key={item.name} className="flex justify-center">
              <AffiliationCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mt-10 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-14 before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-14 after:bg-gradient-to-l after:from-gray-50 after:to-transparent sm:before:w-28 sm:after:w-28">
          <button
            type="button"
            aria-label="Scroll affiliations left"
            onClick={() => scrollSlider("left")}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Scroll affiliations right"
            onClick={() => scrollSlider("right")}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div ref={sliderRef} className="no-scrollbar overflow-x-auto py-2">
            <div className="affiliation-rail flex w-max gap-6 px-16 sm:px-24">
              {[...affiliations, ...affiliations].map((item, index) => (
                <AffiliationCard
                  key={`${item.name}-${index}`}
                  item={item}
                  className="w-[220px] shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      )}

<div className="mt-5 border-b border-slate-200 bg-white">
  <div className="flex flex-col items-center justify-between gap-5 px-6 py-5 md:flex-row md:px-8">
    <div>
      <h5 className="text-base font-bold text-[#003366]">
        Trusted Recognition
      </h5>

      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
        Recognized across government, compliance, and institutional platforms.      </p>
    </div>

    <button
      type="button"
      onClick={() => setShowAll((current) => !current)}
      className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#FE9402] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      {showAll ? "Show Slider" : "View All"}
      <ArrowRight className="h-4 w-4" />
    </button>
  </div>
</div>
        



        
    </section>
  );
}
