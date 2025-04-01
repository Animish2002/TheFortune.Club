import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold text-yellow-500">TheFortuneClub</span>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2 max-w-xs">
              Transforming ideas into digital realities. We build innovative solutions that drive business growth.
            </p>
            <div className="flex gap-4 mt-4">
              <Facebook className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'Services', 'TechStack', 'Process', 'Team', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="group relative text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors w-fit">
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce', 'Digital Marketing', 'Cloud Solutions', 'AI Integration'].map((item) => (
                <li key={item} className="group relative text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors w-fit">
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">123 Innovation Street, Tech Valley, CA 94103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">info@thefortuneclub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Get in Touch</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mt-2">Have a project in mind? Let's discuss how we can help bring your ideas to life.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md transition-colors font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-zinc-300 dark:border-zinc-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} TheFortuneClub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;