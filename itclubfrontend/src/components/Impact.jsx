import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  MapPinned,
} from "lucide-react";

const impactStats = [
  {
    number: "1+ Lakh",
    label: "Lives Touched",
    detail: "Families, youth, women, and children supported through outreach programs.",
    icon: HeartHandshake,
    tone: "blue",
  },
  {
    number: "100+",
    label: "Villages Reached",
    detail: "Community-level programs delivered across rural and semi-urban areas.",
    icon: MapPinned,
    tone: "emerald",
  },
  {
    number: "8+",
    label: "Active Projects",
    detail: "Ongoing work across education, healthcare, skilling, and social welfare.",
    icon: BriefcaseBusiness,
    tone: "orange",
  },
  {
    number: "10+",
    label: "Indian States",
    detail: "Expanding collaborations and programs across multiple regions.",
    icon: GraduationCap,
    tone: "indigo",
  },
];

const toneMap = {
  blue: {
    icon: "bg-blue-50 text-[#003366]",
    accent: "bg-[#003366]",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-700",
    accent: "bg-emerald-600",
  },
  orange: {
    icon: "bg-orange-50 text-[#fe9402]",
    accent: "bg-[#fe9402]",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-700",
    accent: "bg-indigo-600",
  },
};

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Activity className="h-3.5 w-3.5" />
              Measurable Impact
            </span>

            <h2 className="mt-4 bg-gradient-to-r from-[#003366] via-blue-700 to-[#fe9402] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Our Growing Impact
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Creating sustained change through education, digital literacy, skill development,
              health awareness, and community-focused outreach.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/75 p-4 shadow-sm backdrop-blur sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-gray-950">Impact at a glance</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Built through field programs, partnerships, and local community engagement.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#003366] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                Program Reach
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {impactStats.map((item) => {
            const Icon = item.icon;
            const tone = toneMap[item.tone];

            return (
              <article
                key={item.label}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-5"
              >
                <div className={`absolute left-0 top-0 h-1 w-full ${tone.accent}`} />

                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${tone.icon}`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:text-[#fe9402]" />
                </div>

                <div className="mt-5 text-2xl font-extrabold tracking-tight text-gray-950 sm:mt-6 sm:text-3xl">
                  {item.number}
                </div>

                <h3 className="mt-2 text-xs font-bold uppercase tracking-wide text-gray-800 sm:text-sm">
                  {item.label}
                </h3>

              </article>
            );
          })}
        </div>


        
      </div>
    </section>
  );
}
