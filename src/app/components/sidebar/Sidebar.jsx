"use client";

import React, { useState } from "react";
import S from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={S.sidebar}>
      <Link href="/">
        <Image src="/logoPNG.png" alt="logo" width={50} height={50} />
      </Link>
      <button className={S.sidebarBtn} onClick={toggleMenu}>
        <span className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-3.5" : ""}`}></span>
        <span className={`transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-3.5" : ""}`} />
      </button>
      <ul
        className={`transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-x-[110%]"} ${S.sidebarNav}`}
        onClick={toggleMenu}
      >
        <li>
          <Link href="#inicio">Início</Link>
        </li>
        <li>
          <Link href="#benefits">Benefícios</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
