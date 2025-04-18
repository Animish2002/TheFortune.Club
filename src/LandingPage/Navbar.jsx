import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navItems = [
    "Home",
    "Services",
    "TechStack",
    "Process",
    "Projects",
    "Contact",
  ];

  // Function to handle smooth scrolling
  const handleNavigation = (item) => {
    setActiveItem(item);

    // Special case for Home - scroll to the very top
    if (item === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Get the element to scroll to
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      // Use framer-motion's AnimatePresence to handle animation
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // NavItem component for desktop
  const DesktopNavItem = ({ item }) => (
    <motion.li
      className="relative cursor-pointer transition-colors duration-300 px-3 py-2 ui"
      onClick={() => handleNavigation(item)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span
        className={`text-base font-medium ${
          activeItem === item
            ? "text-yellow-500"
            : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
        }`}
      >
        {item}
      </span>
      <AnimatePresence>
        {activeItem === item && (
          <motion.span
            className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );

  // NavItem component for mobile
  const MobileNavItem = ({ item }) => (
    <motion.li
      className="relative cursor-pointer w-full py-4 border-b border-zinc-100 dark:border-zinc-800"
      onClick={() => {
        handleNavigation(item);
        // You might want to close the mobile menu after clicking an item
        // If you have a state for that, set it here
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`text-lg ${
          activeItem === item
            ? "text-yellow-500 font-medium"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
      >
        {item}
      </span>
    </motion.li>
  );

  return (
    <motion.div
      className="sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-sm backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 text-transparent bg-clip-text ui">
            TheFortuneClub
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-1 lg:gap-2 items-center">
          {navItems.map((item) => (
            <DesktopNavItem key={item} item={item} />
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white">
              Get Started
            </Button>
          </motion.div>
        </ul>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-800 dark:text-zinc-200"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l border-zinc-200 dark:border-zinc-800"
          >
            <nav className="flex flex-col h-full pt-12">
              <ul className="flex flex-col w-full text-center ui">
                {navItems.map((item) => (
                  <MobileNavItem key={item} item={item} />
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white">
                  Get Started
                </Button>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
};

export default Navbar;
