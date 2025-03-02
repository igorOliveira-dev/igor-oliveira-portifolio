"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import S from "./benefits.module.css";
import Image from "next/image";

const Benefits = () => {
  const items = [
    {
      id: 1,
      title: "Soluções Inovadoras",
      description:
        "Desenvolvo sistemas robustos e escaláveis utilizando as tecnologias mais modernas, garantindo inovação e performance para transformar seu negócio.",
    },
    {
      id: 2,
      title: "Full Stack",
      description:
        "Minha expertise abrange tanto front-end quanto back-end, possibilitando integrações perfeitas que unem design e funcionalidade de forma excepcional.",
    },
    {
      id: 3,
      title: "Arquitetura Eficiente",
      description:
        "Projeto soluções com foco em escalabilidade, segurança e alta performance, preparando sua empresa para o crescimento e os desafios futuros.",
    },
    {
      id: 4,
      title: "Automação Avançada",
      description:
        "Crio sistemas que automatizam processos críticos, aumentando a produtividade e otimizando operações com precisão tecnológica.",
    },
    {
      id: 5,
      title: "Sistemas Conectados",
      description:
        "Experiência na integração de múltiplas plataformas e APIs, facilitando a comunicação entre sistemas e a gestão inteligente de dados.",
    },
    {
      id: 6,
      title: "Versatilidade Técnica",
      description:
        "Habilidades que englobam desde desenvolvimento web e mobile até automação e inteligência artificial, oferecendo soluções completas e inovadoras.",
    },
    {
      id: 7,
      title: "Suporte Contínuo",
      description:
        "Acompanhamento proativo com atualizações estratégicas, mantendo seus sistemas alinhados com as últimas tendências tecnológicas e as demandas do mercado.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={S.screen} id="benefits">
      <h1 className={S.title}>Minhas habilidades</h1>
      <div className={S.container}>
        <button className={S.carouselBtn} onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <div className={S.carousel}>
          <div
            className={S.carouselInner}
            style={{
              transform: `translateX(-${currentIndex * 320}px)`,
            }}
          >
            {items.map((item) => (
              <div key={item.id} className={S.card}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className={S.carouselBtn} onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
      <Image src="/logoPNG.png" alt="logo" width={200} height={200} className={S.image} />
    </section>
  );
};

export default Benefits;
