import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Tech stack data organized by category
  const techStack = {
    frontend: {
      title: "Frontend Excellence",
      description:
        "Our frontend stack delivers performant and visually stunning user interfaces.",
      icon: <Code className="h-8 w-8 text-yellow-500" />,
      technologies: [
        {
          name: "React",
          description: "Component-based UI library",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1733463787/reactJs_soveio.png",
        },
        {
          name: "Next.js",
          description: "React framework for production",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743758824/nextjs-icon-2048x1234-pqycciiu_onq3mi.png",
        },
        {
          name: "Tailwind",
          description: "Utility-first CSS framework",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1733463788/tailwind-css_bliq6r.webp",
        },
        {
          name: "Supabase",
          description: "Sql Database ",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743759359/logo-light_wjjpvw.png",
        },
        {
          name: "TypeScript",
          description: "Type-safe JavaScript",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743758972/Typescript_logo_2020.svg_w5buha.png",
        },
      ],
      features: [
        "React.js & Next.js for dynamic UIs",
        "Tailwind CSS with shadcn/ui components",
        "TypeScript for type-safe code",
      ],
      bgColor:
        "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    backend: {
      title: "Powerful Backend",
      description:
        "Our backend infrastructure ensures scalability and performance.",
      icon: <Database className="h-8 w-8 text-yellow-500" />,
      technologies: [
        {
          name: "Node.js",
          description: "JavaScript runtime",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1733463786/node_k38red.png",
        },
        {
          name: "MongoDB",
          description: "NoSQL database",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1733463786/mongodb_vgfmzt.png",
        },
        {
          name: "Prisma",
          description: "Next-gen ORM",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743759057/prisma-2_krsoaa.svg",
        },
      ],
      features: [
        "Node.js & Express for API development",
        "MongoDB & Prisma for data management",
        "AWS for reliable cloud infrastructure",
      ],
      bgColor:
        "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    deployment: {
      title: "Seamless Deployment",
      description:
        "Our DevOps practices ensure smooth delivery and maintenance.",
      icon: <Server className="h-8 w-8 text-yellow-500" />,
      technologies: [
        {
          name: "AWS",
          description: "Cloud infrastructure",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743759098/Amazon_Web_Services_vurkol.png",
        },
        {
          name: "Docker",
          description: "Containerization",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743759149/logo-guide-logos-1_tpsykr.svg",
        },
        {
          name: "Digital Ocean",
          description: "Cloud infrastructure",
          img: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743759156/DigitalOcean_logo.svg_ergjrh.png",
        },
      ],
      features: [
        "CI/CD pipelines for automated deployments",
        "Docker for containerized applications",
        "Continuous monitoring and optimization",
      ],
      bgColor:
        "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  return (
    <section
      id="techstack"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-yellow-200/20 dark:bg-yellow-900/10 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative z-10"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge
              variant="outline"
              className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4"
            >
              CUTTING-EDGE TECH STACK
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 hero">
              We leverage the latest technologies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
              To build robust, scalable, and high-performance applications
            </p>
          </motion.div>

          {/* Hexagonal Tech Grid */}
          <TooltipProvider>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20 max-w-5xl mx-auto"
            >
              {Object.values(techStack).flatMap((category) =>
                category.technologies.map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 hover:border-yellow-500 dark:hover:border-yellow-500 p-4 w-32 h-32 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300"
                        whileHover={{
                          y: -5,
                          scale: 1.05,
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                        onHoverStart={() => setHoveredTech(tech.name)}
                        onHoverEnd={() => setHoveredTech(null)}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                            hoveredTech === tech.name
                          }`}
                        >
                          <img src={tech.img} className="text-2xl " />
                        </div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {tech.name}
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-zinc-900 text-zinc-100 dark:bg-zinc-50 dark:text-zinc-900 px-4 py-3">
                      <p>{tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))
              )}
            </motion.div>
          </TooltipProvider>

          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12 hero"
          >
            Modern Technology Framework
          </motion.h3>

          {/* Tech Stack Categories */}
          <div className="space-y-16">
            {Object.entries(techStack).map(([key, category], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className={`rounded-2xl ${category.bgColor} border ${category.borderColor} p-8 md:p-12 shadow-lg overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  {/* Category info - takes 2 columns */}
                  <div className="lg:col-span-2 flex flex-col space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-zinc-700 dark:text-zinc-300 text-lg">
                      {category.description}
                    </p>

                    <div className="space-y-4 mt-2">
                      <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-3">
                        {category.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-700 dark:text-zinc-300">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech logos - takes 3 columns */}
                  <div className="lg:col-span-3 flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-white/50 dark:bg-zinc-800/50 rounded-xl">
                    {category.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col items-center text-center w-32 transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <div className="w-10 h-10 rounded-lg  flex items-center justify-center mb-3">
                          <img src={tech.img} className="text-2xl " />
                        </div>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                          {tech.name}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {tech.description}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-20 bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Discuss your tech requirements
              </h3>
              <p className="text-zinc-300 mb-8">
                Our experts can help you choose the right technologies for your
                project needs.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 text-sm font-medium shadow-lg shadow-yellow-500/20">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
