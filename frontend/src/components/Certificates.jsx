import React from "react";
import { motion } from "framer-motion";
import certificateImg from "../assets/certificate.png";
import { Award, Calendar, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      straggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Certificates = () => {
  const certificate = [
    {
      id: 1,
      title: "AWS Solutions Architect_FSP",
      issuer: "FutureSkills Prime",
      date: "2026",
      credentialUrl:
        "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/SUDHANSHU%2BGAURAV_162537385.pdf",
    },

    {
      id: 2,
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2025",
      credentialUrl:
        "https://www.credly.com/badges/cbd1ccd8-9456-4264-8e5e-4885c89e8e2a/linked_in_profile",
    },

    {
      id: 3,
      title: "Introduction to Cloud Computing",
      issuer: "Simplilearn",
      date: "2025",
      credentialUrl:
        "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNTExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYzNjY4Nl85NzM3MzIyXzE3NjY2NTYxMzE1NDgucG5nIiwidXNlcm5hbWUiOiJTdWRoYW5zaHUgR2F1cmF2In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1636771186963501490&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz8%2F18nM3Ny9zNk6yrytKTUstKsrMS49PKsovL04tsvXJzMtOTfHMAwDgoT%2BkQQAAAA%3D%3D",
    },

    {
      id: 4,
      title: "Computer Network and Internet Protocol",
      issuer: "NPTEL Online Certification",
      date: "2026",
      credentialUrl:
        "https://www.linkedin.com/in/sudhanshugauravv/overlay/Certifications/788166738/treasury/?profileId=ACoAADtioXoBGZJKmgOCXrBXd7hnKMbUzutbQL8",
    },

    {
      id: 5,
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      credentialUrl:
        "https://www.credly.com/badges/d35183fc-948a-4081-b220-74ee28696d03/linked_in_profile",
    },

    {
      id: 6,
      title: "Python Essentials 1",
      issuer: "Cisco",
      date: "2026",
      credentialUrl:
        "https://www.credly.com/badges/b7fbcdd8-4def-484a-9b8c-60ce427e489f/linked_in_profile",
    },

    {
      id: 7,
      title: "Introduction to Programming Using Python",
      issuer: "Reliance Foundation Skilling Academy",
      date: "2026",
      credentialUrl:
        "https://www.linkedin.com/in/sudhanshugauravv/overlay/Certifications/1543014621/treasury/?profileId=ACoAADtioXoBGZJKmgOCXrBXd7hnKMbUzutbQL8",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div
            className="lg:w-2/5 w-full flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative-group">
              <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="group relative w-64 h-80 sm:w-80 sm:h-90 lg:w-80 lg:h-96">
                <img
                  src={certificateImg}
                  alt="Certificate"
                  className="w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full border-2 border-red-500/30 scale-110 transition-transform duration-500 group-hover:scale-150" />
                <div className="absolute inset-0 rounded-full border-2 border-red-500/30 scale-125 transition-transform duration-500 group-hover:scale-150" />
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 w-full" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20  mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-gray-700 font-medium dark:text-gray-300">
                Certifications
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900 mb-6">
              My{" "}
              <span className="text-red-500 dark:text-red-400">
                Certificates
              </span>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 border-t border-b border-gray-200/50 dark:border-zinc-800/50 w-full"
            >
              {certificate.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className={`p-3 sm:p-4 flex flex-col justify-between group relative transition-colors duration-300 hover:bg-red-500/5 dark:hover:bg-red-500/10 ${
                    index < certificate.length - 1 ? "border-b" : ""
                  } border-gray-200/50 dark:border-zinc-800/50
                        `}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-shadow-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {cert.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-600 dark:text-zinc-400 block mt-0.5">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1.5 shrink-0 max-sm:border-t max-sm:border-gray-100/50 max-sm:dark:barder-zinc-800/30">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400">
                        <Calendar size={13} />
                        <span> {cert.date}</span>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 hover:underline"
                      >
                        Verify <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
