import React from "react";
import { ArrowBigRight, icons } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import about from "../assets/about.png";

const About = () => {
  const socialLinks = [
    {
      icons: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/sudhanshugauravv/",
      color: "hover:text-pink-500 hover:border-pink-500/40",
    },
    {
      icons: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sudhanshugauravv/",
      color: "hover:text-blue-500 hover:border-blue-500/40",
    },
    {
      icons: FaGithub,
      label: "GitHub",
      href: "https://github.com/sudhanshugaurav05",
      color: "hover:text-gray-500 hover:border-gray-500/40",
    },
    {
      icons: FaTwitter,
      label: "Twitter",
      href: "https://x.com/SudhanshuG13988",
      color: "hover:text-blue-400 hover:border-blue-400/40",
    },
    {
      icons: FaFacebook,
      label: "Facebook",
      href: "https://www.facebook.com/shudanshu.kr.7/",
      color: "hover:text-blue-600 hover:border-blue-600/40",
    },
    {
      icons: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/919142047328",
      color: "hover:text-green-500 hover:border-green-500/40",
    },
  ];
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-14"
    >
      <div className="relative z-10 mx-auto max-w-6xl w-full grid grid-cols-1 gap-12 lg:gap-16 items-center lg:grid-cols-2">
        <div
          className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
          data-aos="fade-right"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xm sm:text:sm text-red-600 dark:text-red-300 uppercase font-semibold tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Turning Ideas Into{" "}
            <span className="text-red-600 dark:text-red-400 block">
              Digital Reality
            </span>
          </h2>
          <p className="text-base lg:text-lg mb-8 max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I’m Sudhanshu Gaurav, a BCA graduate currently pursuing my MCA
            with a specialization in Cloud Computing at Parul University. I
            enjoy building websites and applications using Java, JavaScript, and
            React. I also have hands-on knowledge of AWS and Google Cloud
            services, which I’ve explored through a few cloud-based projects.
            I’m looking for opportunities to apply my skills, learn from
            experienced developers, and grow in software development and cloud
            computing.
          </p>
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icons;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  target="_blank"
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm dark:text-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
          
          

          <a href="#contact" data-aos="fade-up" data-aos-delay="300">
            <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform">
              <ArrowBigRight size={18} />
              Let's Talk
            </button>
          </a>
        </div>
        <div
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <div className="w-full relative max-w-sm lg:max-w-md">
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse" />

            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105" />

            <img
              src={about}
              alt="About"
              className="relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 border-red-500/30 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
