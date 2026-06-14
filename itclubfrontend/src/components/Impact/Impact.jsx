import React from "react";

const impactStats = [
  {
    number: "1+ Lakh",
    label: "Lives Touched",
    color: "blue",
  },
  {
    number: "100+",
    label: "Villages Reached",
    color: "emerald",
  },
  {
    number: "8+",
    label: "Active Projects",
    color: "indigo",
  },
  {
    number: "10+",
    label: "Indian States",
    color: "sky",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 py-10 px-4 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Our Growing{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text">
              Impact
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {impactStats.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-all"
            >

              {/* ICON CIRCLE */}
              <div className={`w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center bg-${item.color}-50`}>
                <span className="text-xs font-bold text-gray-600">●</span>
              </div>

              {/* NUMBER */}
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
                {item.number}
              </div>

              {/* LABEL */}
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 mt-1 group-hover:text-gray-700">
                {item.label}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}