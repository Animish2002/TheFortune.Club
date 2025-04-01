import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code, Layers, Zap, Star } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Floating effect for the shapes
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-5 -top-5 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/4 w-64 h-64 rounded-full bg-yellow-300/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side content */}
          <div className="flex flex-col gap-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight hero"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transforming Ideas Into 
              <span className="relative inline-block ml-3">
                <span className="text-yellow-500">Digital Excellence</span>
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-1 bg-yellow-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert web development and design solutions tailored to scale your business. We blend creativity with technical precision to deliver exceptional digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-6 rounded-md text-lg flex items-center gap-2 group shadow-lg shadow-yellow-500/20">
                Get Started
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 hover:border-yellow-500 dark:hover:border-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-500 font-medium px-8 py-6 rounded-md text-lg">
                Our Projects
              </Button>
            </motion.div>
            
            {animationComplete && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Alert className="mt-8 bg-zinc-100 dark:bg-zinc-800 border-l-4 border-yellow-500">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <AlertTitle className="text-zinc-900 dark:text-zinc-100">Limited Time Offer</AlertTitle>
                  <AlertDescription className="text-zinc-700 dark:text-zinc-300">
                    20% off on all new web development projects this month.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </div>
          
          {/* Right side - Animated creative element */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated background circle */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/40 to-yellow-500/20 backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
              
              {/* Center piece */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg"
                initial={{ rotate: 45, scale: 0 }}
                animate={{ rotate: 45, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              >
                <motion.div 
                  className="text-white text-3xl font-bold transform -rotate-45"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  TFC
                </motion.div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-8 left-24 w-16 h-16 bg-white dark:bg-zinc-800 rounded-lg shadow-lg flex items-center justify-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, ...floatingAnimation }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Code className="text-yellow-500 w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-16 w-16 h-16 bg-white dark:bg-zinc-800 rounded-lg shadow-lg flex items-center justify-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, ...floatingAnimation }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <Layers className="text-yellow-500 w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 right-10 w-16 h-16 bg-white dark:bg-zinc-800 rounded-lg shadow-lg flex items-center justify-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1, ...floatingAnimation }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <Zap className="text-yellow-500 w-8 h-8" />
              </motion.div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" strokeWidth="2" stroke="rgba(234, 179, 8, 0.3)">
                <motion.line 
                  x1="50%" y1="50%" x2="30%" y2="20%"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.line 
                  x1="50%" y1="50%" x2="30%" y2="80%"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                />
                <motion.line 
                  x1="50%" y1="50%" x2="75%" y2="40%"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
       
      </div>
    </div>
  );
};

export default Hero;