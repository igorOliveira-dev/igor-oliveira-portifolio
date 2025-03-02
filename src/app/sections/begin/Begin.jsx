import React from "react";
import Link from "next/link";
import S from "./begin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Begin = () => {
  return (
    <section className={S.screen} id="begin">
      <div className={S.left}>
        <h1 className={S.title}>Igor Oliveira</h1>
        <h2 className={S.subtitle}>Desenvolvedor Full-Stack</h2>
      </div>
      <div className={S.carrossel}>
        <div className={S.carrosselText}>Transforme suas ideias em código com o melhor dev 😎</div>
      </div>
      <Link href="#contact">
        <button className={`transition-all ${S.glowBtn}`}>Entre em contato</button>
      </Link>
      <Link href="#benefits" className={S.viewSiteContent}>
        Veja as minhas habilidades <FontAwesomeIcon icon={faChevronDown} className="h-6" />
      </Link>
    </section>
  );
};

export default Begin;
