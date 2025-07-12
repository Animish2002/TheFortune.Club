import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Anita Ayurveda",
      category: "web",
      tags: ["Healthcare", "Ayurveda", "React", "HTML/CSS", "JavaScript"],
      image:
        "https://res.cloudinary.com/dkv3bx51z/image/upload/v1741418427/Screenshot_2025-03-08_124729_p5hlln.png",
      description:
        "A professional landing page for an Ayurvedic wellness practitioner showcasing services, testimonials, and appointment booking functionality.",
      clientName: "Dr. Anita's Ayurvedic Clinic",
      completionDate: "February 2024",
      link: "https://anitaayurveda.in",
      githubLink: "https://github.com/Animish2002/AnitaAyurveda",
      features: [
        "Service Showcase",
        "Testimonial Gallery",
        "Appointment Booking",
        "Mobile-Responsive Design",
        "SEO Optimization",
      ],
      technologies: [
        "ReactJs",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      id: 2,
      title: "Legal Practice Management System",
      category: "saas",
      tags: ["Legal", "React", "Node.js", "Case Management"],
      image:
        "https://res.cloudinary.com/dkv3bx51z/image/upload/v1738685386/8ba7ce7f-7b18-4fc7-8586-f4fd4fd48dad.png",
      description:
        "A custom SaaS solution for a legal practitioner featuring client management, case tracking, document management, and automated workflow systems to streamline legal practice operations.",
      clientName: "Pratik Agrawal Law Associates",
      completionDate: "April 2024",
      link: "https://www.pratikagrawal.in",
      githubLink: "https://github.com/Animish2002/AdvPratikAgarwal",
      features: [
        "Client Management Dashboard",
        "Case Tracking System",
        "Document Management",
        "Automated Workflows",
        "Case History Tracking",
        "Billing Integration",
      ],
      technologies: [
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "PostgreSql",
        "Supabase",
        "Express",
        "AWS",
        "Digital Ocean",
      ],
    },
    {
      id: 3,
      title: "Vastu Decor",
      category: "web",
      tags: ["Interior Design", "React Native", "Firebase", "Landing Page"],
      image:
        "https://res.cloudinary.com/dkv3bx51z/image/upload/v1745089710/f49ae799-8cf2-4aa6-9be1-0970b03743b0.png",
      description:
        "Landing page and design inspiration gallery built for an interior design firm to showcase curated home decor ideas. The gallery uses Cloudinary for image hosting, enabling clients to browse, select, and get inspired for their home interiors. The landing page highlights services, aesthetic visuals, and a modern user experience.",
      clientName: "Vastu Decor by Nikhil",
      completionDate: "November 2023",
      link: "https://www.vastudecor.site/",
      githubLink: "https://github.com/Animish2002/vastu-decor",
      features: [
        "Interior Design Firm Landing Page",
        "Design Inspiration Gallery",
        "Cloudinary Image Integration",
        "Modern UI/UX",
        "Mobile-Responsive Layout",
        "Smooth Scrolling & Navigation",
        "Hosted on Vercel",
      ],
      technologies: ["React", "Tailwind CSS", "Cloudinary", "Vercel"],
    },
    {
      id: 4,
      title: "Anuj Bagade",
      category: "web",
      tags: ["Interior Design", "React Native", "Firebase", "Landing Page"],
      image:
        "https://res.cloudinary.com/dkv3bx51z/image/upload/v1752318121/anuj_work_mvr6zt.png",
      description:
        "Landing page and design inspiration gallery built for an interior design firm to showcase curated home decor ideas. The gallery uses Cloudinary for image hosting, enabling clients to browse, select, and get inspired for their home interiors. The landing page highlights services, aesthetic visuals, and a modern user experience.",
      clientName: "Vastu Decor by Nikhil",
      completionDate: "November 2023",
      link: "https://www.anujbagade.com/",
      githubLink: "https://github.com/Animish2002/AnujBagade",
      features: [
        "Interior Design Firm Landing Page",
        "Design Inspiration Gallery",
        "Cloudinary Image Integration",
        "Modern UI/UX",
        "Mobile-Responsive Layout",
        "Smooth Scrolling & Navigation",
        "Hosted on Vercel",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Cloudinary",
        "Vercel",
        "Shadcn UI",
      ],
    },

    // {
    //   id: 4,
    //   title: "EventHub",
    //   category: "web",
    //   tags: ["Events", "Vue.js", "Express"],
    //   image: "/api/placeholder/600/400",
    //   description: "An event management platform with ticket sales, attendee tracking, and virtual event hosting capabilities.",
    //   clientName: "EventPro Inc.",
    //   completionDate: "October 2023",
    //   link: "#",
    //   githubLink: "#",
    //   features: [
    //     "Event Creation",
    //     "Ticket Sales",
    //     "Attendee Management",
    //     "Virtual Event Hosting",
    //     "Analytics Dashboard"
    //   ],
    //   technologies: ["Vue.js", "Express", "PostgreSQL", "AWS"]
    // },
    // {
    //   id: 5,
    //   title: "InvestSmart",
    //   category: "saas",
    //   tags: ["Finance", "React", "Python"],
    //   image: "/api/placeholder/600/400",
    //   description: "A financial investment platform with portfolio management, market analytics, and automated trading strategies.",
    //   clientName: "FinTech Solutions",
    //   completionDate: "August 2023",
    //   link: "#",
    //   githubLink: "#",
    //   features: [
    //     "Portfolio Management",
    //     "Market Analytics",
    //     "Automated Trading",
    //     "Risk Assessment",
    //     "Performance Reporting"
    //   ],
    //   technologies: ["React", "Django", "Python", "TensorFlow"]
    // },
    // {
    //   id: 6,
    //   title: "FoodDelivery Pro",
    //   category: "mobile",
    //   tags: ["Food", "React Native", "Node.js"],
    //   image: "/api/placeholder/600/400",
    //   description: "A comprehensive food delivery platform with real-time order tracking, driver management, and restaurant integration.",
    //   clientName: "Quick Bites Co.",
    //   completionDate: "July 2023",
    //   link: "#",
    //   githubLink: "#",
    //   features: [
    //     "Restaurant Menus",
    //     "Order Tracking",
    //     "Payment Processing",
    //     "Driver Management",
    //     "Customer Ratings"
    //   ],
    //   technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"]
    // }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge
            variant="outline"
            className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4"
          >
            OUR PROJECTS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 hero">
            Showcasing our work
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
            Explore our portfolio of successful projects across various
            industries and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-zinc-900 transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                      <Maximize2 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-yellow-500 hover:text-yellow-600"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Case Study
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>

                    <div className="flex gap-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 flex items-center justify-center transition-colors"
                        >
                          <Github className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 flex items-center justify-center transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl w-[90vw] md:h-auto h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-zinc-600 dark:text-zinc-400">
                {selectedProject?.clientName} • Completed{" "}
                {selectedProject?.completionDate}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full h-auto rounded-lg"
                />

                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    About the Project
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {selectedProject?.description}
                  </p>

                  <div className="grid grid-rows-2 gap-2">
                    {selectedProject?.link && (
                      <Button
                        asChild
                        className="bg-yellow-500 hover:bg-yellow-600 text-white"
                      >
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {selectedProject?.githubLink && (
                      <Button asChild variant="outline">
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                          <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Client
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {selectedProject?.clientName}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default ProjectsGallery;
