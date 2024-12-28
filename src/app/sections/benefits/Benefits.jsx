"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import S from "./benefits.module.css";
import Image from "next/image";

const Benefits = () => {
  const items = [
    {
      id: 1,
      title: "SEO Otimizado",
      description:
        "Com minha experiência em SEO, seu site irá atrair muitos visitantes de qualidade que o encontrarão facilmente no Google.",
    },
    {
      id: 2,
      title: "Sites Rápidos com Next.js",
      description: "Uso Next.js, uma tecnologia de desempenho excelente em qualquer dispositivo.",
    },
    {
      id: 3,
      title: "Design Moderno",
      description: "Visual deslumbrante e funcional para atrair e conquistar seus clientes.",
    },
    {
      id: 4,
      title: "Automatização de Processos",
      description:
        "Também posso automatizar os processos da sua empresa, aumentando muito a produtividade da maneira mais tecnológica.",
    },
    {
      id: 5,
      title: "Suporte Contínuo",
      description: "Faço acompanhamento e atualizações no seu projeto sempre que for necessário.",
    },
    {
      id: 6,
      title: "Sites Responsivos",
      description: "Torno a experiência dos usuários perfeita em qualquer dispositivo, seja smartphone, tablet ou desktop.",
    },
    {
      id: 7,
      title: "Resultados Rápidos",
      description: "Soluções rápidas para seu negócio crescer online com muita eficácia.",
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
      <h1 className={S.title}>O que vai ter no seu projeto?</h1>
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
