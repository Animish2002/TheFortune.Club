import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Cloud, Code, Layers, Palette, Database, Search, PenTool, Terminal, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const ServicesAndProcess = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Services data
  const services = [
    {
      title: "SaaS Development",
      description: "We build scalable, secure, and feature-rich SaaS solutions tailored to your business needs.",
      icon: <Cloud className="h-10 w-10 text-yellow-500" />,
      features: ["Custom SaaS Architecture", "API Development", "Cloud Infrastructure"],
      color: "bg-blue-50 dark:bg-blue-950/40"
    },
    {
      title: "UI/UX Design",
      description: "We craft stunning, intuitive interfaces that provide exceptional user experiences.",
      icon: <Palette className="h-10 w-10 text-yellow-500" />,
      features: ["User-Centered Design", "Interactive Prototyping", "Design Systems"],
      color: "bg-purple-50 dark:bg-purple-950/40"
    },
    {
      title: "Full-Stack Development",
      description: "We deliver end-to-end solutions that combine robust backend systems with sleek frontends.",
      icon: <Code className="h-10 w-10 text-yellow-500" />,
      features: ["Frontend Frameworks", "Backend Development", "Database Architecture"],
      color: "bg-green-50 dark:bg-green-950/40"
    }
  ];

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your requirements and define project scope.",
      icon: <Search className="h-6 w-6 text-yellow-500" />
    },
    {
      number: "02",
      title: "Design",
      description: "We create intuitive interfaces and seamless user experiences.",
      icon: <PenTool className="h-6 w-6 text-yellow-500" />
    },
    {
      number: "03",
      title: "Development",
      description: "We build scalable solutions using cutting-edge technologies.",
      icon: <Terminal className="h-6 w-6 text-yellow-500" />
    },
    {
      number: "04",
      title: "Deployment",
      description: "We deploy your solution and provide ongoing support.",
      icon: <Server className="h-6 w-6 text-yellow-500" />
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-24">
      {/* Services Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12 mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4">
            OUR PREMIUM SERVICES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            We transform your ideas into exceptional digital experiences
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
            With our comprehensive SaaS development services, we bring your vision to life with excellence and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-yellow-500 dark:hover:border-yellow-500 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden">
                <CardHeader className={`${service.color} p-6`}>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="h-6 w-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-yellow-500" />
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="group-hover:text-yellow-500 group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/10 transition-colors p-0">
                    <span>Learn more</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4">
            OUR DEVELOPMENT PROCESS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            We follow a streamlined approach
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
            To deliver exceptional results on time and within budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all bg-white dark:bg-zinc-900 overflow-hidden group">
                <div className="absolute top-0 left-0 h-1 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                      {step.icon}
                    </div>
                    <motion.span 
                      className="text-5xl font-bold text-yellow-500/20"
                      whileHover={{ scale: 1.1, color: "rgba(234, 179, 8, 0.3)" }}
                    >
                      {step.number}
                    </motion.span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mt-4 text-zinc-900 dark:text-zinc-100">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connecting line between cards (hidden on mobile) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 right-0 w-8 h-0.5 bg-zinc-200 dark:bg-zinc-700 transform translate-x-full"></div>
              )}
            </motion.div>
          ))}
        </div>

      
      </motion.div>
    </div>
  );
};

export default ServicesAndProcess;