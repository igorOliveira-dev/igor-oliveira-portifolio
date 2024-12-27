"use client";

import React, { useState } from "react";
import S from "./sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={S.sidebar}>
      <button className={S.sidebarBtn} onClick={toggleMenu}>
        <span className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-3.5" : ""}`}></span>
        <span className={`transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-3.5" : ""}`} />
      </button>
    </div>
  );
};

export default Sidebar;
