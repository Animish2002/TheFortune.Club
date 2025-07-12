import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Star,
  Code,
  Palette,
  Zap,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showUnderline, setShowUnderline] = useState(false);

  const words = ["We Build", "Digital", "Excellence"];
  const fullText = "We Build Digital Excellence";

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let currentText = "";
    let wordIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (wordIndex < words.length) {
        if (charIndex < words[wordIndex].length) {
          currentText += words[wordIndex][charIndex];
          setTypewriterText(currentText);
          charIndex++;
        } else {
          // Move to next word
          wordIndex++;
          charIndex = 0;
          if (wordIndex < words.length) {
            currentText += " ";
            setTypewriterText(currentText);
          }

          // Show underline when "Digital" is complete
          if (wordIndex === 2) {
            setTimeout(() => setShowUnderline(true), 500);
          }
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const services = [
    { icon: Code, label: "Web Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Zap, label: "Custom Software" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/10 rounded-lg rotate-12"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-42 min-h-screen ">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-full border border-yellow-200 dark:border-yellow-800">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                  Your Digital Success Partner
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight hero">
                {typewriterText.split(" ").map((word, index) => (
                  <span key={index}>
                    {word === "Digital" ? (
                      <span className="relative inline-block ml-4">
                        <span className="text-yellow-500">{word}</span>
                        {showUnderline && (
                          <svg
                            className="absolute -bottom-2 left-0 w-full h-3"
                            viewBox="0 0 200 12"
                            fill="none"
                          >
                            <motion.path
                              d="M2 8c49.7-2.4 99.7-2.4 149.3 0 7.7.4 15.3.9 23-.1 3.8-.5 7.5-1.2 11.2-2.1"
                              stroke="#fbbf24"
                              strokeWidth="3"
                              strokeLinecap="round"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                          </svg>
                        )}
                      </span>
                    ) : (
                      word
                    )}
                    {index < typewriterText.split(" ").length - 1 &&
                      word !== "Build" &&
                      " "}
                    {word === "Build" && <br />}
                  </span>
                ))}
                <motion.span
                  className="inline-block w-0.5 h-16 bg-yellow-500 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    display:
                      typewriterText.length < fullText.length
                        ? "inline-block"
                        : "none",
                  }}
                />
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Transform your vision into powerful digital solutions. From
                stunning websites to custom software, we deliver results that
                drive your business forward.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    <service.icon className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-yellow-500 dark:hover:border-yellow-500 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                View Our Work
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div> */}
          </div>

          {/* Right Visual Element */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-lg"
            >
              {/* Main container */}
              <div className="relative w-full h-96 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center gap-2 p-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Your Digital Solution
                    </div>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-8 space-y-6">
                  {/* Success metrics */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          Performance Optimized
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Lightning-fast load times
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          Premium Quality
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Crafted with attention to detail
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          Modern Technology
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          Built with latest frameworks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>

              {/* <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center"
                animate={{ rotate: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Palette className="w-6 h-6 text-yellow-500" />
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
