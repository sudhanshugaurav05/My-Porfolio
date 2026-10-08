import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import CV from "../assets/Sudhanshu Gaurav.pdf";
import {
  DownloadIcon,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const topics = [
  {
    title: "Frontend Developer",
    description:
      "I enjoy building responsive and user-friendly websites with React, JavaScript, and Tailwind CSS. I focus on clear layouts, smooth interactions, and making websites work well across different screen sizes.",
  },
  {
    title: "Cloud Computing Enthusiast",
    description:
      "I am pursuing my MCA with a specialization in Cloud Computing. Through a few projects using AWS and Google Cloud services, I have gained practical experience and continue to explore how applications run in the cloud.",
  },
  {
    title: "Java Developer",
    description:
      "I enjoy using Java to build applications and practise problem-solving. Working on projects helps me strengthen my understanding of programming concepts and improve how I structure and write my code.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % topics.length);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, timerVersion]);

  const changeTopic = (direction) => {
    setActiveIndex(
      (current) => (current + direction + topics.length) % topics.length
    );
    setTimerVersion((current) => current + 1);
  };

  const activeTopic = topics[activeIndex];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 py-22 lg:py-12 sm:px-8 lg:-mt-14 lg:px-14">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          <div
            className="flex w-full justify-center lg:w-1/2"
            data-aos="fade-right"
          >
            <div className="group relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-linear-to-r from-red-600 to-red-800 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
              />

              <img
                src={hero}
                alt="Profile portrait"
                className="relative z-10 h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full border-2 border-red-500/30 scale-110 transition-transform duration-500 group-hover:scale-150"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full border-2 border-red-500/30 scale-125 transition-transform duration-500 group-hover:scale-150"
              />
            </div>
          </div>

          <div
            className="lg:w-3/5 w-full flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 border border-red-500/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm text-red-500 font-medium dark:text-gray-300">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl dark:text-white text-gray-900 mb-3">
              Hi, I'm{" "}
              <span className="text-red-500 dark:text-red-300">
                Sudhanshu Gaurav
              </span>
            </h1>

            
            <div
              className="flex w-full max-w-lg items-center justify-center gap-2 mb-4 lg:justify-start"
              role="group"
              aria-label="Developer topics"
            >
              <button
                type="button"
                onClick={() => changeTopic(-1)}
                aria-label="Previous topic"
                aria-controls="hero-topic"
                className="shrink-0 rounded-full p-2 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-red-500"
              >
                <ChevronLeft size={24} />
              </button>

              <h2
                id="hero-topic"
                className="text-xl sm:text-2xl font-mono dark:text-red-400 text-red-600"
              >
                {activeTopic.title}
              </h2>

              <button
                type="button"
                onClick={() => changeTopic(1)}
                aria-label="Next topic"
                aria-controls="hero-topic"
                className="shrink-0 rounded-full p-2 text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-red-500"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-md lg:max-w-lg">
              {activeTopic.description}
            </p>

            <div className="flex gap-8 mb-7">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "5+", label: "Technologies Mastered" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold dark:text-white text-gray-900">
                    {stat.number}
                  </div>

                  <div className="text-xs dark:text-gray-400 text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <a
                href={CV}
                download
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform"
              >
                <DownloadIcon size={18} />
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full border-2 dark:border-red-500 border-red-600 dark:text-white text-gray-800 font-semibold dark:hover:bg-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all hover:text-red-600 dark:hover:text-white duration-300 transform"
              >
                <Mail size={18} />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;