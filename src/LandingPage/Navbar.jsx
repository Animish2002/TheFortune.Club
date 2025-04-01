import React from "react";

const Navbar = () => {
  return (
    <div className="px-12 py-6 flex justify-between">
      <span className="text-2xl md:text-4xl font-bold text-yellow-500 ui">TheFortuneClub</span>
      <ul className="flex gap-9">
        {['Home', 'Services', 'TechStack', 'Process', 'Projects', 'Contact'].map((item) => (
          <li key={item} className="group relative text-lg md:text-2xl font-extralight ui text-zinc-950 dark:text-zinc-100 cursor-pointer">
            {item}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;