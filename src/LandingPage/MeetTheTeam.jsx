import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

const MeetTheTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Team members data
  const teamMembers = [
    {
      name: "Animish Chopade",
      role: "Full-Stack Developer",
      bio: "Passionate about clean code and scalable architectures. Specializes in React, Node.js, and cloud infrastructure.",
      image: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1734357407/Profile_hjw85d.jpg", // Replace with actual team member image
      socialLinks: {
        twitter: "https://x.com/animish06",
        linkedin: "www.linkedin.com/in/animish-chopade",
        github: "https://github.com/Animish2002",
        email: "animishchopade123@gmail.com"
      },
      skills: ["React", "Node.js", "AWS", "TypeScript", "Tailwind CSS","PostgreSQL"]
    },
    {
      name: "Vrushabh Kulkarni",
      role: "Devops Engineer and Project Manager",
      bio: "Skilled at coordinating complex projects and ensuring on-time delivery. Expert in agile methodologies and team coordination.",
      image: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1743758404/gaGF6alp_400x400_ai1f1m.jpg", // Replace with actual team member image
      socialLinks: {
        twitter: "https://x.com/vrushabhdotdev",
        linkedin: "https://www.linkedin.com/in/vrushabhskulkarni/",
        github: "https://github.com/vrushabhskulkarni",
        email: "vrushabhskulkarni@gmail.com"
      },
      skills: ["Agile", "Scrum", "Client Relations"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-white dark:bg-zinc-900">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4">
            MEET THE TEAM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 hero">
            The talent behind TheFortuneClub
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
            Our diverse team of experts brings together the perfect blend of creativity, technical expertise, and business acumen.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-40">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Profile Image with Overlay on Hover */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-300">
                    <TooltipProvider>
                      {Object.entries(member.socialLinks).map(([platform, link], idx) => {
                        let Icon;
                        switch (platform) {
                          case 'twitter': Icon = Twitter; break;
                          case 'linkedin': Icon = Linkedin; break;
                          case 'github': Icon = Github; break;
                          case 'email': Icon = Mail; break;
                          default: Icon = null;
                        }
                        
                        return Icon ? (
                          <Tooltip key={idx}>
                            <TooltipTrigger asChild>
                              <a 
                                href={platform === 'email' ? `mailto:${link}` : link} 
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-yellow-500 flex items-center justify-center transition-colors"
                              >
                                <Icon className="h-4 w-4 text-white" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{platform.charAt(0).toUpperCase() + platform.slice(1)}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : null;
                      })}
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              
              {/* Info section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{member.name}</h3>
                <p className="text-yellow-500 font-medium mb-3">{member.role}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;