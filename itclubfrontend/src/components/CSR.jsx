import React from "react";
import { Activity, ArrowUpRight, CheckCircle, TrendingUp, PhoneCall } from "lucide-react";

const stats = [
  {
    label: "Transparency",
    value: "100%",
    detail: "Clear fund utilization and reporting for every CSR initiative.",
    tone: "blue",
  },
  {
    label: "Community Reach",
    value: "100+ Villages",
    detail: "Delivering programs across rural and semi-urban communities.",
    tone: "emerald",
  },
  {
    label: "Active Projects",
    value: "8+",
    detail: "Ongoing CSR programs in education, health, and livelihood.",
    tone: "orange",
  },
  {
    label: "Lives Impacted",
    value: "1L+",
    detail: "Supporting families, youth, and women through sustainable programs.",
    tone: "indigo",
  },
];

const toneMap = {
  blue: {
    accent: "bg-it-blue",
    icon: "bg-blue-50 text-it-blue",
  },
  emerald: {
    accent: "bg-emerald-600",
    icon: "bg-emerald-50 text-emerald-700",
  },
  orange: {
    accent: "bg-[#fe9402]",
    icon: "bg-orange-50 text-[#fe9402]",
  },
  indigo: {
    accent: "bg-indigo-600",
    icon: "bg-indigo-50 text-indigo-700",
  },
};

export default function CSR() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
{/* lg:items-end को बदलकर lg:items-center कर दिया गया है */}
<div className="grid gap-8 lg:grid-cols-[0.95fr_1.4fr] lg:items-center">
  
  {/* लेफ्ट वाला टेक्स्ट सेक्शन */}
  <div>
{/* पैरेंट कंटेनर जो दोनों को लेफ्ट और राइट में बांटेगा */}
<div className="flex items-center justify-between w-full">
  
  {/* यह लेफ्ट में रहेगा */}
  <span className="inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-700">
    <Activity className="h-3.5 w-3.5" />
    CSR Partnership
  </span>

  {/* यह बिल्कुल राइट में चला जाएगा */}
  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-it-green">
    <Activity className="h-3.5 w-3.5" />
    Join Our Mission
  </span>

</div>

<h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
  {/* पहला ग्रेडिएंट */}
  <span className="bg-gradient-to-r from-[#003366] to-blue-700 bg-clip-text text-transparent">
    Empower Change
  </span>{" "}
  
  {/* बीच का "via" वर्ड */}
  <span className="text-slate-600 font-medium lowercase">via</span>{" "}
  
  {/* दूसरा ग्रेडिएंट */}
  <span className="bg-gradient-to-r from-blue-700 to-[#fe9402] bg-clip-text text-transparent">
    CSR Partnership
  </span>
</h2>

    <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-mg">
      Join hands with ITCLUB FOUNDATION to create a measurable social impact and fulfill your corporate social responsibility.
    </p>
  </div>

  {/* राइट वाला बॉक्स (अब यह वर्टिकली बीच में रहेगा) */}
  <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur sm:p-7">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-bold text-gray-950">CSR partnership at a glance</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Transparent delivery, community-first design, and reliable impact reporting.
        </p>
      </div>

      <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-it-blue px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md hover:shadow-lg transition-shadow">
        Program Reach
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
  </div>

</div>

        <div className="mt-3 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <h3 className="text-xl font-extrabold text-slate-950">Why Partner With Us?</h3>
              <ul className="mt-2 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-it-blue" />
                  100% Transparency in Fund Utilization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-it-blue" />
                  Detailed Impact Assessment Reports
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-it-blue" />
                  Tax Benefits under 80G Certification
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-it-blue" />
                  Registered CSR-1 Implementation Partner
                </li>
              </ul>
            </div>



            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <h3 className="text-xl font-extrabold text-slate-950">Strategic Impact</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                We design scalable and high-impact projects aligned with your company’s core values and CSR goals, ensuring maximum visibility along with measurable and sustainable results at the grassroots level.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-950">Need Help?</p>
                  <p className="text-sm text-gray-600">Directly speak to our partnership manager.</p>
                </div>
                <a
                  href="tel:+918409744414"
                  className="inline-flex items-center rounded-2xl bg-it-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600"
                >
                  +91-8409744414
                </a>
              </div>
            </div>
          </div>

          {/* csr form here */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold text-gray-950 tracking-tight">CSR Partnership Form</h3>
              <p className="text-sm text-gray-600">
                Share your organization’s priorities to receive a tailored partnership blueprint.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                className="h-12 rounded-2xl border border-gray-300 bg-slate-50 px-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all placeholder:text-gray-400"
                placeholder="Company Name *"
                required
              />
              <input
                type="text"
                className="h-12 rounded-2xl border border-gray-300 bg-slate-50 px-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all placeholder:text-gray-400"
                placeholder="Contact Person Name *"
                required
              />
              <input
                type="email"
                className="h-12 rounded-2xl border border-gray-300 bg-slate-50 px-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all placeholder:text-gray-400"
                placeholder="Official Email *"
                required
              />
              <input
                type="tel"
                className="h-12 rounded-2xl border border-gray-300 bg-slate-50 px-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all placeholder:text-gray-400"
                placeholder="Phone Number *"
                required
              />
              <input
                type="text"
                className="h-12 rounded-2xl border border-gray-300 bg-slate-50 px-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all placeholder:text-gray-400"
                placeholder="CSR Focus Area *"
                required
              />
              <input
                type="text"
                className="h-12 rounded-2xl border border-gray-300 bg-slate-50 px-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all placeholder:text-gray-400"
                placeholder="CSR Budget (Optional)"
              />
              <div className="sm:col-span-2">
                <textarea
                  rows="4"
                  className="w-full rounded-2xl border border-gray-300 bg-slate-50 p-4 text-sm outline-none focus:border-it-blue focus:bg-white focus:ring-2 focus:ring-it-blue/10 transition-all resize-none placeholder:text-gray-400"
                  placeholder="Why do you want to partner with us?"
                />
              </div>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-[#003366] py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-[#0130be]/10 transition-all duration-200 hover:bg-[#002699] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0130be]/20 focus:ring-offset-2">
              Submit Proposal
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
