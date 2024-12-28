"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import S from "./benefits.module.css";

const Benefits = () => {
  const items = [
    { id: 1, title: "Título 1", description: "Descrição do item 1" },
    { id: 2, title: "Título 2", description: "Descrição do item 2" },
    { id: 3, title: "Título 3", description: "Descrição do item 3" },
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
    </section>
  );
};

export default Benefits;
