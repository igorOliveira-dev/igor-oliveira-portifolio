import React from "react";
import Link from "next/link";
import S from "./begin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Begin = () => {
  return (
    <div className={S.screen}>
      <div className={S.left}>
        <h1 className={S.title}>Igor Oliveira</h1>
        <h2 className={S.subtitle}>Desenvolvedor Full-Stack</h2>
        <div className={S.typewriter}>Transforme suas ideias em código com o melhor dev!</div>
      </div>
      <button className={`transition-all ${S.glowBtn}`}>Entre em contato</button>
      <Link href="#site-content" className={S.viewSiteContent}>
        Veja o que você vai ter no seu site <FontAwesomeIcon icon={faChevronDown} className="h-6" />
      </Link>
    </div>
  );
};

export default Begin;
