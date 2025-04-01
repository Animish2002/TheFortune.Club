import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Code, Users } from "lucide-react";

const StatisticsSection = () => {
  const stats = [
    {
      value: "100+",
      label: "Projects Completed",
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      delay: 0.1
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      delay: 0.2
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      delay: 0.3
    },
    {
      value: "2",
      label: "Expert Developers",
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      delay: 0.4
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center group hover:border-l-4 hover:border-yellow-500"
            >
              <div className="bg-zinc-100 dark:bg-zinc-700 rounded-full p-4 mb-5 group-hover:bg-yellow-500/10 transition-colors">
                {stat.icon}
              </div>
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-zinc-600 dark:text-zinc-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatisticsSection;