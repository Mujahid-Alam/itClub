import { useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Droplets,
  GraduationCap,
  HeartPulse,
  MonitorCheck,
  X,
} from "lucide-react";

const PROJECT_DATA = [
  {
    id: "proj-001",
    title: "Free Computer Training Program",
    category: "Digital Literacy",
    description:
      "Empowering local youth with industry-grade IT competencies under the structural framework of Bihar state skill development missions and digital literacy drives.",
    imagePath: "/Projects/project1.png",
    icon: MonitorCheck,
  },
  {
    id: "proj-002",
    title: "Free Rural Middle School",
    category: "Education",
    description:
      "Providing standard primary education, textbook kits, and comprehensive primary literacy up to Class 5 for rural and underprivileged children in remote areas.",
    imagePath: "/Projects/project2.png",
    icon: BookOpenCheck,
  },
  {
    id: "proj-003",
    title: "Free Skill Development Center",
    category: "Livelihood",
    description:
      "Driving women empowerment by providing professional sewing, pattern cutting, and livelihood micro-entrepreneurship support programs.",
    imagePath: "/Projects/project3.png",
    icon: GraduationCap,
  },
  {
    id: "proj-004",
    title: "Free Healthcare Camp",
    category: "Healthcare",
    description:
      "Organizing medical checkups, providing free prescribed medicines, and healthcare awareness for rural and suburban families.",
    imagePath: "/Projects/project2.png",
    icon: HeartPulse,
  },
  {
    id: "proj-005",
    title: "Clean Drinking Water Initiative",
    category: "Community Welfare",
    description:
      "Installing water filtration plants and promoting water conservation practices across water-scarce villages.",
    imagePath: "/Projects/project3.png",
    icon: Droplets,
  },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=700&auto=format&fit=crop";

function ProjectCard({ project, onReadMore, className = "" }) {
  const Icon = project.icon;

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <article
      className={`group relative flex h-full min-h-[300px] w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:min-h-[320px] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={project.imagePath}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
        />

        <div className="absolute left-2 top-2 inline-flex max-w-[calc(100%-16px)] items-center gap-1.5 rounded-md bg-white/95 px-2 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[#003366] shadow-sm sm:left-3 sm:top-3 sm:gap-2 sm:px-2.5 sm:text-[10px]">
          <Icon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          {project.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <h3 className="text-[13px] font-extrabold leading-snug tracking-tight text-gray-950 sm:text-base">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-[11px] leading-5 text-gray-500 sm:mt-3 sm:text-xs sm:leading-6">
          {project.description}
        </p>

        <button
          type="button"
          onClick={onReadMore}
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-orange-100 bg-orange-50 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[#d97600] transition hover:border-[#fe9402]/30 hover:bg-[#fe9402] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#fe9402]/25 sm:mt-5 sm:px-3.5 sm:text-[11px]"
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

export default function Project() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20">
      <style>{`
        @keyframes projectRail {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }

        .project-rail {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: projectRail 45s linear infinite;
        }

        .project-rail:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-rail {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              Community Projects
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#003366] to-blue-700 bg-clip-text text-transparent">
                Our Recent
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-700 to-[#fe9402] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Focused initiatives designed to create measurable change in education, healthcare,
              digital literacy, livelihood, and community welfare.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/75 p-4 shadow-sm backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-[#fe9402]">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-950">{PROJECT_DATA.length}+</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
                  Featured Programs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-4">
          <p className="text-sm font-medium text-gray-600">
            Explore the programs currently driving local, practical, and sustainable impact.
          </p>

          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#fe9402] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#fe9402]/30"
          >
            {showAll ? "Show Slider" : "View All"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {showAll ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {PROJECT_DATA.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onReadMore={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="relative mt-10 overflow-hidden before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-12 before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-12 after:bg-gradient-to-l after:from-gray-50 after:to-transparent sm:before:w-24 sm:after:w-24">
            <div className="project-rail py-2">
              {[...PROJECT_DATA, ...PROJECT_DATA].map((project, index) => (
                <div key={`${project.id}-${index}`} className="w-[275px] shrink-0 sm:w-[340px]">
                  <ProjectCard project={project} onReadMore={() => setSelectedProject(project)} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] shrink-0 bg-gray-100">
              <img
                src={selectedProject.imagePath}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackImage;
                }}
              />
            </div>

            <div className="overflow-y-auto p-5 sm:p-6">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                {selectedProject.category}
              </span>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-gray-950 sm:text-2xl">
                {selectedProject.title}
              </h3>

              <div className="mt-4 h-1 w-12 rounded-full bg-[#fe9402]" />

              <p className="mt-5 text-sm leading-7 text-gray-600">{selectedProject.description}</p>
            </div>

            <div className="flex justify-end border-t border-gray-100 bg-gray-50 p-4">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg bg-[#003366] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
