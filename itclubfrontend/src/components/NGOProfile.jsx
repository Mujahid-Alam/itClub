import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HandHeart,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const profileImages = [
  {
    src: "/NgoProfile/ngoprofile1.png",
    alt: "Students participating in an ITCLUB Foundation activity",
    className: "h-56 sm:h-64 lg:h-72",
  },
  {
    src: "/NgoProfile/ngoprofile2.png",
    alt: "Youth group at an ITCLUB Foundation program",
    className: "h-44 sm:h-52 lg:h-56 lg:mt-8",
  },
  {
    src: "/NgoProfile/ngoprofile3.png",
    alt: "Computer training lab",
    className: "h-44 sm:h-52 lg:h-56 lg:-mt-8",
  },
  {
    src: "/NgoProfile/ngoprofile4.png",
    alt: "Community training program",
    className: "h-56 sm:h-64 lg:h-72",
  },
];

const trustBadges = [
  { icon: Building2, label: "Section 8", text: "Non-profit organization" },
  { icon: Landmark, label: "MCA", text: "Government registered" },
  { icon: ShieldCheck, label: "80G & CSR-1", text: "Verified foundation" },
];

const focusAreas = [
  "Education",
  "Digital Literacy",
  "Skill Development",
  "Women Empowerment",
];

export default function NgoProfile() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            {profileImages.map((image) => (
              <div
                key={image.src}
                className={`overflow-hidden rounded-xl border border-white bg-gray-100 shadow-sm ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 z-10 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-xl border-4 border-white bg-[#003366] p-4 text-center text-white shadow-xl sm:w-[210px] sm:p-5">
              <BadgeCheck className="mx-auto h-8 w-8 text-[#fe9402]" />
              <p className="mt-3 text-lg font-extrabold leading-tight sm:text-xl">80G & CSR-1</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-blue-100">
                Verified Foundation
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#003366]">
              <HandHeart className="h-3.5 w-3.5 text-[#fe9402]" />
              NGO Profile
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#003366] to-blue-700 bg-clip-text text-transparent">
                Who We
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-700 to-[#fe9402] bg-clip-text text-transparent">
                Are
              </span>
            </h2>
          </div>

          <p className="mt-5 text-sm font-semibold leading-7 text-gray-800 sm:text-base">
            ITCLUB Foundation is a Section 8 non-profit organization established in 2023 and
            registered with the Ministry of Corporate Affairs, Government of India.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            We empower youth, women, and underserved communities through education, technology,
            skill development, and sustainable development initiatives. Our work is driven by
            innovation, community participation, and practical opportunities that improve lives.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Through partnerships with government agencies, CSR organizations, academic
            institutions, and local stakeholders, we implement programs that support inclusive
            growth and build future-ready communities.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-600 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div
                  key={badge.label}
                  className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-[#003366]" />
                  <p className="mt-3 text-sm font-extrabold text-gray-950">{badge.label}</p>
                  <p className="mt-1 text-[11px] leading-5 text-gray-500">{badge.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-5">
            <div className="inline-flex items-center gap-3 text-sm font-bold text-gray-800">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-[#fe9402]">
                <UsersRound className="h-5 w-5" />
              </span>
              Community-first development since 2023
            </div>

            <ArrowRight className="h-4 w-4 text-[#fe9402]" />
          </div>
        </div>
      </div>
    </section>
  );
}
