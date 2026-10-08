import React from "react";

const Skills = () => {
  const skills = [
    { name: "React Js", Percentage: 70, color: "#FF54F1" },
    { name: "Express Js", Percentage: 40, color: "#54FF98" },
    { name: "Mongo DB", Percentage: 90, color: "#FF7C54" },
    { name: "HTML", Percentage: 95, color: "#61DAFB" },
    { name: "Cloud Computing", Percentage: 80, color: "#4673FA" },
    { name: "AWS Services", Percentage: 85, color: "#46DCFA" },
    { name: "GCP Services", Percentage: 90, color: "#E63C3C" },
    { name: "JAVA", Percentage: 70, color: "#6487CC" },
    { name: "CSS", Percentage: 85, color: "#30BDFF" },
    { name: "JavaScript", Percentage: 55, color: "#30FFCC" },
  ];
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 h-80 -left-40 w-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
              Experties
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
            My <span className="text-red-500 dark:text-red-400">Skills</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies and tools I use to turn ideas into working projects. I enjoy building responsive interfaces, solving coding problems, and learning through hands-on practice. With each project, I aim to improve my skills and write cleaner, more reliable code. {" "}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {skills.map((skill, index) => {
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const offset =
              circumference - (skill.Percentage / 100) * circumference;
            const size = 150;
            return (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative" style={{ width: size, height: size }}>
                  <svg
                    className="transform -rotate-90"
                    width={size}
                    height={size}
                  >
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      className="dark:stroke-gray-700"
                    ></circle>

                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="10"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                      style={{
                        transition: "stroke-dashoffset 1.5s ease-in-out",
                      }}
                    ></circle>
                  </svg>
                  <div className="absolute flex inset-0 items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl font-bold dark:text-white text-gray-900">
                        {skill.Percentage}%
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="m-4 text-base font-medium text-center dark:text-gray-200 text-gray-900">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
