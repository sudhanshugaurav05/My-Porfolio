import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderCode,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "My personal portfolio showcasing my skills, projects, and certifications, with responsive layouts and a light and dark theme.",
    image: project1,
    technologies: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/sudhanshugaurav05/My-Porfolio",
    live: "https://sudhanshugaurav.vercel.app",
  },
  {
    id: 2,
    title: "StudyFlow – Student Study Planner",
    description:
      "A modern Android app to manage subjects, study tasks, exams, deadlines, reminders, and daily progress.",
    image: project2,
    technologies: [
      "Java",
      "XML",
      "SQLite",
      "Android Studio",
      "Material Design",
    ],

    github:
      "https://github.com/Mobile-Application-Development-Project/StudyFlow",
    live: "",
  },
  {
    id: 3,
    title: "Campus Lost & Found",
    description:
      "A web app for students and staff to report, search, and recover lost or found campus items.",
    image: project3,
    technologies: [
      "ASP.NET Core",
      "C#",
      "PostgreSQL",
      "AWS S3",
      "AWS RDS",
      "Docker",
    ],
    github:
      "https://github.com/Web-Application-Development-Projects/Campus-Lost-And-Found",
    live: "",
  },

  {
    id: 4,
    title: "Blood Bank & Donor Management System",
    description:
      "A MERN-based blood bank management system that connects patients with eligible blood donors. It provides donor registration, blood requests, smart donor matching, email alerts, admin verification, blood camps, and patient document verification.",
    image: project4,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    github:
      "https://github.com/sudhanshugaurav05/Blood-Bank-Donor-Management-System",
    live: "https://sudhanshugaurav05.github.io/Blood-Bank-Donor-Management-System/",
  },

  {
    id: 5,
    title: "Smart Hostel Management System",
    description:
      "An Android project for managing hostel rooms, student details, payments, and invoices through student and admin interfaces.",
    image: "",
    technologies: ["Java", "Android", "Firebase"],
    github: "",
    live: "",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("[data-project-card]");
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const distance = card
      ? card.getBoundingClientRect().width + gap
      : container.clientWidth;

    container.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div
          className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="text-center sm:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-sm font-medium text-red-600 dark:text-red-300">
                My Work
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              My{" "}
              <span className="text-red-600 dark:text-red-400">Projects</span>
            </h2>

            <p className="mt-4 max-w-xl leading-relaxed text-gray-700 dark:text-gray-300">
              A selection of projects where I put my learning into practice,
              explored new tools, and worked through real development
              challenges.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => handleScroll(-1)}
              aria-label="Scroll projects left"
              aria-controls="project-list"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/30 text-red-600 transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-red-500 dark:text-red-400 dark:hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => handleScroll(1)}
              aria-label="Scroll projects right"
              aria-controls="project-list"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/30 text-red-600 transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-red-500 dark:text-red-400 dark:hover:text-white"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          id="project-list"
          ref={scrollRef}
          tabIndex={0}
          aria-label="Projects"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              data-project-card
              className="group flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-red-500/20 bg-white/70 shadow-lg backdrop-blur-sm sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] dark:bg-gray-900/50"
            >
              <div className="relative aspect-video overflow-hidden bg-red-500/10">
                <div className="absolute inset-0 flex items-center justify-center text-red-400">
                  <FolderCode size={56} />
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                  className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-red-500/15 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-700 dark:text-red-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-5 border-t border-gray-200/60 pt-4 dark:border-gray-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                    >
                      <Github size={17} />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                    >
                      <ExternalLink size={17} />
                      See Live
                    </a>
                  )}

                  {!project.github && !project.live && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Project links coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
