import React from "react";
import { CheckCircle } from "lucide-react";

export default function Annual() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <span className="inline-flex items-center rounded-full bg-it-blue/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-it-blue">
              Governance & Transparency
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Corporate Governance & Compliance
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              ITCLUB Foundation operates under the highest standards of fiscal discipline and transparency. Our annual reports, statutory filings, and institutional audit portfolios are maintained with strict donor confidentiality and shared through our verified corporate verification channel.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Annual Report Access</p>
                <p className="mt-2 text-sm text-gray-600">Secure review of financial statements and compliance documentation.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Stakeholder Assurance</p>
                <p className="mt-2 text-sm text-gray-600">Consistent disclosure practices for donors, partners, and regulators.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
              <span className="inline-flex items-center rounded-full bg-it-green/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-it-green">
                Verification Desk
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                For Corporate Due Diligence & CSR Funding Heads
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-600">
                We welcome rigorous baseline evaluations. To receive our institutional audit pack—including MCA status, annual report frameworks, tax clearance protocols, or tailored impact proposals—please submit your request through our secure communication desk.
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
              <div className="flex items-center gap-3 text-gray-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-it-blue/10 text-it-blue">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Verified Information Desk</p>
                  <p className="mt-1 text-base font-semibold text-gray-950">Secure corporate verification for partners and CSR leaders.</p>
                </div>
              </div>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-gray-600">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-it-blue" />
                  Verified MCA status, registration, and compliance details.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-it-blue" />
                  Custom audit and impact-report packages for CSR due diligence.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-it-blue" />
                  Access through our secure corporate verification desk only.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
