import React from "react";

const impactStats = [
  { number: "1+ Lakh", label: "Lives Touched", color: "blue" },
  { number: "100+", label: "Villages Reached", color: "emerald" },
  { number: "8+", label: "Active Projects", color: "indigo" },
  { number: "10+", label: "Indian States", color: "sky" },
];

// safe color mapping (IMPORTANT for Tailwind)
const colorMap = {
  blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600",
  indigo: "bg-indigo-50 text-indigo-600",
  sky: "bg-sky-50 text-sky-600",
};

export default function ImpactSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 px-4 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Growing{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text">
              Impact
            </span>
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Creating real change through education, skill development, and community outreach.
          </p>
                    {/* Decorative Line (kept green for original brand aesthetic, change if needed) */}
          <div className="w-12 h-1 bg-[#0233c3] mx-auto rounded-full mt-4" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {impactStats.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* ICON */}
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${colorMap[item.color]}`}
              >
                <span className="text-lg font-bold">★</span>
              </div>

              {/* NUMBER */}
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {item.number}
              </div>

              {/* LABEL */}
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 mt-2 group-hover:text-gray-700 transition-colors">
                {item.label}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}