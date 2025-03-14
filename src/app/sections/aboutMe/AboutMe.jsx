import React from "react";
import S from "./aboutMe.module.css";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className={S.screen} id="aboutme">
      <div className={S.text}>
        <h1 className={S.title}>Sobre mim</h1>
        <p className={S.paragraph}>
          Meu nome é Igor Ventura de Oliveira, sou programador web com 17 anos e cerca de três anos de experiência. Domino tecnologias
          como React, Next.js, Node.js, Figma, Firebase e inúmeras outras. Estou no terceiro ano do curso técnico em Desenvolvimento de Sistemas na
          ETEC (Escola Técnica Estadual).
        </p>
        <p className={S.paragraph}>
          Trabalho como freelancer e desenvolvendo{" "}
          <Link href="#projects" className={S.link}>
            projetos pessoais
          </Link>{" "}
          como o Byte Realm, meu blog de tecnologia. Meu objetivo é criar soluções inovadoras e impactar grandes marcas.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
