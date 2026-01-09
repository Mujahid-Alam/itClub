import React from 'react';

const stats = [
  { label: "Lives Touched", val: "1.2M+" },
  { label: "Active Projects", val: "45+" },
  { label: "States Covered", val: "12" },
  { label: "Volunteers", val: "5K+" }
];

const StatsSection = () => {
  return (
    <section className="py-3 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-3">
          <p className="text-it-green text-[10px] font-bold uppercase tracking-[0.4em] mb-3">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-it-blue">
            Numbers That Reflect Our Work
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:border-it-green transition duration-300"
            >
              <h4 className="text-3xl md:text-4xl font-black text-it-blue">
                {s.val}
              </h4>

              <div className="w-10 h-[2px] bg-it-green mx-auto my-4"></div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
