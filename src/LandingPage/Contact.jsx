import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Add your form submission logic here
  };

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

  const contactInfo = [
    {
      icon: <MessageCircle className="h-6 w-6 text-yellow-500" />,
      title: "Chat with us",
      details: "Our friendly team is here to help.",
      contact: "info@thefortuneclub.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-yellow-500" />,
      title: "Phone",
      details: "Mon-Fri from 8am to 6pm.",
      contact: "+1 (555) 123-4567"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4">
            CONTACT US
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 hero">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
            Get in touch with our expert team to discuss your project requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:px-36">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-900 dark:text-zinc-100">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-yellow-500 focus:ring-yellow-500"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-900 dark:text-zinc-100">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-yellow-500 focus:ring-yellow-500"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-zinc-900 dark:text-zinc-100">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-yellow-500 focus:ring-yellow-500"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zinc-900 dark:text-zinc-100">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-yellow-500 focus:ring-yellow-500 resize-none"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-6 font-medium">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1">{info.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{info.details}</p>
                      <p className="text-zinc-800 dark:text-zinc-200 font-medium mt-1">{info.contact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;